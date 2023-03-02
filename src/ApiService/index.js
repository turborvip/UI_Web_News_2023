import * as request from "../ultis/request";
import axios from "axios";
import notify from "../ultis/notify";

// Common categories
export const getCategories = async () => {
  try {
    const res = await request.get("/api/categories/findAll");
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

// Home page
export const getDataHome = async () => {
  try {
    const res = await request.get("api/news/inHome");
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

export const getNewsInfinitive = async (page) => {
  try {
    const res = await request.get(`api/news?page=${page}`);
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

// News Detail

export const getNewsDetail = async (id) => {
  try {
    const res = await request.post(`api/news/detail`, { id });
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};
//admin
//create category
export const createNewCategory = async (newCategory) => {
  try {
    await request.post(`api/categories/create`, newCategory);
  } catch (error) {
    notify("error", error?.message);
  }
};
export const deleteCategory = async (id) => {
  try {
    await request.post(`api/categories/delete`, id);
  } catch (error) {
    notify("error", error?.message);
  }
};

export const updateCategory = async (category) => {
  try {
    await request.post(`api/categories/update`, category);
  } catch (error) {
    notify("error", error?.message);
  }
};

export const getCategoryInAdmin = async (page, pageSize) => {
  try {
    const res = await request.get(
      `/api/categories?page=${page || ""}&pageSize=${pageSize || ""}`
    );
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

//news
export const createNews = async (news) => {
  try {
    await request.post(`api/news/create`, news);
  } catch (error) {
    notify("error", error?.message);
  }
};

export const updateNews = async (news) => {
  try {
    await request.post(`api/news/update`, news);
  } catch (error) {
    notify("error", error?.message);
  }
};
export const deleteNews = async (id) => {
  try {
    await request.post(`api/news/delete`, { id });
  } catch (error) {
    notify("error", error?.message);
  }
};
export const getAllNews = async (page, pageSize) => {
  try {
    const res = await request.get(
      `api/news?page=${page || ""}&pageSize=${pageSize || ""}`
    );
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

// List new flow categories
export const getNewsFlowCategoriesId = async (
  idCategory,
  page,
  filter,
  caption,
  author
) => {
  try {
    const res = await request.get(
      `api/news/findNewsByCategory/${idCategory}?page=${page || 1}&filter=${
        filter || ""
      }&caption=${caption || ""}&author=${author || ""}`
    );
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

export const dataAccount = [
  {
    id: "1",
    name: "admin01",
    password: "123456",
    email: "admin@gmail.com",
    role: "superadmin",
    createAt: "02/01/2023",
    createBy: "superadmin",
    updateAt: "02/01/2023",
    updateBy: "superadmin",
    status: true,
  },
];

export const dataCategory = [
  {
    id: "1",
    name: "sport",
    description: " abckdfhs fsfha",
    createAt: "02/01/2023",
    createBy: "superadmin",
    updateAt: "02/01/2023",
    updateBy: "superadmin",
    url: "adndsaj",
    status: true,
    idParent: null,
  },
];

export const dataNews = [
  {
    id: 24,
    caption: "ahhsssi",
    image: "a",
    description: null,
    content: "aaa",
    author: null,
    viewHour: 0,
    viewDaily: 0,
    status: 1,
    createBy: null,
    updateBy: null,
    created_at: "2023-02-28T14:22:10.000000Z",
    updated_at: "2023-02-28T14:22:10.000000Z",
  },
];
