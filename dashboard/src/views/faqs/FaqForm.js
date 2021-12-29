import React ,{useState, useEffect} from 'react'
import {Formik, Form} from 'formik';
import { TextField } from '../commun/TextField';
import * as Yup from 'yup';
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormGroup,
  CFormText,
  CRow,
  CAlert,
  CBadge,
  CToast,
  CToastBody,
  CToastHeader,
  CToaster,
} from '@coreui/react'
import UserService from "../../services/UserService";
import ClipLoader from "react-spinners/ClipLoader";

const FaqForms = ({match}) => {
  //__toaster
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
  //__end toaster

  useEffect(() => {
   if( match.params.id ){
    fetch(`${process.env.REACT_APP_API_URL}/api/faqs/`+match.params.id)
      .then((response) => response.json())
      .then((json) => setDataForEdit(json.faqDto))
      
   }
  }, [match.params.id]);

  const initVal ={
    question: '',
    response:'',
  }
  const [dataForEdit, setDataForEdit] = useState(null);
  const [alert, setAlert] = React.useState({ 
    isActive: false, status: '', message: '',})

  const validate = Yup.object({
    question: Yup.string()
    .max(250,"Maximum 250 caractères")
    .required("Champs obligatire"),
    response: Yup.string()        
  })
  const [loadingState, setLoadingState] = useState(false);

  return (
    <div>
    <Formik
      initialValues = {
        dataForEdit || initVal
      }
      enableReinitialize
      validationSchema= {validate}
      onSubmit={values => {
      //  console.log(values)
      setLoadingState(true);
          const requestOptions = {
            method: match.params.id ?'PUT':'POST',
            headers: { 'Content-Type': 'application/json',
            'Authorization': `Bearer ${UserService.getToken()}` },
            body: JSON.stringify(values)
        };

        
        //check if it is POST or PUT
        if(match.params.id){
          fetch(`${process.env.REACT_APP_API_URL}/api/faqs/`+match.params.id, requestOptions)
            .then(response => response.json())//to do:TEST IF SUCCES first
            .then(() => setShow(true))
            .then(() => setLoadingState(false))
            .catch((error) => {
              console.log(error);
              setShowError(true);
              setLoadingState(false);
            })
            // .then(data =>   setAlert({ ...alert,isActive: true, message: "Opération réussie !"}));
        }else{
            fetch(`${process.env.REACT_APP_API_URL}/api/faqs/`, requestOptions)
            .then(response => response.json())
            // .then(data =>   setAlert({ ...alert,isActive: true, message: "Opération réussie !"}));
            .then(() => setShow(true))
            .then(() => setLoadingState(false))
            .catch((error) => {
              console.log(error);
              setShowError(true)
              setLoadingState(false);
            })
          }

            setTimeout(() => {
              setShow(false);
              setShowError(false);
            }, 3000)
      }}
    >
      { formik => (
        <div>
       <Form>
       { alert.isActive ?  <CAlert color="info" closeButton>{alert.message}</CAlert> : ''}
       <CRow>
            <CCol xs="12" sm="6">
              <CCard>
                  <CCardHeader>
                  FAQS
                 </CCardHeader>
                    <CCardBody>
                      <CFormGroup>
                          <TextField label="Question*:" name="question" 
                          type="text" placeholder="Entrer la question..." 
                          autoComplete="question" 
                          defaultValue="Normal"
                          />
                          <CFormText className="help-block">Veuillez entrer la question</CFormText>
                      </CFormGroup>
                      <CFormGroup>
                          <TextField label="Reponse:" name="response" 
                          type="text" placeholder="Entrer la reponse..." 
                          autoComplete="response" 
                          defaultValue="Normal"

                          />
                          <CFormText className="help-block">Veuillez entrer la reponse</CFormText>
                      </CFormGroup>
                    </CCardBody>

                    <CCardFooter>
                      <button className="btn btn-dark mt-3" type="submit"
                      disabled={loadingState}
                      >{match.params.id ? 'Modifier': 'Enregistrer'}
                      <ClipLoader loading={loadingState} size={15} />
                      </button>
                      <button className="btn btn-danger mt-3 ml-3" type='reset'>Réinitialiser</button>
                    </CCardFooter>

              </CCard>
            </CCol>
    
          </CRow>
       </Form>
        </div>    
      )
      }
    </Formik>   
    {/* SHOW SUCCES */}
    <CCol sm="12" lg="6">
      <CToaster
        position={'top-right'}
      > 
            <CToast
              show={show}
              autohide={true && 4000}
              fade={true}
            >
              <CToastHeader closeButton={true}>
              <CBadge className="mr-1" color="success">SUCCÈS</CBadge>              
              </CToastHeader>
              <CToastBody  color="success">
                Opération réussie !
              </CToastBody>
            </CToast>
      </CToaster>
    </CCol>

      {/* SHOW ERROR */}
      <CCol sm="12" lg="6">
      <CToaster
        position={'top-right'}
      > 
            <CToast
              show={showError}
              autohide={true && 4000}
              fade={true}
            >
              <CToastHeader closeButton={true}>
              <CBadge className="mr-1" color="danger">ECHEC</CBadge>              
              </CToastHeader>
              <CToastBody  color="danger">
                Echec de l'opération. Veuillez essayer plus tard !
              </CToastBody>
            </CToast>
      </CToaster>
    </CCol>
  </div>
  )
}
export default FaqForms
