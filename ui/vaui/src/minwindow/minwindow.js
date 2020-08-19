import React from 'react'
import './minwindow.css'
import chat from './chat.svg'

class MinWindow extends React.Component {
    render(){
        return(
            <div className='minWindow' onClick={this.props.onClick}>
                <img src={chat} alt='chat'></img>
            </div>
        )
    }
}

export default MinWindow;