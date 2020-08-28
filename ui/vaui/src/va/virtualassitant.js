import React from 'react'
import HeaderComponent from '../header/header'
import './virtualassistant.css'
import MinWindow from '../minwindow/minwindow'
import InputComponent from '../input/input';
import ActionCall from '../actioncall/actioncall';
import QueryResponseContainer from '../queryresponsecontainer/queryresponsecontainer'
import DataContext from '../context/datacontent'

class VirtualAssistantComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canMinimize: false,
            qaarray: []
        }
        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.handleMinimizeClick = this.handleMinimizeClick.bind(this);
        this.handleMinWindowClick = this.handleMinWindowClick.bind(this);
    }

    componentDidMount() {
        ActionCall.post("http://10.10.223.101:8888/initialize", JSON.stringify({ question: 'initialize' }), this.handleActionResponse.bind(this));
    }

    handleActionResponse(response) {
        if (response.isSuccess) {
            let updatedArray = this.state.qaarray.slice();
            updatedArray.push(response.result);
            this.setState({
                qaarray: updatedArray
            })
        }
        else {
            console.log('Connection error')
        }
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

    handleMinWindowClick() {
        this.setState({
            canMinimize: false
        })
    }

    handleUpdateValue(newElement) {
        let updatedArray = this.state.qaarray.slice();
        updatedArray.push(newElement);
        this.setState({
            qaarray: updatedArray
        })
    }

    render() {
        let isMinimized = this.state.canMinimize;
        let displayElement;
        if (isMinimized) {
            displayElement = <MinWindow onClick={this.handleMinWindowClick}></MinWindow>
        }
        else {
            displayElement =
                <DataContext.Provider value={{ value: this.state.qaarray, updateValue: this.handleUpdateValue.bind(this) }}>
                    <div className='main'>
                        <HeaderComponent onCloseClick={this.handleCloseClick} onMinimizeClick={this.handleMinimizeClick}></HeaderComponent>
                        <QueryResponseContainer value={this.state.qaarray}></QueryResponseContainer>
                        <InputComponent></InputComponent>
                    </div>
                </DataContext.Provider>
        }
        return displayElement;
    }
}

export default VirtualAssistantComponent