import { useState } from "react";
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
import { updateCategory } from "../../../../ApiService";

function ModalUpdateCategory({ modal, toggle, category, fetch }) {
  const [nameCategory, setNameCategoty] = useState();
  const [urlCategory, setUrlCategoy] = useState();
  const [active, setActive] = useState();
  //   const [urlParentCategory, setUrlParentCategory] = useState();

  const handleUpdateCategory = () => {
    console.log("active", active);
    const newCategory = {
      id: category.id,
      title: nameCategory ? nameCategory : category.title,
      url: urlCategory ? urlCategory : category.url,
      status: active !== undefined ? active : category.status,
    };
    console.log("new", newCategory);
    updateCategory(newCategory).then(() => {
      toggle();
      fetch();
    });
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
        <FormGroup row>
          <Label sm={2}>Name</Label>
          <Col sm={10}>
            <Input
              name="name"
              placeholder={"@admin01"}
              defaultValue={category ? category.title : ""}
              type="text"
              onChange={(e) => setNameCategoty(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Url</Label>
          <Col sm={10}>
            <Input
              name="email"
              placeholder={"@admin01@gmail.com"}
              defaultValue={category ? category.url : ""}
              type="email"
              onChange={(e) => setUrlCategoy(e.target.value)}
            />
          </Col>
        </FormGroup>
        {/* <FormGroup row>
          <Label sm={2}>UrlParent</Label>
          <Col sm={10}>
            <Input
              name="password"
              placeholder={"@123456"}
              type="text"
              defaultValue={category ? category.urlParent : ""}
              onChange={(e) => setUrlParentCategory(e.target.value)}
            />
          </Col>
        </FormGroup> */}
        <FormGroup tag="fieldset">
          <legend>Active</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" onClick={() => setActive(1)} />{" "}
              Active
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" onClick={() => setActive(0)} />
              Unactive
            </Label>
          </FormGroup>
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
