
// import axios, { AxiosError } from 'axios';
// import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';
// import { AnswerCreateDto, CommentCreateDto, CommunityCreateDto, CommunityReadDto, CommunityUpdateDto, QuestionCreateDto, QuestionReadDto, SavedAnswerDto, TagCreateDto, TagReadDto, TagUpdateDto, UserCreateDto, UserReadDto, UserUpdateDto, VoteCreateDto } from '../types';
// import { NextResponse } from 'next/server';
// import { RedirectType, permanentRedirect } from 'next/navigation';


//     communitiesAll( cancelToken?: CancelToken | undefined): Promise<CommunityReadDto[]> {
//         let url_ = this.baseUrl + "/api/communities";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: AxiosRequestConfig = {
//             method: "GET",
//             url: url_,
//             headers: {
//                 "Accept": "text/plain"
//             },
//             cancelToken
//         };
//         return this.instance.request(options_).catch((_error: any) => {
//             if (isAxiosError(_error) && _error.response) {
//                 return _error.response;
//             }
//              else {
//                 console.log("re1");
//                 permanentRedirect(`http://${process.env.APP_BASEURL}`,RedirectType.replace);
//             }
//         }).then((_response: AxiosResponse) => {
//             return this.processCommunitiesAll(_response);
//         });
//     }

//     protected processCommunitiesAll(response: AxiosResponse): Promise<CommunityReadDto[]> {
//         const status = response.status;
//         let _headers: any = {};
//         if (response.headers && typeof response.headers === "object") {
//             for (let k in response.headers) {
//                 if (response.headers.hasOwnProperty(k)) {
//                     _headers[k] = response.headers[k];
//                 }
//             }
//         }
//         if (status === 200) {
//             return Promise.resolve<CommunityReadDto[]>(response.data);

//         } else if (status !== 200 && status !== 204) {
//             if(status == 400){
//                 console.log("re2");
//                 permanentRedirect(`http://${process.env.APP_BASEURL}`,RedirectType.replace);
//             }
//             const _responseText = response.data;
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//         }
//         return Promise.resolve<CommunityReadDto[]>(null as any);
//     }

//     /**
//      * @return Success
//      */
//     getAllQuestion( cancelToken?: CancelToken | undefined): Promise<QuestionReadDto[]> {
//         let url_ = this.baseUrl + "/Question/GetAllQuestion";
//         url_ = url_.replace(/[?&]$/, "");

//         let options_: AxiosRequestConfig = {
//             method: "GET",
//             url: url_,
//             headers: {
//                 "Accept": "application/json"
//             },
//             cancelToken
//         };

//         return this.instance.request(options_).catch((_error: any) => {
//             if (isAxiosError(_error) && _error.response) {
//                 return _error.response;
//             } else {
//                 console.log("re3");
//                 permanentRedirect(`http://${process.env.APP_BASEURL}`,RedirectType.replace);
//             }
//         }).then((_response: AxiosResponse) => {
//             return this.processGetAllQuestion(_response);
//         });
//     }

//     protected processGetAllQuestion(response: AxiosResponse): Promise<QuestionReadDto[]> {
//         const status = response.status;
//         let _headers: any = {};
//         if (response.headers && typeof response.headers === "object") {
//             for (let k in response.headers) {
//                 if (response.headers.hasOwnProperty(k)) {
//                     _headers[k] = response.headers[k];
//                 }
//             }
//         }
//         if (status === 200) {
//             return Promise.resolve<QuestionReadDto[]>(response.data);

//         } else if (status !== 200 && status !== 204) {
//             const _responseText = response.data;
//             if(status == 400){
//                 console.log("re4");
//                 permanentRedirect(`http://${process.env.APP_BASEURL}`,RedirectType.replace);
//             }
//             return throwException("An unexpected server error occurred.", status, _responseText, _headers);
//         }
//         return Promise.resolve<QuestionReadDto[]>(null as any);
//     }
