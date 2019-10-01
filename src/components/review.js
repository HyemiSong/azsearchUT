import React from 'react';
import Wizard from './wizard';

class review extends React.Component {
    render() {
        return (
            <div className='stage content posAbslute'>
            <div className='intro stage-padding posRelative'>
                <div className='title'>Review+Create</div>
                <p>
                    <div className='txt'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </div>
                </p>
            </div>
            <Wizard />
         </div>
        );
    }
}
export default review;