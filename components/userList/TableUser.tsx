import React, { useCallback, useContext, useMemo, useState } from "react";
import { Table, Pagination, Container } from "react-bootstrap";
import useSWR, { mutate } from "swr";
import { UserType } from "../../lib/types/userType";
import { SERVER_BASE_URL } from "../../lib/utils/constant";
import fetcher from "../../lib/utils/fetcher";
import ErrorMessage from "../common/ErrorMessage";
import LoadingSpinner from "../common/LoadingSpinner";
import styles from "../../styles/User.module.css";
import { UserListContext } from "../../lib/context/UserListContext";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const TableUser = () => {
  const [page, setPage] = useState(1);
  const { keyword } = useContext(UserListContext);

  const handleChangePage = (number: number) => {
    setPage(number);
  };

  const { data, error } = useSWR(
    `${SERVER_BASE_URL}?page=${page - 1}`,
    fetcher
  );

  const totalPage = Math.ceil(data?.total / 20);
  let items = [];
  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={() => handleChangePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  if (error) return <ErrorMessage message="Cannot load user..." />;
  if (!data) return <LoadingSpinner />;

  return (
    <>
      <Table className={styles.tableUser}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>Fullname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((user: UserType) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img
                  src={user.picture}
                  alt="Avatar User"
                  width="40px"
                  height="40px"
                />
              </td>
              <td>
                {user.title.charAt(0).toUpperCase() + user.title.slice(1)}{" "}
                {user.firstName} {user.lastName}
              </td>
              <td>
                <EditButton userId={user.id} />{" "}
                <DeleteButton userId={user.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Container className={styles.tablePagination}>
        <Pagination>{items}</Pagination>
      </Container>
    </>
  );
};

export default TableUser;
