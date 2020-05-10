import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import AnswerProgressBar from "./AnswerProgressBar";
const can = {
  display:"flex",
  flexDirection:"column"
}

const CorrectAndNextQuestion = (props) => {
  return (
  <div style={can}>
    <div>{props.answer == "danger" ? "Sorry!" : "Correct"}</div>
    <div>
    <Button variant={"dark"}>Next Question</Button>
    </div>
  </div>
  )
}

export default class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorRight: "outline-dark",
      colorWrong: "outline-dark",
      clicked: false,
      correct: 0,
    };
  }

  handleUp = (event) => {
    if (this.state.clicked === false) {
      this.setState({
        colorRight: "success",
        clicked: true,
      });
    }
  };

  counted = (prevState) => {
      console.log("ds")
      this.setState(prevState => ({
          correct:prevState.correct + 1
      }));
  }
  handleDown = (event) => {
    if (this.state.clicked === false) {
      this.setState({
        colorWrong: "danger",
        colorRight: "success",
        clicked: true,
      });
    }
  };
  render(props) {
    const { question, correct_answer, incorrect_answers,toggle,updateToggle } = this.props;
    return (
      <div className="questioncard">
        <div>
          <div>
            <h4>{decodeURIComponent(question)}</h4>
          </div>
        </div>
        <div>
          <div onClick={this.handleUp}>
            <Button
              variant={this.state.colorRight}
              onClick={this.counted}
              disabled={this.state.clicked}
            >
              {decodeURIComponent(correct_answer)}
            </Button>
          </div>
          {incorrect_answers.map((e) => (
            <div>
              <Button
                variant={this.state.colorWrong}
                onClick={this.handleDown}
                disabled={this.state.clicked}
              >
                {decodeURIComponent(e)}
              </Button>
            </div>
          ))}
        </div>
        {this.state.clicked && <CorrectAndNextQuestion answer={this.state.colorWrong}/>}
        <AnswerProgressBar correct={this.state.correct} />
        {/* {updateToggle()} */}
      </div>
    );
  }
}
