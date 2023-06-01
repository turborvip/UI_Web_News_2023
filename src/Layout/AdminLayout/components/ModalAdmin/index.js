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
  updateNews,
} from "../../../../ApiService";
import Sun from "../../../../component/Editor/Sun";
import notify from "../../../../ultis/notify";
import moment from "moment";

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
  const [birthday, setBirthday] = useState();
  const [phone, setPhone] = useState();
  const [avatar, setAvatar] = useState();
  const [address, setAddress] = useState();
  const [username, setUsername] = useState();

  const [nameCategory, setNameCategoty] = useState();
  const [descriptionCate, setDescriptionCate] = useState();
  const [urlParentCategory, setUrlParentCategory] = useState();

  const [captionNews, setCaptionNews] = useState();
  const [imageNews, setImageNews] = useState();
  const [descriptionNews, setDescriptionNews] = useState();
  const [contentNews, setContentNews] = useState();
  const [authorNews, setAuthorNews] = useState();

  const [optionCategory, setOptionCategory] = useState();

  useEffect(() => {
    getCategories().then((res) => {
      setOptionCategory(res?.data);
    });
  }, []);

  const handleCreateNewAccount = () => {
    if (
      username &&
      name &&
      password &&
      comfirmPassword &&
      email &&
      password === comfirmPassword &&
      birthday
    ) {
      const newAccount = {
        username,
        fullName: name,
        password,
        email,
        createBy: user?.name || null,
        updateBy: user?.name || null,
        birthday: moment(birthday).format("DD/MM/yyyy"),
        avatar,
        address,
        phone,
      };
      createUser(newAccount).then(() => {
        fetch();
      });
      toggle();
    } else {
      notify("error", "You can fill all information");
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
  const handleCreateNews = async () => {
    if (captionNews && imageNews && contentNews && urlParentCategory) {
      const newNews = {
        title: captionNews,
        thumbnail: imageNews,
        description: descriptionNews,
        content: contentNews,
        author: authorNews,
        categoryId: urlParentCategory,
      };
      console.log(newNews);
      createNews(newNews).then(() => {
        fetch();
      });
      toggle();
    } else {
      await notify("error", "You need enter all require!");
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
    const { id } = data;
    deleteCategory(id)
      .then(() => {
        fetch();
      })
      .catch(() => {
        debugger;
      });

    toggle();
  };

  const handleDeleteNews = () => {
    deleteNews(data.id).then(() => {
      fetch();
    });
    toggle();
  };

  const handleUpdateNews = async () => {
    const updateNew = {
      title: captionNews || data?.title,
      thumbnail: imageNews || data?.thumbnail,
      description: descriptionNews || data?.description,
      content: contentNews || data?.content,
      author: authorNews || data?.author,
      categoryId: urlParentCategory || data?.category?.id,
    };
    await updateNews({ id: data?.id, news: updateNew }).then(() => {
      toggle();
    });
    fetch();
  };
  return (
    <Modal size="lg" isOpen={modal} toggle={toggle}>
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
                    onChange={(e) => setUsername(e.target.value)}
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
                    onChange={(e) => setBirthday(e.target.value)}
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
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Col>
              </FormGroup>
            </>
          ) : (
            <>
              {create === "category" ? (
                <>
                  <FormGroup row>
                    <Label sm={2}>Name Category</Label>
                    <Col sm={10}>
                      <Input
                        name="name"
                        defaultValue={user ? user?.categoryName : ""}
                        type="text"
                        onChange={(e) => setNameCategoty(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={2}>Description</Label>
                    <Col sm={10}>
                      <Input
                        name="description"
                        defaultValue={user ? user?.description : ""}
                        type="textarea"
                        onChange={(e) => setDescriptionCate(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={2}>Parent</Label>
                    <Col sm={10}>
                      <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                        defaultValue={data ? data?.category?.id : ""}
                        onChange={(e) => setUrlParentCategory(e.target.value)}
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
                </>
              ) : (
                <>
                  <FormGroup row>
                    <Label sm={2}>
                      Title <span style={{ color: "red" }}>*</span>
                    </Label>
                    <Col sm={10}>
                      <Input
                        name="name"
                        placeholder={""}
                        defaultValue={data ? data.title : ""}
                        type="text"
                        onChange={(e) => setCaptionNews(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={2}>
                      Thumbnail <span style={{ color: "red" }}>*</span>
                    </Label>
                    <Col sm={10}>
                      <Input
                        name=""
                        placeholder={""}
                        defaultValue={data ? data.thumbnail : ""}
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
                    <Label sm={2}>
                      Parent <span style={{ color: "red" }}>*</span>
                    </Label>
                    <Col sm={10}>
                      <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                        defaultValue={data ? data?.category?.id : ""}
                        onChange={(e) => setUrlParentCategory(e.target.value)}
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
                  <FormGroup row>
                    <Label sm={2}>
                      Content <span style={{ color: "red" }}>*</span>
                    </Label>
                    <Col sm={10}>
                      <Sun
                        setContentNews={setContentNews}
                        values={data ? data?.content : undefined}
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
