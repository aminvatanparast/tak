import axios from 'axios';
import {CONST} from "../const/const";

const baseURL = CONST.baseURL

class Api {


    _headers() {
      return {
          "Accept": 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
        }
    }



    get(url , params) {
        return axios.get( baseURL +`${url}`  , {
            headers: this._headers(),
            params: params,
        }).then( (response) => {
            return response.data;
        })
    }

    post(url, object= {}) {
        console.log(object)
        return axios.post( baseURL + `${url}`,  object, {
            headers: this._headers(),
        }).then( (response) => {
            return response.data;
        })
    }


}

export default Api;
