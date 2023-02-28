import { useState } from "react";
import { Table } from "reactstrap";
import ModalAdmin from "../../../Layout/AdminLayout/components/ModalAdmin";

import "./ListCategory.scss";

function ListCategory(data, setData) {
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

  const handleEditActiveCategory = (category) => {
    console.log("active category", category);
  };
  return (
    <div className="listaccount__container">
      <Table striped className="listaccount__table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Url</th>
            <th>UrlParent</th>
            <th>CreateAt</th>
            <th>CreateBy</th>
            <th>UpdateAt</th>
            <th>UpdateBy</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataAccount &&
            dataAccount.length > 0 &&
            dataAccount.map((category) => {
              return (
                <tr key={category.id}>
                  <th scope="row">{category.id}</th>
                  <td>{category.name}</td>
                  <td>{category.email}</td>
                  <td>{category.email}</td>
                  <td>{category.createAt}</td>
                  <td>{category.createBy}</td>
                  <td>{category.updateAt}</td>
                  <td>{category.updateBy}</td>
                  <td>{category.active}</td>
                  <td className="listaccount__table--actions">
                    <i
                      className="fa fa-edit"
                      onClick={() => handleEditActiveCategory(category)}
                    />
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
      {/* <ModalAdmin
        modal={modal}
        toggle={toggle}
        user={account}
        data={data}

        // setData={setData}
      /> */}
      <ModalAdmin modal={modalDelete} toggle={toggleDelete} deletemode />
    </div>
  );
}

export default ListCategory;
