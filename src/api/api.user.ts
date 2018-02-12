import { Injectable } from '@angular/core';
import { UtilNet } from '../util/util.net';
import { UtilConfig } from '../util/util.config';

@Injectable()
export class ApiUser {
  public SERVER =  this.utilConfig.SERVER();
  constructor(
    private postHttp: UtilNet,
    private utilConfig: UtilConfig
  ) { }

  /**
   * 首页明星老师列表
   */
  public getTop4Lectures() {
    return this.postHttp.postRes(this.SERVER.url.teacher + "/lecture/getTop4Lectures", {}, {});
  }


}
