import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'


const BottomBar = {
//   position: "fixed",
   marginTop:190,
   bottom: 0,
}

class AnswerProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score:this.props.items,
          }
    }

    render() {
        console.log(this.props)
        return (
            <div style={BottomBar}>
                <ProgressBar now={this.props.correct} label={`${this.props.correct}%`} />
            </div>
        )
    }
}

export default AnswerProgressBar
