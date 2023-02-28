import { useState } from "react";
import { Table } from "reactstrap";
import ModalAdmin from "../../../Layout/AdminLayout/components/ModalAdmin";
import { useStore, actions } from "../../../store";

import "./ListAccount.scss";

function ListAccount() {
  const [state, dispatch] = useStore();
  const { dataAccount } = state;
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [account, setAccount] = useState();
  const [accountDelete, setAccountDelete] = useState();

  const toggleDelete = (id) => {
    console.log("id", id);
    setAccountDelete(id);
    setModalDelete(!modalDelete);
  };

  const toggle = (account) => {
    console.log("account", account);
    setAccount(account);
    setModal(!modal);
  };

  const handleEditActive = (account) => {
    if (account.status || account.status.toString() === "false") {
      const newListAccount = [...dataAccount];
      const index = newListAccount.findIndex((item) => item.id === account.id);
      newListAccount[index].status = !newListAccount[index].status;
      dispatch(actions.editAccount(newListAccount));
    }
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
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataAccount &&
            dataAccount.length > 0 &&
            dataAccount.map((account, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{account.name}</td>
                  <td>{account.email}</td>
                  <td>{account.createAt}</td>
                  <td>{account.createBy}</td>
                  <td>{account.updateAt}</td>
                  <td>{account.updateBy}</td>
                  <td>{account.role}</td>
                  <td>{account.status.toString()}</td>
                  <td className="listaccount__table--actions">
                    <i
                      className="fa fa-edit"
                      onClick={() => handleEditActive(account)}
                    />
                    <i
                      className="fa fa-trash-o"
                      onClick={() => toggleDelete(account)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ModalAdmin modal={modal} toggle={toggle} user={account} />
      <ModalAdmin
        modal={modalDelete}
        toggle={toggleDelete}
        deletemode
        data={accountDelete}
      />
    </div>
  );
}

export default ListAccount;
