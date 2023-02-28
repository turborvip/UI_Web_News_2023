import { useState } from "react";
import { actions, useStore } from "../../../../store";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
} from "reactstrap";

function ModalAdmin({
  modal,
  toggle,
  create,
  user,
  deletemode,
  setData,
  data,
}) {
  const [state, dispatch] = useStore();
  const { dataAccount } = state;

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [comfirmPassword, setComfirmPassword] = useState();
  const [email, setEmail] = useState();
  const handleCreateNewAccount = () => {
    const newListAccount = [...dataAccount];
    if (
      name &&
      password &&
      comfirmPassword &&
      email &&
      password === comfirmPassword
    ) {
      const newAccount = { name, password, email };
      newListAccount.push(newAccount);
      console.log("newListAccount", newListAccount);
      dispatch(actions.addAccount(newListAccount));
      toggle();
    }
  };
  const handleUpdateAccount = () => {
    const newAccount = {
      name: name ? name : user.name,
      password: password ? password : user.password,
      email: email ? email : user.email,
    };
    const newData = [...data.data];

    const index = newData.findIndex((item) => item.name === user.name);
    newData[index] = newAccount;
    setData(newData);
  };

  const handleDeleteAccount = () => {
    console.log("data", data);
    const newListAccount = [...dataAccount];
    const index = newListAccount.findIndex((item) => item.id === data.id);
    if (index > -1) {
      newListAccount.splice(index, 1);
    }
    dispatch(actions.deleteAccount(newListAccount));
    toggle();
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal</ModalHeader>
      {deletemode ? (
        <ModalBody>Do you really want to delete?</ModalBody>
      ) : (
        <ModalBody>
          {create ? (
            <>
              <FormGroup row>
                <Label sm={2}>Name</Label>
                <Col sm={10}>
                  <Input
                    name="name"
                    placeholder={"@admin01"}
                    defaultValue={user ? user.name : ""}
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
                    defaultValue={user ? user.email : ""}
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
                    defaultValue={user ? user.password : ""}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Comfirm Password</Label>
                <Col sm={10}>
                  <Input
                    name="comfirmpassword"
                    placeholder={"@123456"}
                    type="password"
                    defaultValue={user ? user.comfirmpassword : ""}
                    onChange={(e) => setComfirmPassword(e.target.value)}
                  />
                </Col>
              </FormGroup>
            </>
          ) : (
            <>
              <FormGroup row>
                <Label sm={2}>Name</Label>
                <Col sm={10}>
                  <Input
                    name="name"
                    placeholder={"@admin01"}
                    defaultValue={user ? user.name : ""}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Url</Label>
                <Col sm={10}>
                  <Input
                    name="email"
                    placeholder={"@admin01@gmail.com"}
                    defaultValue={user ? user.email : ""}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>UrlParent</Label>
                <Col sm={10}>
                  <Input
                    name="password"
                    placeholder={"@123456"}
                    type="password"
                    defaultValue={user ? user.password : ""}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
              </FormGroup>
            </>
          )}
        </ModalBody>
      )}
      {deletemode ? (
        <ModalFooter>
          <Button onClick={handleDeleteAccount}>Delete</Button>
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      ) : (
        <ModalFooter>
          <Button onClick={handleCreateNewAccount}>Create</Button>

          {/* <Button onClick={handleUpdateAccount}>Update</Button> */}

          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      )}
    </Modal>
  );
}

export default ModalAdmin;
