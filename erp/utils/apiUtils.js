import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const api = axios.create({
  baseURL: BASE_URL,
});

export const loginAPI = async (params) => {
  // console.log(params)
  const response = await api.post("/auth/signin", params);
  return response;
};
export const signupAPI = async (params) => {
  // console.log(params)
  const response = await api.post("/auth/signup", params);
  return response;
};

export const dashboardAPI = async (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const response = await api.get("/firmDefinition/chartDefinition");
  return response;
};
export const expenseAPI = async (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const response = await api.get("/expense/manage");
  return response;
};
export const productAPI = async (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const response = await api.get("/product/manage");
  return response;
};

export const addItemAPI = async (values, token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // console.log(params)
  const response = await api.post("/inventory/manage", values);
  return response;
};
export const itemAPI = async (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const response = await api.get("/inventory/manage");
  return response;
};

/////standards
export const standardAPI = async (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const response = await api.get("/standard/manage");
  return response;
};
export const producedItemAPI = async (values, token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const response = await api.post("/product/manage", values);
  return response;
};


/////stocks
export const stockAPI = async (token) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  
    const response = await api.get("/product/manage");
    return response;
  };
  export const soldStockAPI = async (values, token) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  
    const response = await api.post("/product/manage", values);
    return response;
  };
  