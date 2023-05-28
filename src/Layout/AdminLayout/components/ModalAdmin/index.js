import { useEffect, useState } from "react";
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
import {
  createNewCategory,
  createNews,
  deleteCategory,
  deleteNews,
  createUser,
  deleteUser,
  getCategories,
} from "../../../../ApiService";

function ModalAdmin({ modal, toggle, create, user, deletemode, data, fetch }) {
  const [state, dispatch] = useStore();
  const { dataAccount } = state;
  const { dataCategory } = state;
  const { dataNews } = state;
  const { isCreate } = state;

  const userLocal = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [comfirmPassword, setComfirmPassword] = useState();
  const [email, setEmail] = useState();

  const [nameCategory, setNameCategoty] = useState();
  const [descriptionCate, setDescriptionCate] = useState();
  const [urlParentCategory, setUrlParentCategory] = useState();

  const [captionNews, setCaptionNews] = useState();
  const [imageNews, setImageNews] = useState();
  const [descriptionNews, setDescriptionNews] = useState();
  const [contentNews, setContentNews] = useState();
  const [authorNews, setAuthorNews] = useState();

  const [optionCategory,setOptionCategory]= useState()

  useEffect(()=>{
    getCategories().then((res)=>{
      setOptionCategory(res?.data)
    })
  },[])

  const handleCreateNewAccount = () => {
    if (
      name &&
      password &&
      comfirmPassword &&
      email &&
      password === comfirmPassword
    ) {
      const newAccount = {
        name,
        password,
        email,
        createBy: user?.name || null,
        updateBy: user?.name || null,
      };
      createUser(newAccount).then(() => {
        fetch();
      });
      toggle();
    }
  };
  const handleCreateCategory = () => {
    if (nameCategory) {
      const newCategory = {
        categoryName: nameCategory,
        description: descriptionCate,
        parentId: urlParentCategory,
      };
      createNewCategory(newCategory).then(() => {
        fetch();
      });
      toggle();
    }
  };
  const handleCreateNews = () => {
    if (
      captionNews &&
      imageNews &&
      descriptionNews &&
      contentNews &&
      authorNews
    ) {
      const newNews = {
        caption: captionNews,
        image: imageNews,
        description: descriptionNews,
        content: contentNews,
        author: authorNews,
        updateBy: userLocal?.name,
        createBy: userLocal?.name,
        categories: ["1"],
      };
      createNews(newNews).then(() => {
        fetch();
      });
      toggle();
    }
  };

  const handleDeleteAccount = () => {
    const id = { id: data.id };
    console.log(id);
    deleteUser(id).then(() => {
      fetch();
    });
    toggle();
  };

  const handleDeleteCategory = () => {
    const {id} = data;
    deleteCategory(id).then(() => { 
      fetch();
    })
    .catch(()=>{debugger})

    toggle();
  };

  const handleDeleteNews = () => {
    deleteNews(data.id).then(() => {
      fetch();
    });
    toggle();
  };

  const handleUpdateNews = () => {
    const updateNews = {};
    toggle();
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal</ModalHeader>
      {deletemode ? (
        <ModalBody>Do you really want to delete?</ModalBody>
      ) : (
        <ModalBody>
          {create === "account" ? (
            <>
              <FormGroup row>
                <Label sm={2}>Name</Label>
                <Col sm={10}>
                  <Input
                    name="name"
                    defaultValue={user ? user.name : ""}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Username</Label>
                <Col sm={10}>
                  <Input
                    name="address"
                    type="text"
                    defaultValue={user ? user.comfirmpassword : ""}
                    onChange={(e) => setComfirmPassword(e.target.value)}
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
              <FormGroup row>
                <Label sm={2}>Address</Label>
                <Col sm={10}>
                  <Input
                    name="address"
                    type="text"
                    defaultValue={user ? user.comfirmpassword : ""}
                    onChange={(e) => setComfirmPassword(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Phone</Label>
                <Col sm={10}>
                  <Input
                    name="phone"
                    type="text"
                    defaultValue={user ? user.comfirmpassword : ""}
                    onChange={(e) => setComfirmPassword(e.target.value)}
                  />
                </Col>
              </FormGroup>
            </>
          ) : (
            <>
              {create === "category" ? (
                <>
                  <FormGroup row>
                    <Label sm={3}>Name Category</Label>
                    <Col sm={9}>
                      <Input
                        name="name"
                        defaultValue={user ? user?.categoryName : ""}
                        type="text"
                        onChange={(e) => setNameCategoty(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={3}>Description</Label>
                    <Col sm={9}>
                      <Input
                        name="description"
                        defaultValue={user ? user?.description : ""}
                        type="textarea"
                        onChange={(e) => setDescriptionCate(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={3}>Parent</Label>
                    <Col sm={9}>
                      <Input id="exampleSelect" name="select" type="select" onChange={(e)=>setUrlParentCategory(e.target.value)}>
                        <option value={null}></option>
                        {
                          optionCategory?.map((item,index)=>(
                            <option key={index} value={item?.id}>{item?.categoryName}</option>
                          ))
                        }
                      </Input>
                    </Col>
                  </FormGroup>
                </>
              ) : (
                <>
                  <FormGroup row>
                    <Label sm={2}>Caption</Label>
                    <Col sm={10}>
                      <Input
                        name="name"
                        placeholder={""}
                        defaultValue={data ? data.caption : ""}
                        type="text"
                        onChange={(e) => setCaptionNews(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={2}>Image</Label>
                    <Col sm={10}>
                      <Input
                        name=""
                        placeholder={""}
                        defaultValue={data ? data.image : ""}
                        type="text"
                        onChange={(e) => setImageNews(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={2}>Description</Label>
                    <Col sm={10}>
                      <Input
                        name=""
                        placeholder={""}
                        type="textarea"
                        defaultValue={data ? data.description : ""}
                        onChange={(e) => setDescriptionNews(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={2}>Content</Label>
                    <Col sm={10}>
                      <Input
                        name=""
                        placeholder={""}
                        type="textarea"
                        defaultValue={data ? data.content : ""}
                        onChange={(e) => setContentNews(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={2}>Author</Label>
                    <Col sm={10}>
                      <Input
                        name=""
                        placeholder={""}
                        type="text"
                        defaultValue={data ? data.author : ""}
                        onChange={(e) => setAuthorNews(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                </>
              )}
            </>
          )}
        </ModalBody>
      )}
      {deletemode ? (
        <ModalFooter>
          {deletemode === "account" ? (
            <Button onClick={handleDeleteAccount}>Delete</Button>
          ) : (
            <>
              {deletemode === "category" ? (
                <Button onClick={handleDeleteCategory}>Delete Category</Button>
              ) : (
                <Button onClick={handleDeleteNews}>Delete News</Button>
              )}
            </>
          )}

          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      ) : (
        <ModalFooter>
          {create === "account" ? (
            <Button onClick={handleCreateNewAccount}>Create</Button>
          ) : (
            <>
              {create === "category" ? (
                <Button onClick={handleCreateCategory}>Create category</Button>
              ) : (
                <>
                  {data ? (
                    <Button onClick={handleUpdateNews}>Update news</Button>
                  ) : (
                    <Button onClick={handleCreateNews}>Create news</Button>
                  )}
                </>
              )}
            </>
          )}

          {/* <Button onClick={handleUpdateAccount}>Update</Button> */}

          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      )}
    </Modal>
  );
}

export default ModalAdmin;
