import React from 'react';
import { CSelect} from '@coreui/react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({label, type, options, ...props}) => {
    const [ field, meta] = useField(props);
    return (
        <div className="mb-2" >
            <label htmlFor={field.name}>{label}</label>
            {type === "textarea" ?
            <textarea 
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid' }`}
            placeholder="Veuillez entrer la description..."
            rows="6"
            {...field} {...props}
            ></textarea>:
            type === "select" ?
            <CSelect name={label}
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid' }`}
            {...field} {...props}>
                <option  value={0}>Choisir</option>
                 { options.map((option, key) => {              
                    return <option key={key} value={option.id}>{option.nom}</option>
                    })}      
            </CSelect>:
            type === "selectString" ?
            <CSelect name={label}
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid' }`}
            {...field} {...props}>
                <option  value={0}>Choisir</option>
                 { options.map((option, key) => {              
                    return <option key={key} value={option}>{option}</option>
                    })}      
            </CSelect>:
        //     type == "file" ?
        //     <CCol xs="12" md="12">
        //      <CInputFile custom id="custom-file-input" />
        //     <CLabel htmlFor="custom-file-input" variant="custom-file">
        //     Choisir fichier...
        //     </CLabel>
        //     </CCol>
        //    :
            type === "date" ?
            <input type='date'
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid' }`}
            {...field} {...props}
            />:
            <input 
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid' }`}
            {...field} {...props}
            />
            }
            <ErrorMessage component="div" name={field.name} style={{position: "absolute", color:"red", fontSize: ".6rem"} }/>
            
        </div>
    )
}