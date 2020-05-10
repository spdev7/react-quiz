import React, { Component } from "react";
import ProgressBarComponent from "./ProgressBar";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const divStyle = {
   display:"flex",
   flexDirection:"row"
  };

const StarGenerator = (ele) => {
  var a = 0;
  var box = [];
  if (ele.ele == "easy") a = 1;
  if (ele.ele == "medium") a = 2;
  if (ele.ele == "hard") a = 3;
  console.log({ ele, a });
  for (let i = 0; i < a; i++) {
    box.push(<div><AiFillStar/></div>);
  }
  for (let i = 0; i < 5 - a; i++) {
    box.push(<div><AiOutlineStar/></div>);
  }
  return (
    <div style={divStyle}>
      {box.map((ele) => {
        return ele;
      })}
    </div>
  );
};

const QuestionHeading = (props) => {
  return (
    <div>
      <ProgressBarComponent id={props.id} />
      <div>
        <div><h1>Question {props.id} of 20</h1> </div>
        <StarGenerator ele={props.difficulty} />
        <div>{decodeURIComponent(props.category)}</div>
      </div>
    </div>
  );
};

export default QuestionHeading;
