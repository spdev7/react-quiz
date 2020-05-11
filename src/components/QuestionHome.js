import React, { Component } from "react";
import QuestionHeading from "./QuestionHeading";
import NewData from "../Data";
import QuestionCard from "./QuestionCard";

export class QuestionHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: NewData,
      number_of_correct: "",
      number_of_incorrect: "",
      toggle: true,
      step: 1,
      correct: 0,
    };
  }

  updateToggle = () => {
    this.setState({
      step: this.state.step + 1,
    });
  };

  updateCorrectAnswers = (e) => {
    e === "danger"
      ? this.setState({
          correct: this.state.correct,
        })
      : this.setState({
          correct: this.state.correct + 1,
        });
  };

  render() {
    const { step } = this.state;
    return (
      <div>
        {this.state.data.map((ele) => {
          if (this.state.toggle && step == ele.id)
            return (
              <div key={ele.question}>
                <QuestionHeading
                  id={ele.id}
                  category={ele.category}
                  difficulty={ele.difficulty}
                />
                <QuestionCard
                  question={ele.question}
                  correct_answer={ele.correct_answer}
                  incorrect_answers={ele.incorrect_answers}
                  toggle={this.state.toggle}
                  updateToggle={this.updateToggle}
                  correct={this.state.correct}
                  updateCorrectAnswers={this.updateCorrectAnswers}
                  step={this.state.step}
                />
              </div>
            );
        })}
      </div>
    );
  }
}

export default QuestionHome;
