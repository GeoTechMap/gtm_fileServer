import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

const Faq = (props) => {
  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader  className="text-muted">
           FAQS
          </CCardHeader>
          <CCardBody>
            <ul>
              <li>Question : {props.faq.question}</li>
              <li>Reponse : {props.faq.response}</li>

              <li>Créée le : {props.faq.createdDate}</li>
              <li>Créée par :{props.faq.createdBy}</li>
              <li>Dernière modification : {props.faq.lastModifiedDate}</li>
              <li>Modifiée par: {props.faq.lastModifiedBy}</li>
            </ul>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Faq
