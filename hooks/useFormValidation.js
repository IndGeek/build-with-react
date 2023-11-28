import { useState, useEffect } from 'react';

// Custom hook for handling real-time form validation
const useFormValidation = (initialState, validationRules) => {
  const [values, setValues] = useState(initialState);

  const [errors, setErrors] = useState({});

  const [isValid, setIsValid] = useState(false);

  const [touched, setTouched] = useState({});

  useEffect(() => {
    const validateForm = () => {
      // Object to store new errors
      const newErrors = {};
      // Flag to track overall form validity
      let formIsValid = isValid;
      
      // Iterate through each form field
      for (const key in validationRules) {
        console.log('dis is the key...', JSON.stringify(key));
        if (Object.prototype.hasOwnProperty.call(validationRules, key)) {
          // Get validation rules for the field
          console.log(Object.prototype, 'dis is object prototype')
          console.log(Object.prototype.hasOwnProperty.call(validationRules, key))
          const rules = validationRules[key];

          // Check if the field has been touched
          const isFieldTouched = touched[key];

          // Skip validation if the field has not been touched yet
          if (!isFieldTouched) continue;

          // Iterate through each rule for the field
          for (const rule of rules) {
            // Check the validity of the value against the rule
            const isValidRule = rule.validator(values[key]);

            // If the rule is not valid, set an error and break the loop
            if (!isValidRule) {
              newErrors[key] = rule.message;
              formIsValid = false;
              break; // Break on the first validation failure for this field
            }
          }
        }
      }
      if(Object.keys(touched).length == 3 && Object.keys(errors).length == 0 && !formIsValid) formIsValid = true;
      // Update errors and overall form validity
      setErrors(newErrors);
      setIsValid(formIsValid);
    };

    validateForm();
  }, [values, validationRules, touched]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form values
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Mark the field as touched
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };
  // Return form values, errors, validity, and change handler
  return {
    values,
    errors,
    isValid,
    handleChange,
  };
};

export default useFormValidation;
