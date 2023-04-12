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



/////inventory
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
export const addStandardAPI = async (values, token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const response = await api.post("/standard/manage", values);
  return response;
};
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
export const soldStockAPI = async (value, token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const response = await api.post(`/product/manage/${value}`);
  return response;
};
export const updateStockAPI = async (value, token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const response = await api.post(`/product/manage/`);
  return response;
};


////expenses
export const addExpenseAPI = async (values, token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const response = await api.post("/expense/manage", values);
  return response;
};



////journals
export const journalEntryAPI = async (date, token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const response = await api.get(`/journalEntry/manage/${date}`);
  return response;
};
///////general ledger
export const generalLedgerAPI = async (a,b, token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const response = await api.get(`/generalLedger/manage/${a}/${b}`);
  return response;
};

///////trial balance
export const trialBalanceAPI = async (a,b, token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const response = await api.get(`/trialBalance/manage/${a}/${b}`);
  return response;
};

///////income statement
export const incomeStatementAPI = async (a,b, token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const response = await api.get(`/incomeStatement/manage/${a}/${b}`);
  return response;
};
///////balance sheet
export const balanceSheetAPI = async (a,b, token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const response = await api.get(`/balanceSheet/manage/${a}/${b}`);
  return response;
};