import axios from "axios";
export const AUTENTICATE_API = {
     guestnews_listByUrl
 };

 function guestnews_listByUrl(url) {
  //return axios.get(Urls1 + `api/web/customernews_list/${id}`)
  return axios.get(url)
  .then((response)=>{
    return response.data;
  })
  .catch((error) => {
    // if (error === "Unauthorized") {
    //   history.push("/signin");
    //   return [];
    // }
    // if (error.response !== undefined)
    //   if (error.response.status === 401 ) {
    //     toast.error('Unauthorized User', { autoClose: 500, position: toast.POSITION.TOP_RIGHT });
    //   localStorage.clear();
    //   setTimeout(()=>{
    //     window.location.href="/#/signin"
    //   },2000)
    //   }
    console.log(error);
  });
}