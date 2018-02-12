import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UtilNet {

  constructor(private http: Http) {}

  // POST请求
  public postRes(url: string, params: any, data: any) {
    //url鉴权
    var token = '23e9c202-8fe7-4313-bea7-7ac4afae3977';
    if(token){
      params = params || {};
      params.token = token;
    }

    var i = 0, isHasPraram;

    //检测url
    if (url.indexOf("?") != -1) {
      isHasPraram = true;
    }

    for (var o in params) {
      if (params[o] == undefined || params[o] == null) {
        continue;
      }
      if (i == 0 && !isHasPraram) {
        url += "?" + o + "=" + params[o];
      }
      else {
        url += "&" + o + "=" + params[o];
      }
      i++;
    }
    var postBody = {
      "style": "",
      "clientInfo": {
        "clientType": "web"
      },
      "data": data
    };

    var _this = this;
    return new Promise(function(resolve, reject) {
      _this.http
        .post(url, postBody, null)
        .toPromise()
        .then((res: any) => {
          resolve(res.json());
        })
        .catch((err: any) => {
          reject(err.json());
        });
    })
  }
}
