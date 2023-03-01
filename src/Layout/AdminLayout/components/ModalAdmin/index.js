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

function ModalAdmin({ modal, toggle, create, user, deletemode, data }) {
  const [state, dispatch] = useStore();
  const { dataAccount } = state;
  const { dataCategory } = state;
  const { dataNews } = state;

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [comfirmPassword, setComfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [nameCategory, setNameCategoty] = useState();
  const [urlCategory, setUrlCategoy] = useState();
  const [urlParentCategory, setUrlParentCategory] = useState();
  const [captionNews, setCaptionNews] = useState();
  const [imageNews, setImageNews] = useState();
  const [descriptionNews, setDescriptionNews] = useState();
  const [contentNews, setContentNews] = useState();
  const [authorNews, setAuthorNews] = useState();
  const handleCreateNewAccount = () => {
    if (
      name &&
      password &&
      comfirmPassword &&
      email &&
      password === comfirmPassword
    ) {
      const newListAccount = [...dataAccount];
      const newAccount = { name, password, email };
      newListAccount.push(newAccount);
      dispatch(actions.addAccount(newListAccount));
      toggle();
    }
  };
  const handleCreateCategory = () => {
    if (nameCategory && urlCategory && urlParentCategory) {
      const newListCategory = [...dataCategory];
      const newCategory = {
        name: nameCategory,
        url: urlCategory,
        urlParent: urlParentCategory,
      };
      newListCategory.push(newCategory);
      dispatch(actions.addCategory(newListCategory));
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
      const newListNews = [...dataNews];
      const newNews = {
        caption: captionNews,
        image: imageNews,
        description: descriptionNews,
        content: contentNews,
        author: authorNews,
      };
      newListNews.push(newNews);
      dispatch(actions.addNews(newListNews));
      toggle();
    }
  };

  const handleDeleteAccount = () => {
    const newListAccount = [...dataAccount];
    const index = newListAccount.findIndex((item) => item.id === data.id);
    if (index > -1) {
      newListAccount.splice(index, 1);
    }
    dispatch(actions.deleteAccount(newListAccount));
    toggle();
  };

  const handleDeleteCategory = () => {
    const newListCategory = [...dataCategory];
    const index = newListCategory.findIndex((item) => item.name === data.name);
    if (index > -1) {
      newListCategory.splice(index, 1);
    }
    dispatch(actions.deleteCategory(newListCategory));
    toggle();
  };

  const handleDeleteNews = () => {
    const newListNews = [...dataNews];
    const index = newListNews.findIndex((item) => item.id === data.id);
    if (index > -1) {
      newListNews.splice(index, 1);
    }
    dispatch(actions.deleteNews(newListNews));
    toggle();
  };

  const handleUpdateNews = () => {
    const newListNews = [...dataNews];
    const index = newListNews.findIndex((item) => item.id === data.id);
    if (index > -1) {
      newListNews[index].caption = captionNews
        ? captionNews
        : newListNews[index].caption;
      newListNews[index].image = imageNews
        ? imageNews
        : newListNews[index].image;
      newListNews[index].description = descriptionNews
        ? descriptionNews
        : newListNews[index].description;
      newListNews[index].content = contentNews
        ? contentNews
        : newListNews[index].content;
      newListNews[index].author = authorNews
        ? authorNews
        : newListNews[index].author;
      dispatch(actions.editNews(newListNews));
      toggle();
    }
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
              {create === "category" ? (
                <>
                  <FormGroup row>
                    <Label sm={2}>Name</Label>
                    <Col sm={10}>
                      <Input
                        name="name"
                        placeholder={"@admin01"}
                        defaultValue={user ? user.name : ""}
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
                        defaultValue={user ? user.email : ""}
                        type="email"
                        onChange={(e) => setUrlCategoy(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={2}>UrlParent</Label>
                    <Col sm={10}>
                      <Input
                        name="password"
                        placeholder={"@123456"}
                        type="text"
                        defaultValue={user ? user.password : ""}
                        onChange={(e) => setUrlParentCategory(e.target.value)}
                      />
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
