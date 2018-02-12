import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {animate, state, style, transition, trigger, keyframes} from '@angular/animations';

@Component({
  selector: 'component-model',
  templateUrl: './component.model.html',
  styleUrls: ['./component.model.css'],
  animations: [
    trigger('signal', [
      state('shownMask', style({opacity: 1,transform:'scale(1)'})),
      state('hiddenMask', style({opacity: 0})),

      // dir-mid中间
      state('showMid', style({transform: 'translate3d(-50%, -50%, 0)'})),
      state('hiddenMid', style({transform: 'translate3d(-50%, -65%, 0)'})),
      transition('* => showMid', animate(200, keyframes([
        style({transform: 'translate3d(-50%, -50%, 0)' })
      ]))),
      transition('showMid => hiddenMid', animate(150, keyframes([
        style({transform: 'translate3d(-50%, -65%, 0)'})
      ]))),

      // dir-top顶部位置
      state('showTop', style({top: 0})),
      state('hiddenTop', style({top: '-40%'})),
      transition('* => showTop', animate(200, keyframes([
        style({top: 0 })
      ]))),
      transition('showTop => hiddenTop', animate(150, keyframes([
        style({top: '-40%'})
      ]))),

      // dir-bot底部位置
      state('showBot', style({bottom: 0})),
      state('hiddenBot', style({bottom: '-40%'})),
      transition('* => showBot', animate(200, keyframes([
        style({bottom: 0 })
      ]))),
      transition('showBot => hiddenBot', animate(150, keyframes([
        style({bottom: '-40%'})
      ]))),

      transition('shownMask => hiddenMask', animate('.2s .25s ease-out'))

    ])
  ]
})
export class ComponentModel {
  @Input() isMask: boolean = true; // 弹框是否显示遮罩
  @Input() isHeader: boolean = true; // header是否显示
  @Input() isFooter: boolean = true; // footer是否显示
  @Input() modelTit: string = '提示'; // 弹框标题
  @Input() dir: string = 'dir-mid'; // 弹框位置, dir-mid居中 | dir-top顶部 | dir-bot底部
  @Input() size: string = 'size-sm'; // 尺寸大小, size-sm宽度60% | size-md宽度80% | size-full 宽度100%
  @Output() confirmFn = new EventEmitter(); // 确认事件
  @Output() cancelFn = new EventEmitter(); // 取消事件

  animateMask: string; // 遮罩动画
  animateModel:string; // 弹框动画

  // 显示事件
  public openFn() {
    this.animateMask = 'shownMask';
    switch (this.dir) {
      case 'dir-top':
        this.animateModel = 'showTop';
        break;
      case 'dir-bot':
        this.animateModel = 'showBot';
        break;
      default:
        this.animateModel = 'showMid';
    }
  }

  // 关闭事件
  public closeFn() {
    this.animateMask = 'hiddenMask';
    switch (this.dir) {
      case 'dir-top':
        this.animateModel = 'hiddenTop';
            break;
      case 'dir-bot':
        this.animateModel = 'hiddenBot';
            break;
      default:
        this.animateModel = 'hiddenMid';
    }
  }

  // 确定事件
  private confirm() {
    this.confirmFn.emit();
    this.closeFn()
  }

  // 取消事件
  private cancel() {
    this.cancelFn.emit();
    this.closeFn()
  }


}
