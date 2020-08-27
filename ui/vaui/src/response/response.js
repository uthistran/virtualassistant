import React from 'react'
import avatar from './avatar.svg'
import './response.css'

class ResponseComponent extends React.Component {
    render() {
        return (
            <div className='responseDiv'>
                <div className='avatarDiv'>
                    <img src={avatar} alt='avatar'></img>
                </div>
                <div className='responseText'>
                    {this.props.value}
                </div>
            </div>
        )
    }
}

export default ResponseComponent