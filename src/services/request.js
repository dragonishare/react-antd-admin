import { Modal } from 'antd';
import Axios from 'axios';

export default class Request {
  static ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById('ajaxLoading');
      loading.style.display = 'block';
    }

    let baseUrl = 'https://easy-mock.com/mock/5b7d515b282c63501da766b0/api';
    return new Promise((resolve, reject) => {
      Axios({
        url: options.url,
        baseURL: baseUrl,
        method: options.method || 'get',
        timeout: 3000,
        params: options.data || ''
      }).then(response => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.getElementById('ajaxLoading');
          loading.style.display = 'none';
        }

        if (response.status === 200) {
          let res = response.data;
          if (res.code === 0) {
            resolve(res);
          } else {
            Modal.info({
              title: '错误提示',
              content: res.msg
            });
          }
        } else {
          reject(response.data);
        }
      });
    });
  }
}
