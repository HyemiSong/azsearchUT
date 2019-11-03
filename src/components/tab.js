import React from 'react';

class Tab extends React.Component {
    render(){
        return(
            <div>
                <ul className='tabArea posAbsolute'>
                <li className='tab floatLeft'>
                    Individual Results
                </li>
                <li className='tab floatLeft'>
                    Sidebar
                </li>
                <li className='tab floatLeft'>
                    Suggestions
                </li>
                </ul>
            </div>
        )
    }
}
export default Tab;