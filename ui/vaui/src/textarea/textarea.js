import React from 'react'

class TextAreaComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: ""
        }

        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(event) {
        this.setState(
            { textValue: event.target.value }
        )
    }

    render() {
        return (
            <textarea className={this.props.className} placeholder={this.props.placeHolder} value={this.state.textValue} onChange={this.handleValueChange}></textarea>
        )
    }
}

export default TextAreaComponent;