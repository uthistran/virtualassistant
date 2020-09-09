import React from 'react'
import ResponseComponent from '../response/response';
import QueryComponent from '../query/query';
import './querycontainer.css'

//TO hold the query response based on the data
class QueryResponseContainer extends React.Component {
    render() {
        var elements = [];
        var values = this.props.value;
        for (var i = 0; i < values.length; i++) {
            if ((Object.keys(values[i]))[0] === 'answer') {
                var answer = values[i]['answer'];
                elements.push(<ResponseComponent value={answer} key={i}></ResponseComponent>)
            } else {
                elements.push(<QueryComponent value={values[i]['query']} key={i}></QueryComponent>)
            }
        }

        return (
            <div className='queryContainer' >
                {
                    elements
                }
            </div>
        )
    }
}

export default QueryResponseContainer