import React, { useEffect, useMemo, useState } from 'react'

export const useForm = (initialForm = {}, paramsFormValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({})

    useEffect(() => {
      createValidator()
    }, [formState])


    const isFormValid = useMemo(() => { 

      for(const formValue of Object.keys(formValidation)) { 
        if( formValidation[formValue] !== null ) return false
      }

      return  true;
    }, [formValidation])

    const onInputChange = ( { target }) => {
        const { name, value} = target;

        setFormState({ 
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => { 
        setFormState( initialForm )
    }

/**
 * Meotodo para validar el formulario 
 * con base a el objetop a evaluar. 
 * si cumple la validacion el mensaje sera nulo 
 * de lo contrario  mandara el mensaje de error establecido.
 */
    const createValidator = () => { 

      const formCheckedValues = {};

      /**
       * para recorrer el formulario de la validacion imprime sus campos:
       * email, password, displyName, etc...
       */
      for( const formField of Object.keys(paramsFormValidations)) { 
        // console.log(formField);
        const [method, errorMessage  = 'este campo es requerido '] = paramsFormValidations[formField]; 

        /**
         * para mostrar mensaje de error si existe un valor o es correcto la validacion manda un null
         * de lo contrario manda el error message
         */
        formCheckedValues[`${ formField }Valid`] = method(formState[formField]) ? null : errorMessage;

        setFormValidation(formCheckedValues);
      }
    }


  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidation,
    isFormValid
  }
}
