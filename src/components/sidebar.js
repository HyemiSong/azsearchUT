import React from 'react';
import basic from '../images/basic.svg';
import Wizard from './wizard';

class Sidebar extends React.Component {
    render(){
        return(
            <div className='stage content posAbslute'>
            <div className='intro stage-padding posRelative'>
            <div className='title'>{this.props.title}</div>
                    <img src ={basic} alt='basic' className='thumb alignLeft'></img>
                    <div className='txt'>{this.props.desc}</div>
            </div>
            <div className='toolbar borderBottom borderTop'></div>
            <div className='option stage-padding posRelative'>
                <div className='template'>
                    <div className='subtitle'>{this.props.title}</div>
                </div>
            </div>
            <Wizard />
         </div>
        );
    }
}
export default Sidebar;