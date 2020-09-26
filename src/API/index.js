import Axios from "axios";

const BASE_URL = "http://localhost:5050/api/v1/";

export const login = (data) => Axios.post(`${BASE_URL}user/auth/admin`, data);

export const addItem = (data) => Axios.post(`${BASE_URL}items/add-item`, data);

export const updateItem = (data) =>
  Axios.post(`${BASE_URL}items/modify-item`, data);

export const getAllSections = () =>
  Axios.post(`${BASE_URL}sections/get-all-sections`);

export const addSection = (data) =>
  Axios.post(`${BASE_URL}sections/add-section`, data);

export const updateSection = (data) =>
  Axios.post(`${BASE_URL}sections/modify-section`, data);

export const getActiveSections = () =>
  Axios.post(`${BASE_URL}sections/get-active-sections`);

export const changeActiveSections = (data) =>
  Axios.post(`${BASE_URL}sections/modify-active-sections`, data);
