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
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [birthday, setBirthday] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [avatar, setAvatar] = useState();

  const userLocal = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const handleUpdateAccount = async () => {
    const newAccount = {
      avatar: avatar ? avatar : account.image,
      fullName: name ? name : account?.name,
      email: email ? email : account?.email,
      birthday: birthday ? birthday : account?.birthday,
      address: address ? address : account?.address,
      phone: phone ? phone : account?.phone,
    };
    await updateUser({id:account?.id,newAccount}).then(() => {
      fetch();
      toggle();
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
              type="text"
              defaultValue={account?.fullName}
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
              type="email"
              defaultValue={account?.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Birthday</Label>
          <Col sm={10}>
            <Input
              name="birthday"
              type="date"
              defaultValue={account?.birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Address</Label>
          <Col sm={10}>
            <Input
              name="address"
              type="text"
              defaultValue={account?.address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Avatar</Label>
          <Col sm={10}>
            <Input
              name="avatar"
              type="text"
              defaultValue={account?.avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Phone</Label>
          <Col sm={10}>
            <Input
              name="phone"
              type="text"
              defaultValue={account?.phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Col>
        </FormGroup>
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
