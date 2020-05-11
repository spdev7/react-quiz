import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import AnswerProgressBar from "./AnswerProgressBar";

const ResultTab = (props) => {
  return (
    <div className="resulttab">
      <div>{props.answer == "danger" ? "Sorry!" : "Correct"}</div>
      <div>
        <Button
          variant={"dark"}
          onClick={() => {
            props.updateCorrectAnswers(props.answer);
            props.updateToggle();
          }}
        >
          Next Question
        </Button>
      </div>
    </div>
  );
};

export default class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorRight: "outline-dark",
      colorWrong: "outline-dark",
      clicked: false,
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
    const {
      question,
      correct_answer,
      incorrect_answers,
      toggle,
      updateToggle,
      correct,
      updateCorrectAnswers,
      step,
    } = this.props;
    return (
      <div className="questioncard">
        <div>
          <div>
            <h4>{decodeURIComponent(question)}</h4>
          </div>
        </div>
        <div className="buttoncontainer">
          <div className="buttondiv" onClick={this.handleUp}>
            <Button
              variant={this.state.colorRight}
              onClick={this.counted}
              disabled={this.state.clicked}
            >
              {decodeURIComponent(correct_answer)}
            </Button>
          </div>
          {incorrect_answers.map((e) => (
            <div className="buttondiv">
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
        {this.state.clicked && (
          <ResultTab
            answer={this.state.colorWrong}
            updateToggle={updateToggle}
            updateCorrectAnswers={updateCorrectAnswers}
          />
        )}
        <AnswerProgressBar correct={correct} step={step} answer={this.state.colorWrong}/>
      </div>
    );
  }
}
