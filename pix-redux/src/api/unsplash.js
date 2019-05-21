import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 0e624933041b10109481d3f3281c3f76dce070c3abcffdaa3ddeb88198ccc859"
  }
});
