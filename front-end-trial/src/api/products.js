import axios from 'axios';
import Q from 'q';

const apiUrl = 'https://private-anon-5f0b2219fe-weeblyfrontendtrialapi.apiary-mock.com/products';
const updateUrl = 'https://private-anon-5f0b2219fe-weeblyfrontendtrialapi.apiary-mock.com/product/';
export default {
  fetchAllProducts() {
    return axios.get(apiUrl);
  },
  addProduct(payload) {
    const deferred = Q.defer();
    axios.post(apiUrl, payload)
      .then((res) => {
        deferred.resolve(res);
      });
    return deferred.promise;
  },
  updateProduct(payload) {
    const deferred = Q.defer();
    axios.put(updateUrl + payload.id, payload)
      .then((res) => {
        deferred.resolve(res);
      });
    return deferred.promise;
  },
};
