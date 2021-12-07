import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Form, Button, Container } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Router from "next/dist/client/router";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email format!!!").required("Required!!!"),
  matKhau: yup.string().required("Required!!!"),
});

interface LoginFormProps {
  email: string;
  matKhau: string;
}

const LoginForm = () => {
  const initialValues: LoginFormProps = {
    email: "",
    matKhau: "",
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setAllTouched();
    if (!formik.isValid) return;
    const data = {
      user: {
        email: formik.values.email,
        matKhau: formik.values.matKhau,
      },
    };
    localStorage.setItem("user", JSON.stringify(data.user));
    Router.push("/dashboard");
  };

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const setAllTouched = () => {
    Object.keys(formik.values).forEach((key) => {
      formik.setFieldTouched(key);
    });
  };

  return (
    <Container>
      <Form className={styles.formWrapped} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && (
            <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="matKhau"
            value={formik.values.matKhau}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.matKhau && (
            <Form.Text className="text-danger">
              {formik.errors.matKhau}
            </Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
