import React from 'react'

class InputComponent extends React.Component{
    
    render(){
        return(
            <div>
                <textarea className='textArea'>{this.props}</textarea>
                <button></button>
            </div>
        )
    }
}

export default InputComponent;