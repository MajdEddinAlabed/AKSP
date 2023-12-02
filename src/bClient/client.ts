import axios from 'axios';
import https from 'https';
import { Client, IClient } from './iBackApiClient';
import { headers } from 'next/headers';
import { Redacted } from 'next/font/google';

export function BackAPIClient(): IClient {
    let aux = axios.create({
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });

    aux.interceptors.request.use(async function (config) {
        // Do something before request is sent
        return config;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
    let host = "";
    const headersList = headers();
    
    const domain = headersList.get('host') || "";
    // console.log("domain",domain);
    const subdomain = domain.split(".")[0];
    if (subdomain !== process.env.APP_BASEURL) {
        host = subdomain + ".";
    }
    
    const baseUrl = `${process.env.API_SHCHEME}://${host}${process.env.API_BASEURL}`;
    // console.log("baseUrl: ", baseUrl);  
    let cli = new Client(baseUrl, aux)

    return cli;
}
