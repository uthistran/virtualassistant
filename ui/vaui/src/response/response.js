import React from 'react'
import './response.css'

class ResponseComponent extends React.Component {
    render() {
        return (
            <div className='responseDiv'>
                <div className='responseText'>
                    {this.props.value}
                </div>
            </div>
        )
    }
}

export default ResponseComponent