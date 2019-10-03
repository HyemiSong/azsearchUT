import React from 'react';
import Wizard from './wizard';

class Review extends React.Component {
    render() {
        return (
            <div className='stage content posAbslute'>
            <div className='intro stage-padding posRelative'>
                <div className='title'>{this.props.title}</div>
                    <div className='txt'>{this.props.desc}</div>
            </div>
            <Wizard />
         </div>
        );
    }
}
export default Review;