import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Select from "react-select";
import { Form, Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { UserFullType } from "../../lib/types/userType";
import { SERVER_BASE_URL } from "../../lib/utils/constant";

const validationSchema = yup.object().shape({
  title: yup
    .object()
    .shape({
      value: yup.string(),
      label: yup.string(),
    })
    .required("Please select a value")
    .nullable(),
  firstName: yup.string().required("Required!!!"),
  lastName: yup.string().required("Required!!!"),
  email: yup.string().email("Invalid email format!!!").required("Required!!!"),
});

const AddUserForm = (props: any) => {
  const [isLoading, setLoading] = useState(false);

  const options = [
    { value: "", label: "" },
    { value: "mr", label: "Mr" },
    { value: "ms", label: "Ms" },
    { value: "mrs", label: "Mrs" },
    { value: "miss", label: "Miss" },
    { value: "dr", label: "Dr" },
  ];

  const handleClosePopup = () => {
    props.closePopup();
  };

  const initialValues: UserFullType = {
    title: { value: "", label: "" },
    firstName: "",
    lastName: "",
    email: "",
    picture: "https://randomuser.me/api/portraits/men/79.jpg",
    // gender: "",
    // dateOfBirth: "",
    // registerDate: "",
    // phone: "",
    // location: {},
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setAllTouched();
    if (!formik.isValid) return;
    setLoading(true);

    try {
      await axios({
        url: `${SERVER_BASE_URL}/create`,
        method: "POST",
        headers: { "app-id": "61948d0ce6d8b3a3164452e0" },
        data: {
          ...formik.values,
          title: formik.values.title.value,
        },
      }).then((res) => handleClosePopup());
    } catch (error) {
      console.error(error);
    } finally {
      toast.success("You added user successfully!!!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    }
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
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Select
            options={options}
            name="title"
            value={formik.values.title}
            onChange={(selectedOption) => {
              let event = { target: { name: "title", value: selectedOption } };
              formik.handleChange(event);
            }}
            onBlur={() => formik.handleBlur({ target: { name: "title" } })}
          />
          {formik.touched.title && (
            <Form.Text className="text-danger">{formik.errors.title}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && (
            <Form.Text className="text-danger">
              {formik.errors.firstName}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && (
            <Form.Text className="text-danger">
              {formik.errors.lastName}
            </Form.Text>
          )}
        </Form.Group>
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

        <Button variant="primary" type="submit" disabled={isLoading}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddUserForm;
