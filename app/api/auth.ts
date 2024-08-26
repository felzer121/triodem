import { NextRequest } from "next/server";
import { useHttp } from "./useHttp";

const { request } = useHttp();
const _apiBaseDev = process.env.NEXT_PUBLIC_BACKEND_HOST
  ? process.env.NEXT_PUBLIC_BACKEND_HOST
  : "";

export const authorization = async (user: {
  login: string;
  password: string;
}) => {
  let props = {
    url: `${_apiBaseDev}/api/authorization`,
    method: "POST",
    data: { login: user.login, password: user.password },
  };

  const response = await request(props);

  return response;
};

export const getUser = async (request: NextRequest) => {
  const response = await fetch(`${_apiBaseDev}/api/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${request.cookies.get("accesToken")?.value}`,
      Cookie: `refreshToken=${
        request.cookies.get("refreshToken")?.value
      };accesToken=${request.cookies.get("accesToken")?.value}`,
    },
  });
  const user = await response.json();
  return user
};
