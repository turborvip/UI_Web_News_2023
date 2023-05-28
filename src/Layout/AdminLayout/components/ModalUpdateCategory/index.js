import { useEffect, useState } from "react";
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { getCategories, updateCategory } from "../../../../ApiService";

function ModalUpdateCategory({ modal, toggle, category, fetch }) {
  const [nameCategory, setNameCategory] = useState();
  const [descCategory, setDescCategory] = useState();
  const [optionCategory, setOptionCategory] = useState();
  const [urlParentCategory, setUrlParentCategory] = useState();


  useEffect(() => {
    getCategories().then((res) => {
      setOptionCategory(res?.data);
    });
  }, []);

  const handleUpdateCategory = () => {
    const newCategory = {
      categoryName: nameCategory ? nameCategory : category.categoryName,
      description: descCategory ? descCategory : category.descCategory,
      parentId: urlParentCategory ? urlParentCategory : category.parentId,
    };
    updateCategory({id:category?.id,newCategory}).then(() => {
      toggle();
      fetch();
    });
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Category</ModalHeader>
      <ModalBody>
        <FormGroup row>
          <Label sm={3}>Name</Label>
          <Col sm={9}>
            <Input
              name="name"
              defaultValue={category ? category.categoryName : ""}
              type="text"
              onChange={(e) => setNameCategory(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={3}>Description</Label>
          <Col sm={9}>
            <Input
              name="description"
              defaultValue={category ? category.description : ""}
              type="textarea"
              onChange={(e) => setDescCategory(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={3}>Parent</Label>
          <Col sm={9}>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              onChange={(e) => setUrlParentCategory(e.target.value)}
              defaultValue={category ? category.parentId : ""}
            >
              <option value={null}></option>
              {optionCategory?.map((item, index) => (
                <option key={index} value={item?.id}>
                  {item?.categoryName}
                </option>
              ))}
            </Input>
          </Col>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdateCategory}>
          Update
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalUpdateCategory;
