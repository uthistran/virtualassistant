import React from 'react'
import './query.css'

class QueryComponent extends React.Component {
    render() {
        return (
            <div className='queryDiv'>{this.props.value}</div>
        )
    }
}

export default QueryComponent;