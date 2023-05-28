import * as request from "../ultis/request";
import axios from "axios";
import notify from "../ultis/notify";

// Common categories
export const getCategories = async () => {
  try {
    const res = await request.get("/no-auth/search-category");
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

// Home page
export const getDataHome = async () => {
  try {
    const hotNewsHour = await request.get("/no-auth/favorite-new");
    const newContent = await request.get("/no-auth/least-new");
    return { data: { newContent:newContent?.data, hotNewsHour: hotNewsHour?.data} };
  } catch (error) {
    notify("error", error?.message);
  }
};

export const getNewsInfinitive = async (page) => {
  try {
    const res = await request.get(`/no-auth/paginate-home?page=${page}&pageSize=5`);
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

// News Detail
export const getNewsDetail = async (id) => {
  try {
    const res = await request.get(`/no-auth/set-view/${id}`);
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
      `/no-auth/filter-new/${idCategory}?page=${page || 0}&filter=${
        filter || ""
      }&title=${caption || ""}&author=${author || ""}`
    );
    return res?.data;
  } catch (error) {
    notify("error", error?.message);
  }
};

//---------------------------------------------------Admin-------------------------------------------------------
//create category

export const login = async (email, password) => {
  try {
    const res = await request.post(`/no-auth/login`, { username:email, password });
    return res;
  } catch (error) {
    // notify("error", error?.message[0]);
  }
};

export const register = async (payload) => {
  try {
    const res = await request.post(`both/create-user`, payload);
    return res;
  } catch (error) {
    notify("error", error);
  }
};

export const createNewCategory = async (newCategory) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    await request.post(`/admin/create-category`, newCategory, { headers });
  } catch (error) {
    notify("error", error?.message);
  }
};

export const deleteCategory = async (id) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    await request.post(`/admin/delete-category/${id}`, {},{ headers });
  } catch (error) {
    notify("error", error?.message);
  }
};

export const updateCategory = async ({id,newCategory}) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    await request.post(`/admin/update-category/${id}`, newCategory, { headers });
  } catch (error) {
    console.log(error)
    notify("error", error?.userMessage);
  }
};

export const getCategoryInAdmin = async (page, pageSize) => {
  const token = localStorage.getItem("accessToken");
  const headers = {
    Authorization: "Bearer " + token,
  };
  try {
    const res = await request.get(
      `/admin/search-category?page=${page || 0}&pageSize=${pageSize || ""}`,{headers}
    );
    return res?.data;
  } catch (error) {
    notify("error", error?.message);
  }
};

//news
export const createNews = async (news) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    await request.post(`api/news/create`, news, { headers });
  } catch (error) {
    notify("error", error?.message);
  }
};

export const updateNews = async (news) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    await request.post(`api/news/update`, news, { headers });
  } catch (error) {
    notify("error", error?.message);
  }
};

export const deleteNews = async (id) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    await request.post(`api/news/delete`, { id }, { headers });
  } catch (error) {
    notify("error", error?.message);
  }
};

export const getAllNews = async (page, pageSize) => {
  try {
    const res = await request.get(
      `/admin/search-all_news?page=${page || ""}&pageSize=${pageSize || ""}`
    );
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

export const amount = async () => {
  const token = localStorage.getItem("accessToken");
  const headers = {
    Authorization: "Bearer " + token,
  };
  const res = await request.get("/admin/count-record_news", { headers });
  return res;
};

// user
export const getUser = async ({page,pageSize}) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    const res = await request.get(`/admin/search-all?page=${page||0}&size=${pageSize||10}`, { headers });
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

export const createUser = async (payload) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    const res = await request.post(`api/user/register`, payload, { headers });
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

export const deleteUser = async (payload) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    const res = await request.post(`api/user/delete`, payload, { headers });
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

export const updateUser = async (payload) => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    const res = await request.post(`api/user/update`, payload, { headers });
    return res;
  } catch (error) {
    notify("error", error?.message);
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    const headers = {
      Authorization: "Bearer " + token,
    };
    localStorage.clear();
    const res = await request.post(`/both/logout`, { headers });
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
    name: "Sport",
    description: " abckdfhs fsfha",
    createAt: "02/01/2023",
    createBy: "superadmin",
    updateAt: "02/01/2023",
    updateBy: "superadmin",
    url: "adndsaj",
    status: true,
    idParent: null,
  },
  {
    id: "2",
    name: "World",
    description: " abckdfhs fsfha",
    createAt: "02/01/2023",
    createBy: "superadmin",
    updateAt: "02/01/2023",
    updateBy: "superadmin",
    url: "adndsaj",
    status: true,
    idParent: null,
  },
  {
    id: "3",
    name: "Baby",
    description: " abckdfhs fsfha",
    createAt: "02/01/2023",
    createBy: "superadmin",
    updateAt: "02/01/2023",
    updateBy: "superadmin",
    url: "adndsaj",
    status: true,
    idParent: 1,
  },
  {
    id: "4",
    name: "Ca",
    description: " abckdfhs fsfha",
    createAt: "02/01/2023",
    createBy: "superadmin",
    updateAt: "02/01/2023",
    updateBy: "superadmin",
    url: "adndsaj",
    status: true,
    idParent: null,
  },
  {
    id: "5",
    name: "Com",
    description: " abckdfhs fsfha",
    createAt: "02/01/2023",
    createBy: "superadmin",
    updateAt: "02/01/2023",
    updateBy: "superadmin",
    url: "adndsaj",
    status: true,
    idParent: null,
  },
  {
    id: "6",
    name: "Hoa",
    description: " abckdfhs fsfha",
    createAt: "02/01/2023",
    createBy: "superadmin",
    updateAt: "02/01/2023",
    updateBy: "superadmin",
    url: "adndsaj",
    status: true,
    idParent: null,
  },
  {
    id: "7",
    name: "Quat",
    description: " abckdfhs fsfha",
    createAt: "02/01/2023",
    createBy: "superadmin",
    updateAt: "02/01/2023",
    updateBy: "superadmin",
    url: "adndsaj",
    status: true,
    idParent: 3,
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
