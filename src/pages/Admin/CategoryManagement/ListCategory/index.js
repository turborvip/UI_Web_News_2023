import { useState } from "react";
import { Table } from "reactstrap";
import ModalAdmin from "../../../../Layout/AdminLayout/components/ModalAdmin";
import { useStore, actions } from "../../../../store";

import "./ListCategory.scss";

function ListCategory() {
  const [state, dispatch] = useStore();
  const { dataCategory } = state;
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [categoryDelete, setCategoryDelete] = useState();

  const toggleDelete = (category) => {
    setCategoryDelete(category);
    setModalDelete(!modalDelete);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const handleEditActiveCategory = (category) => {
    if (category.status || category.status.toString() === "false") {
      const newListCategory = [...dataCategory];
      const index = newListCategory.findIndex(
        (item) => item.id === category.id
      );
      newListCategory[index].status = !newListCategory[index].status;
      dispatch(actions.editAccount(newListCategory));
    }
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
          {dataCategory &&
            dataCategory.length > 0 &&
            dataCategory.map((category, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{category.name}</td>
                  <td>{category.url}</td>
                  <td>{category.urlParent}</td>
                  <td>{category.createAt}</td>
                  <td>{category.createBy}</td>
                  <td>{category.updateAt}</td>
                  <td>{category.updateBy}</td>
                  <td>{category?.status?.toString()}</td>
                  <td className="listaccount__table--actions">
                    <i
                      className="fa fa-edit"
                      onClick={() => handleEditActiveCategory(category)}
                    />
                    <i
                      className="fa fa-trash-o"
                      onClick={() => toggleDelete(category)}
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
      <ModalAdmin
        modal={modalDelete}
        toggle={toggleDelete}
        deletemode="category"
        data={categoryDelete}
      />
    </div>
  );
}

export default ListCategory;
