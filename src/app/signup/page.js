"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Step1 from "./step1";
import Step2 from "./step2";

const Register = () => {
  const [step, setStep] = useState(1);


  const stepValidationSchemas = {
    1: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
    }),
    2: Yup.object({}), 
  };

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={stepValidationSchemas[step]}
      onSubmit={(values, { setSubmitting }) => {
        if (step === 1) {
          setStep(2); 
        } else {
          console.log("Final submit:", values);
        }
        setSubmitting(false);
      }}
    >
      <Form>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 setStep={setStep} />}
      </Form>
    </Formik>
  );
};

export default Register;
