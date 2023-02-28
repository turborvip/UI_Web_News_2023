import { useState } from "react";
import { Table } from "reactstrap";
import ModalAdmin from "../../../components/ModalAdmin";

import "./ListAccount.scss";

function ListAccount(data, setData) {
  const dataAccount = data.data;
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [account, setAccount] = useState();

  const toggleDelete = (id) => {
    console.log("id", id);
    setModalDelete(!modalDelete);
  };

  const toggle = (account) => {
    console.log("account", account);
    setAccount(account);
    setModal(!modal);
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
          {dataAccount &&
            dataAccount.length > 0 &&
            dataAccount.map((account) => {
              return (
                <tr key={account.id}>
                  <th scope="row">{account.id}</th>
                  <td>{account.name}</td>
                  <td>{account.email}</td>
                  <td>{account.createAt}</td>
                  <td>{account.createBy}</td>
                  <td>{account.updateAt}</td>
                  <td>{account.updateBy}</td>
                  <td>{account.role}</td>
                  <td className="listaccount__table--actions">
                    <i className="fa fa-edit" onClick={() => toggle(account)} />
                    <i
                      className="fa fa-trash-o"
                      onClick={() => toggleDelete(account.id)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ModalAdmin
        modal={modal}
        toggle={toggle}
        user={account}
        data={data}
        // setData={setData}
      />
      <ModalAdmin modal={modalDelete} toggle={toggleDelete} deletemode />
    </div>
  );
}

export default ListAccount;
