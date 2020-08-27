import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xjkuIb9vez-8OWL4FiuhV8-w4BgN4yUv30LsJnEfCDg"
    // this is in the Unsplash documentation ^^ public authorization doc, and also the key from "your apps" in Unsplash
  }
});
