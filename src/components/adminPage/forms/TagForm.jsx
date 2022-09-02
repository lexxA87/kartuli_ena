import React, { useEffect, useState } from "react";

import { useMutation } from "@apollo/client";
import { CREATE_TAG } from "../../../apollo/tags";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form } from "react-bootstrap";

function TagForm({ handleClose, refetch }) {
  const [newTag, loading] = useMutation(CREATE_TAG);
  const [isLoading, setLoading] = useState(false);

  const tagFormSubmit = (values) => {
    setLoading(loading);
    newTag({
      variables: {
        input: values,
      },
    })
      .then((data) => {
        alert("Saved new tag!");
        refetch();
        handleClose();
      })
      .catch((error) => {
        // console.log(error);
        alert("something wrong....");
        handleClose();
      });
    // handleClose();
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
  });

  return (
    <Formik
      onSubmit={tagFormSubmit}
      validationSchema={validationSchema}
      initialValues={{ title: "" }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
        setFieldValue,
        touched,
        setFieldTouched,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="titleInput">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={values.title}
              onChange={handleChange}
              isInvalid={!!errors.title}
              autoFocus
            />
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="success" type="submit" disabled={isLoading}>
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default TagForm;
