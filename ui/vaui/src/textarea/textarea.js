import React from 'react'

class TextAreaComponent extends React.Component {
    
    render() {
        return (
            <textarea className={this.props.className} placeholder={this.props.placeHolder} value={this.props.textValue} onChange={this.props.handleValueChange}></textarea>
        )
    }
}

export default TextAreaComponent;