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
import { updateUser } from "../../../../ApiService";

function ModalUpdateAccount({ modal, toggle, account, fetch, listAccount }) {
  // const [updateBy, setUpdateBy] = useState();
  const [image, setImage] = useState();

  const userLocal = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const handleUpdateAccount = () => {
    const newAccount = {
      id: account.id,
      image: image ? image : userLocal.image,
      updateBy: userLocal.name,
    };
    console.log(newAccount);
    updateUser(newAccount).then(() => {
      fetch();
    });
    toggle();
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
        <FormGroup row>
          <Label sm={2}>Image</Label>
          <Col sm={10}>
            <Input
              name="image"
              placeholder={""}
              defaultValue={account ? account.image : ""}
              type="text"
              onChange={(e) => setImage(e.target.value)}
            />
          </Col>
        </FormGroup>
        {/* <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={(e) => setUpdateBy(e.target.value)}
          >
            {listAccount &&
              listAccount.length > 0 &&
              listAccount.map((account) => {
                return <option key={account.id}>{account.name}</option>;
              })}
          </Input>
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
