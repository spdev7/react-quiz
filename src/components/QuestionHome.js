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
      toggle:true
    };
  }

  updateToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {
    return (
      <div>
        {this.state.data.map((ele) => ( this.state.toggle &&
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
            />
          </div>
        ))}
      </div>
    );
  }
}

export default QuestionHome;
