import React from 'react'
import './response.css'

class ResponseComponent extends React.Component {

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.isValidURL(this.props.value)){
            window.open(this.props.value, '_blank')
        }
        
    }

    render() {
        let value = this.props.value;
        let isURL = this.isValidURL(value);
        return (
            <div className='responseDiv'>
                <div onClick={this.handleClick} className={`responseText  ${ isURL ? 'link' : ''}`}>
                    {
                        value
                    }     
                </div>
                {
                    isURL ? (<span className="tooltiptext">{value}</span>) : null
                }
            </div>
        )
    }

    isValidURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }
}

export default ResponseComponent