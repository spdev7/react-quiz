import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import styled from "styled-components";

const Track = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 1.5rem !important;
  background-color: white;
  border-radius: 10px;
  box-shadow: inset 0 0 5px #000;
  flex-direction: column;
`;

const Thumb = styled.div`
  position:absolute;
  z-index:${(props) => props.index};
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: ${(props) => props.color};
  border-radius: 4px;
  transition: width 0.3s ease-in-out;
`;

const AnswerProgressBar = (props) => {
  const { correct, step, answer } = props;
  const total = step - 1;
  const incorrect = total - correct;
  const ee = (correct / total) * 100;
  const atthispoint = Math.trunc(ee);
  const maxpoint = 100 - 5 * incorrect;
  const minpoint = correct * 5;
  console.log({ correct, incorrect, total });
  return (
    <div className="bottombar container">
      <div>
        <div className="resultbarlabel">
          <div className="text-left text-dark">
            Score: {total == 0 ? 0 : atthispoint}%
          </div>
          <div className="text-right text-dark">MaxScore: {maxpoint}%</div>
        </div>
        <Track>
          <Thumb index={2} color={"#A9A9A9"} percentage={atthispoint} />
          <Thumb index={1} color={"#D3D3D3"} percentage={maxpoint} />
          <Thumb index={3} color={"black"} percentage={minpoint} />
        </Track>
      </div>
    </div>
  );
};

export default AnswerProgressBar;
