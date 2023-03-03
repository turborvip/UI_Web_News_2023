import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getCategories, updateCategory } from "../../../../ApiService";
import ModalAdmin from "../../../../Layout/AdminLayout/components/ModalAdmin";
import ModalUpdateCategory from "../../../../Layout/AdminLayout/components/ModalUpdateCategory";
import { useStore, actions } from "../../../../store";

import "./ListCategory.scss";

function ListCategory({ dataCategory, fetch }) {
  // const [state, dispatch] = useStore();
  // const { dataCategory } = state;
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [categoryDelete, setCategoryDelete] = useState();
  const [categoryUpdate, setCategoryUpdate] = useState();

  const toggleDelete = (category) => {
    setCategoryDelete(category);
    setModalDelete(!modalDelete);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const handleEditActiveCategory = (category) => {
    setCategoryUpdate(category);
    toggle();
  };
  return (
    <div className="listaccount__container">
      <Table striped className="listaccount__table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Url</th>
            <th>CreateAt</th>
            <th>CreateBy</th>
            <th>UpdateAt</th>
            <th>UpdateBy</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataCategory &&
            dataCategory.length > 0 &&
            dataCategory.map((category, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{category.title}</td>
                  <td>{category.url}</td>
                  <td>{category.created_at}</td>
                  <td>{category.createBy}</td>
                  <td>{category.updated_at}</td>
                  <td>{category.updateBy}</td>
                  <td>{category.status === 1 ? "active" : "unactive"}</td>
                  <td>
                    <i
                      className="fa fa-edit icon"
                      onClick={() => handleEditActiveCategory(category)}
                    />
                    <i
                      className="fa fa-trash-o icon"
                      onClick={() => toggleDelete(category)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ModalAdmin
        modal={modalDelete}
        toggle={toggleDelete}
        deletemode="category"
        data={categoryDelete}
        fetch={fetch}
      />
      <ModalUpdateCategory
        modal={modal}
        toggle={toggle}
        category={categoryUpdate}
        fetch={fetch}
      />
    </div>
  );
}

export default ListCategory;
