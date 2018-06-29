import { Component } from '@angular/core';

import { QuestionService } from "./providers/question.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lightVal: number = 0
  lightType: number = 1
  dangerLightValue: boolean = false
  question
  currentQuestion
  currentQuestionIndex: number = 0
  // answer
  isBegin: boolean = false
  blinkClicked: boolean = false
  isDisabled: boolean = true
  blinkDisable: boolean = true
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
    this.isDisabled = false
    this.blinkDisable = false
    this.currentQuestion = this.question[0]
  }

  nextQuestion() {

    this.isDisabled = true
    setTimeout(() => {
      this.isDisabled = false
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

    if (this.currentQuestion.type === 'blink') {
      if (this.blinkClicked && this.lightType === 1) {
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
