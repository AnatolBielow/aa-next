import React, { useState } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { Input, Label, Message, Submit } from "./ComentaryForm.styled";
import { validationSchema } from "./validation";
import { toast } from "react-toastify";

export const ComentaryForm = () => {

  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = (e) => {
    console.log("Sending");
    const data = e.values;
    setSubmitted(true)
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");

      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(false);
        toast.success("Wiadomość wysłana")
      }
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
      onSubmit={(values, { resetForm }) => {
        handleSubmit({ values });
        resetForm();
      }}
    >
      <Form>
        <Label>Imię</Label>
        <Input type="text" name="name" />
        <ErrorMessage name="name" />

        <Label>E-mail</Label>
        <Input type="text" name="email" />
        <ErrorMessage name="email" />

        <Label>Zostaw wiadomość</Label>
        <Message component="textarea" type="text" name="message" />
        <ErrorMessage name="message" />

        <Submit type="submit">
          {submitted? `Wysyłanie...`:`Wyślij wiadomość`}
          </Submit>
      </Form>
    </Formik>
  );
};
