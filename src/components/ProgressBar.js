import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';


const ProgressBarComponent = (props) => {
    let Id = props.id * 5;
    return (
        <div>
        <ProgressBar now={Id} label={`${Id}%`} />     
        </div>
    )
}


export default ProgressBarComponent;