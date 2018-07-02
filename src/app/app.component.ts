import { Component } from '@angular/core';

import { QuestionService } from "./providers/question.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lightVal: number = 0 // 灯光状态：0：关，1：示廓灯，2：开
  lightType: number = 1 // 灯光类型：0：远光，1：近光
  dangerLightValue: boolean = false // 危险报警灯状态：true：开，false：关
  question // 经过随机排序后的问题列表
  currentQuestion // 点击开始按钮，点击下一题，点击交替远近光灯按钮后更新当前问题
  currentQuestionIndex: number = 0
  isBegin: boolean = false // 开始考试按钮状态
  blinkClicked: boolean = false
  isDisabledNext: boolean = true // 下一题按钮状态
  blinkDisable: boolean = true // 交易远近光灯按钮状态
  blinkTimes: number = 0

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    console.log('ngOnInit')
    this.question = this.questionService.getQuestionArr()
  }

  onChangeLight() {
  }

  onChangeDanger() {
  }

  onChangeType() {
  }

  onBlink() {
    this.blinkTimes++
    if (this.blinkTimes >= 2) {
      this.blinkClicked = true
      this.blinkDisable = true
      setTimeout(() => {
        this.blinkDisable = false
      }, 500)
      if (this.currentQuestion.type === 'blink' && this.lightType === 1) {
        // success
        this.currentQuestionIndex++
        this.currentQuestion = this.question[this.currentQuestionIndex]
        this.blinkClicked = false
        this.blinkTimes = 0
      } else {
        // failed
        alert('回答错误')
        location.reload()
      }
    }

  }

  beginTest() {
    this.isBegin = true
    this.isDisabledNext = false
    this.blinkDisable = false
    this.currentQuestion = this.question[0]
  }

  nextQuestion() {

    this.isDisabledNext = true
    setTimeout(() => {
      this.isDisabledNext = false
    }, 500)

    if (this.currentQuestion.type === 'open') {
      if (this.lightVal === 2 && this.lightType === 1) {
        // success
        this.currentQuestionIndex++
        this.currentQuestion = this.question[this.currentQuestionIndex]
        return
      } else {
        // failed
        alert('回答错误')
        location.reload()

      }
    }

    // 如果没点交替远近光灯按钮，而是点下一题，回答错误
    // 如果点了交替远近光灯就直接跳到下一题了，不会执行这里
    if (this.currentQuestion.type === 'blink') {
      if (this.blinkClicked && this.lightType === 1) {
        // success
        // this.currentQuestionIndex++
        // this.currentQuestion = this.question[this.currentQuestionIndex]
        // return
      } else {
        // failed
        alert('回答错误')
        location.reload()

      }
    }

    if (this.currentQuestion.type === 'far') {
      if (this.lightType === 0 && this.lightVal === 2) {
        // success
        this.currentQuestionIndex++
        this.currentQuestion = this.question[this.currentQuestionIndex]
        return
      } else {
        // failed
        alert('回答错误')
        location.reload()

      }
    }

    if (this.currentQuestion.type === 'near') {
      if (this.lightType === 1 && this.lightVal === 2) {
        // success
        this.currentQuestionIndex++
        this.currentQuestion = this.question[this.currentQuestionIndex]
        return
      } else {
        // failed
        alert('回答错误')
        location.reload()

      }
    }

    if (this.currentQuestion.type === 'stop') {
      if (this.lightVal === 1 && this.dangerLightValue && this.lightType === 1) {
        // success
        this.currentQuestionIndex++
        this.currentQuestion = this.question[this.currentQuestionIndex]
        return
      } else {
        // failed
        alert('回答错误')
        location.reload()

      }
    }

    if (this.currentQuestion.type === 'close') {
      if (this.lightVal === 0 && !this.dangerLightValue && this.lightType === 1) {
        // success
        this.currentQuestionIndex++
        this.currentQuestion = this.question[this.currentQuestionIndex]
        alert('考试合格')
        location.reload()
        return
      } else {
        // failed
        alert('回答错误')
        location.reload()

      }
    }

  }

}
