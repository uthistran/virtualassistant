import React from 'react'
import HeaderComponent from '../header/header'
import './virtualassistant.css'

class VirtualAssistantComponent extends React.Component{
    render(){
        return(
            <div className='main'>
                <HeaderComponent></HeaderComponent>
            </div>   
        )
    }
}

export default VirtualAssistantComponent