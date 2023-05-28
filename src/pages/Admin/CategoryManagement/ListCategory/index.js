import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getCategories, updateCategory } from "../../../../ApiService";
import ModalAdmin from "../../../../Layout/AdminLayout/components/ModalAdmin";
import ModalUpdateCategory from "../../../../Layout/AdminLayout/components/ModalUpdateCategory";
import { useStore, actions } from "../../../../store";

import "./ListCategory.css";

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
            <th>Description</th>
            <th>CreateAt</th>
            <th>UpdateAt</th>
          </tr>
        </thead>
        <tbody>
          {dataCategory &&
            dataCategory.length > 0 &&
            dataCategory.map((category, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{category.categoryName}</td>
                  <td>{category.description}</td>
                  <td>{category.createDate}</td>
                  <td>{category.updateDate}</td>
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
