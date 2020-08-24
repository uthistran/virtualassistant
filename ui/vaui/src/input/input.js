import React from 'react'
import TextAreaComponent from '../textarea/textarea';
import './input.css'
import sendIcon from './send.svg'

class InputComponent extends React.Component {
    constructor() {
        super()
        this.handleSendClick = this.handleSendClick.bind(this);
    }
    handleSendClick() {

    }

    render() {
        return (
            <div className='inputComp'>
                <TextAreaComponent className='textAreaComp' placeHolder="Type your Query"></TextAreaComponent>
                <div className='sendButton' onClick={this.handleSendClick}><img src={sendIcon} alt="send"></img></div>
            </div>
        )
    }
}

export default InputComponent;