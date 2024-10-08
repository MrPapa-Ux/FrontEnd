export { makeAjaxRequest };
//4.
const makeAjaxRequest = (url, method = "GET") => {
  console.log(url, method);
};

makeAjaxRequest("www.google.com");
