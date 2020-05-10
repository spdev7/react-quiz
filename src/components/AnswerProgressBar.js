import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'


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
            <div className="bottombar">
                <ProgressBar now={this.props.correct} />
            </div>
        )
    }
}

export default AnswerProgressBar
