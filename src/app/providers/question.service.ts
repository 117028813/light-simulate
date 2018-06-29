import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  question = [
    {
      type: 'open',
      name: '请开启前照灯'
    },
    {
      type: 'blink',
      name: '夜间通过急弯、坡路'
    },
    {
      type: 'blink',
      name: '夜间通过坡路、拱桥'
    },
    {
      type: 'blink',
      name: '夜间通过急弯、拱桥'
    },
    {
      type: 'blink',
      name: '夜间通过拱桥、人行横道'
    },
    {
      type: 'blink',
      name: '前方通过没有交通信号灯控制的路口'
    },
    {
      type: 'blink',
      name: '夜间超越前方车辆'
    },
    {
      type: 'near',
      name: '夜间同方向近距离跟车行驶'
    },
    {
      type: 'near',
      name: '夜间与机动车会车'
    },
    {
      type: 'near',
      name: '夜间直行通过路口'
    },
    {
      type: 'near',
      name: '夜间在有路灯的道路上行驶'
    },
    {
      type: 'near',
      name: '夜间在照明良好的道路上行驶'
    },
    {
      type: 'near',
      name: '请打开近光灯'
    },
    {
      type: 'far',
      name: '夜间在没有路灯照明不良条件下行驶'
    },
    {
      type: 'far',
      name: '请打开远光灯'
    },
    {
      type: 'stop',
      name: '路边临时停车'
    },
    {
      type: 'close',
      name: '模拟夜间考试完成，请关闭所有灯光'
    }
  ]

  constructor() { }

  private getRandomItems(arr) {
    return arr.filter(item => item.type === 'blink' || item.type === 'near' || item.type === 'far')
  }

  private shuffle(arr2) {
    const arr = [...arr2]
    let i = arr.length;
    while (i) {
      let j = Math.floor(Math.random() * i--);
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr
  }

  getQuestionArr() {
    const arr = this.shuffle(this.getRandomItems(this.question))
    arr.unshift(this.question[0])
    arr.push(this.question[this.question.length - 2])
    arr.push(this.question[this.question.length - 1])
    return arr
  }

}
