import React from 'react'
import './header.css'
import minus from './minus.svg'
import close from './x-pack.svg'

class HeaderComponent extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='heading'>Virtual Assitant</div>
                <div className='controlMinimize'>
                    <img src={minus} alt="minimize" />
                </div>
                <div className='controlClose'>
                    <img src={close} alt="close" />
                </div>
            </div>
        )
    }
}

export default HeaderComponent