import { useFormik } from "formik";
import React, { useContext } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import styles from "../../styles/User.module.css";
import { UserListContext } from "../../lib/context/UserListContext";

interface SearchFormProps {
  keyword: string;
}

const FilterUser = () => {
  const { handleKeyword } = useContext(UserListContext);

  const initialValues: SearchFormProps = {
    keyword: "",
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleKeyword(formik.values.keyword);
  };

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    onSubmit: handleSubmit,
  });

  return (
    <div className={styles.searchWrapper}>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <FormControl
            placeholder="Search"
            aria-label="Search"
            name="keyword"
            value={formik.values.keyword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <InputGroup.Prepend className={styles.searchButton}>
            <i className="bi bi-search"></i>
          </InputGroup.Prepend>
        </InputGroup>
      </form>
    </div>
  );
};

export default FilterUser;
