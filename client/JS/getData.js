/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const getDataApi = (url, methodType, handledom) => {
  showLoading();
  fetch(url, { method: methodType }).then((data) => data.json()).then((json) => {
    hideLoading();
    handledom(json);
  }).catch();
};
