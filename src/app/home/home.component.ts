import { Component, OnInit, ViewChild} from '@angular/core';
import { ApiUser } from '../../api/api.user';
import { ComponentModel } from '../../common/components/model/component.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("model1") model1: ComponentModel;
  @ViewChild("model2") model2: ComponentModel;
  @ViewChild("model3") model3: ComponentModel;

  title: string = 'Tour of Heroes';
  isShow: boolean = false;
  heroes: any = [];

  constructor(private ApiUser: ApiUser) {}

  ngOnInit() {
    this.search();
  }

  search() {
    this.ApiUser.getTop4Lectures()
      .then((res: any) => {
        console.log('返回数据了...', res)
        this.heroes = res.bizData;
      })
      .catch((res: any) => {
        console.log('错误啦...', res)
      })
  }

  // 打开弹框1
  openFn1() {
    this.model1.openFn()
  }

  // 打开弹框2
  openFn2() {
    this.model2.openFn()
  }
  // 打开弹框3
  openFn3() {
    this.model3.openFn()
  }

  // 确定事件1
  confirmFn1(ev) {
    console.log('确定啦1....')
  }

  // 取消事件1
  cancelFn1(ev) {
    console.log('取消啦1....')
  }

  // 确定事件2
  confirmFn2(ev) {
    console.log('确定啦2....')
  }

  // 取消事件2
  cancelFn2(ev) {
    console.log('取消啦2....')
  }

  // 确定事件3
  confirmFn3(ev) {
    console.log('确定啦3....')
  }

  // 取消事件3
  cancelFn3(ev) {
    console.log('取消啦3....')
  }

}
