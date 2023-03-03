import { useState } from "react";
import { Table } from "reactstrap";
import ModalAdmin from "../../../../Layout/AdminLayout/components/ModalAdmin";
import ModalUpdateAccount from "../../../../Layout/AdminLayout/components/ModalUpdateAccount";

import "./ListAccount.scss";

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
            <th>UpdateBy</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((account, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{account.name}</td>
                  <td>{account.email}</td>
                  <td>{account.created_at}</td>
                  <td>{account.createBy}</td>
                  <td>{account.updated_at}</td>
                  <td>{account.updateBy}</td>
                  <td>{account.role}</td>
                  {/* <td>{account.status}</td> */}

                  <td>
                    {(user?.role == "superAdmin" || user.id == account.id) && (
                      <i
                        className="fa fa-edit icon"
                        onClick={() => handleEditActive(account)}
                      />
                    )}

                    {user?.role == "superAdmin" && (
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
