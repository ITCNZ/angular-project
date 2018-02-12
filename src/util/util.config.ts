import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UtilConfig {

  constructor(private http: Http) {}

  private checkCurrentEnv(localEnv, ...rt) {
      var SERVER = {
        url: {
          teacher : "/teacher/web",
          boss : "/teacher/boss",
          file : '/teacher/file'
        },
        env: ""
      };

      var root = "";

      if(typeof window != 'undefined'){
        root = window.location.origin;
      }
      else{
        root = rt[0];
      }

      var env, localEnv, port,dot;
      if (localEnv) {
        env = localEnv == "formal" ? "" : localEnv;
      }
      else {
        localEnv = "dev";
        //当前加载环境 dev：开发环境 test：测试环境 "": 生产环境或本地  pre 预发布
        env = root.indexOf("localhost") != -1 ? localEnv : root.indexOf("dev") != -1 ? "dev" : root.indexOf("test")  != -1 ? "test" : root.indexOf("pre") != -1 ? "pre" : "";
      }

      //当前4000 走预发布
      if(env == "" && window.location.port == "4000"){
        env = "pre";
      }

      SERVER.env = env;
      //端口检查
      for (var obj in SERVER.url) {
        var envTemp = env == "" ? "" : (env + ".");
        var port: any = envTemp != '' ? '' : ":9000";
        //服务地址
        SERVER.url[obj] = "http://" +envTemp+ "imzhiliao.com"+port+ SERVER.url[obj];
      }

    console.log('当前服务器地址....', SERVER);
    //服务器地址
    return SERVER;

  }

  // 返回接口环境
  public SERVER() {

    return this.checkCurrentEnv("");
  }

}
