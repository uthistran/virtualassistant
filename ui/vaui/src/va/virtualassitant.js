import React from 'react'
import HeaderComponent from '../header/header'
import './virtualassistant.css'
import MinWindow from '../minwindow/minwindow'
import InputComponent from '../input/input';
import ActionCall from '../actioncall/actioncall';

class VirtualAssistantComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canMinimize: false
        }
        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.handleMinimizeClick = this.handleMinimizeClick.bind(this);
        this.handleMinWindowClick = this.handleMinWindowClick.bind(this);
    }

    qaarray = [];

    componentDidMount(){
        ActionCall.post("http://10.10.223.130:8888/initialize", JSON.stringify({question : 'initialize'}), this.handleActionResponse.bind(this));
    }

    handleActionResponse(response){
        this.qaarray.push(response);
    }

    handleCloseClick() {
        this.setState({
            canMinimize: true
        })
    }

    handleMinimizeClick() {
        this.setState({
            canMinimize: true
        })
    }

    handleMinWindowClick(){
        this.setState({
            canMinimize: false
        })
    }

    render() {
        let isMinimized = this.state.canMinimize;
        let displayElement;
        if (isMinimized) {
            displayElement = <MinWindow onClick = {this.handleMinWindowClick}></MinWindow>
        }
        else {
            displayElement = <div className='main'>
                <HeaderComponent onCloseClick={this.handleCloseClick} onMinimizeClick={this.handleMinimizeClick}></HeaderComponent>
                <InputComponent></InputComponent>
            </div>
        }
        return displayElement;
    }
}

export default VirtualAssistantComponent