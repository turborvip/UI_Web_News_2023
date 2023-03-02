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

function ModalUpdateAccount({ modal, toggle, account, fetch }) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  // const [comfirmPassword, setComfirmPassword] = useState();
  const [email, setEmail] = useState();

  const handleUpdateAccount = () => {
    const newAccount = {
      name: name ? name : account.name,
      password: password ? password : account.password,
      email: email ? email : account.email,
    };

    toggle();
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
              defaultValue={account ? account.name : ""}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Email</Label>
          <Col sm={10}>
            <Input
              name="email"
              placeholder={"@admin01@gmail.com"}
              defaultValue={account ? account.email : ""}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Password</Label>
          <Col sm={10}>
            <Input
              name="password"
              placeholder={"@123456"}
              type="password"
              defaultValue={account ? account.password : ""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </FormGroup>
        {/* <FormGroup row>
          <Label sm={2}>Comfirm Password</Label>
          <Col sm={10}>
            <Input
              name="comfirmpassword"
              placeholder={"@123456"}
              type="password"
              defaultValue={account ? account.comfirmpassword : ""}
              onChange={(e) => setComfirmPassword(e.target.value)}
            />
          </Col>
        </FormGroup> */}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdateAccount}>
          Update
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalUpdateAccount;
