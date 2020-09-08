import React from 'react'
import TextAreaComponent from '../textarea/textarea';
import './input.css'
import sendIcon from './send.svg'
import ActionCall from '../actioncall/actioncall';
import DataContext from '../context/datacontent';

class InputComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            textValue: ""
        }
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSendClick = this.handleSendClick.bind(this);
    }

    static contextType = DataContext;

    handleValueChange(event) {
        this.setState(
            { textValue: event.target.value }
        )
        event.target.style.height = 'inherit';
        event.target.style.height = `${event.target.scrollHeight}px`;
    }

    handleSendClick() {
        this.context.updateValue({ 'query': this.state.textValue });
        ActionCall.post('http://10.10.221.172:8888/query', JSON.stringify({ 'question': this.state.textValue }), this.handleResponse.bind(this))
		this.setState(
            {textValue : ""}
        )
    }

    handleResponse(response) {
        if (response.isSuccess) {
            this.context.updateValue(response.result);
        }
        else {
            console.log('Connection error')
        }
    }

    render() {
        return (
            <div className='inputComp'>
                <TextAreaComponent className='textAreaComp' placeHolder="Type your Query" textValue={this.state.textValue} handleValueChange={this.handleValueChange}></TextAreaComponent>
                <div className='sendButton' onClick={this.handleSendClick}><img src={sendIcon} alt="send"></img></div>
            </div>
        )
    }
}

export default InputComponent;