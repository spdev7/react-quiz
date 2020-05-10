import React, { Component } from 'react'
import QuestionHeading from './QuestionHeading';
import NewData from '../Data';

export class QuestionHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:NewData,
            number_of_correct:"",
            number_of_incorrect:"",
         }
      }
    render() {
        return (
            <div>
                {   
                    this.state.data.map((ele) => (
                        <div key={ele.question}>
                        <QuestionHeading id={ele.id} category={ele.category} difficulty={ele.difficulty} />
                            <div>{decodeURIComponent(ele.question)}</div>
                            <div>{decodeURIComponent(ele.correct_answer)}</div>
                            {ele.incorrect_answers.map((e) => <div>{decodeURIComponent(e)}</div>)}
                        </div>

                    ))
                }
            </div>
        )
    }
}

export default QuestionHome
