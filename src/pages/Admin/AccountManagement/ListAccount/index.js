import { useState } from "react";
import { Table } from "reactstrap";
import ModalAdmin from "../../../../Layout/AdminLayout/components/ModalAdmin";
import ModalUpdateAccount from "../../../../Layout/AdminLayout/components/ModalUpdateAccount";

import "./ListAccount.css";

function ListAccount({ data, fetch }) {
  const [modalDelete, setModalDelete] = useState(false);
  const [accountDelete, setAccountDelete] = useState();
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const [accountUpdate, setAccountUpdate] = useState();
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const toggleDelete = (id) => {
    setAccountDelete(id);
    setModalDelete(!modalDelete);
  };

  const handleEditActive = (account) => {
    setAccountUpdate(account);
    toggle();
  };

  return (
    <div className="listaccount__container">
      <Table striped className="listaccount__table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>CreateAt</th>
            <th>CreateBy</th>
            <th>UpdateAt</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data?.map((account, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{account?.fullName}</td>
                  <td>{account?.email}</td>
                  <td>{account?.createDate}</td>
                  <td>{account?.createBy}</td>
                  <td>{account?.updateDate}</td>
                  <td>{account?.role?.roleName}</td>
                  {/* <td>{account.status}</td> */}

                  <td>
                    {(user?.role == "ROLE_SUPER_ADMIN" || user?.id == account?.id) && (
                      <i
                        className="fa fa-edit icon"
                        onClick={() => handleEditActive(account)}
                      />
                    )}

                    {user?.role == "ROLE_SUPER_ADMIN" && (
                      <i
                        className="fa fa-trash-o icon"
                        onClick={() => toggleDelete(account)}
                      />
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ModalAdmin
        modal={modalDelete}
        toggle={toggleDelete}
        deletemode="account"
        data={accountDelete}
        fetch={fetch}
      />
      <ModalUpdateAccount
        modal={modal}
        toggle={toggle}
        fetch={fetch}
        account={accountUpdate}
        listAccount={data}
      />
    </div>
  );
}

export default ListAccount;
