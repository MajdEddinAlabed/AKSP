import "server-only";
import axios from "axios";
import https from "https";
import { Client, IClient } from "./iBackApiClient";
import { headers } from "next/headers";
import apidomainlist from "../lib/apidomainlist.json";

export async function BackAPIClient(): Promise<IClient> {
  let aux = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

  aux.interceptors.request.use(
    async function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  let host = "";
  const headersList = headers();

  const domain = headersList.get("host") || "";
  // console.log("domain",domain);
  const subdomain = domain.split(".")[0];
  if (subdomain !== process.env.APP_BASEURL) {
    host = subdomain + ".";
  }
  let baseUrl: string = `${process.env.API_SCHEME}://${host}${process.env.API_BASEURL}`;
  if (process.env.NODE_ENV === "development") {
    if (!apidomainlist.some((d) => d.host === host)) {
      baseUrl = `${process.env.API_SCHEME}://${host}${process.env.API_BASEURL}`;
    } else {
      const apidomain = apidomainlist.find((q) => q.host == host).apidomain;
      baseUrl = apidomain;
    }
  }

  // console.log("baseUrl: ", baseUrl);
  let cli = new Client(baseUrl, aux);

  return cli;
}
