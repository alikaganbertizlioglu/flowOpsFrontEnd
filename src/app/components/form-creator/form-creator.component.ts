import { Component } from '@angular/core';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrl: './form-creator.component.scss'
})
export class FormCreatorComponent {

  public numberOfQuestions: number = 0;
  public questions: Question[] = [];

  addQuestion() {
    this.numberOfQuestions++;
    this.questions.push({ questionText: null, answers: [], answerType: null });
  }

  addAnswer(index:any) {
    this.questions[index].answers.push("eklenen yeni cevap")
  }

  removeAnswer(questionIndex:number,answerIndex:number){
    console.log(questionIndex);
    console.log(answerIndex);

    this.questions[questionIndex].answers.splice(answerIndex,1);

  }

}




interface Question {
  questionText: any;
  answers: any[];
  answerType:any;
}
