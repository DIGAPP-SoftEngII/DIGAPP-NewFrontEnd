import axios from "axios";

export const getEstablishments = () => {
  return axios
    .get("https://backenddig.herokuapp.com/api/businesses/")
    .then((res) => res.data);
};

export const getEstablishment = ({ id }) => {
  return axios
    .get(`https://backenddig.herokuapp.com/api/businesses/${id}`)
    .then((res) => res.data);
};

export const getReports = () => {
  return axios
    .get("https://backenddig.herokuapp.com/api/reports/")
    .then((res) => res.data);
};

export const setReport = ({ data }) => {
  return axios
    .post("https://backenddig.herokuapp.com/api/reports/", data)
    .then((res) => console.log(res));
};
