import axios from 'axios';
import bnkBridge from '@/utils/bnkBridge'
import config from '@/config';

const bnkApi = axios.create({
    baseURL: config.API_URL,
    timeout: 4000
})
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN; .헤더에 뭐집어넣고 싶을떄

bnkApi.interceptors.request.use(config => {
    bnkBridge.requestFromWebView("START_LOADING");
    //config.csrf
    return config;
  }, error => {
    bnkBridge.requestFromWebView("END_LOADING");
    return Promise.reject(error);
  });

  bnkApi.interceptors.response.use(response => {
    bnkBridge.requestFromWebView("END_LOADING");
    return response;
  }, error => {
    bnkBridge.requestFromWebView("END_LOADING");
    return Promise.reject(error);
  });

export default bnkApi;