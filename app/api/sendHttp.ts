import React from "react";
import { Request } from "./models/request";
import toast from "react-hot-toast";

const sendHttp = () => {
  const request = async <Data>({ url, method, data }: Request<Data>) => {
    try {
      const options: any = {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Credentials": 'true'
        },
        method: method,
        credentials: 'include'
      };
      if (data) options.body = JSON.stringify(data);

      const response = await fetch(url, options);
      const result = await response.json();

      if (response.ok) {
        document.cookie = encodeURIComponent('accesToken') + '=' + encodeURIComponent(result.data.accessToken);
        // localStorage.setItem("token", result.data.accessToken);
        return result;
      }
      throw new Error(`${result.response.message}`);
    } catch (e) {
      toast.error((<Error>e).message);
    }
  };

  return { request };
};

export { sendHttp };
