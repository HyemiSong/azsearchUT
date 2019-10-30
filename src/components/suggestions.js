import React from 'react';
import Wizard from './wizard';
import Bottomcontrol from './buttomControl';

import ThumbImg from '../images/results.svg';
import Union59 from '../images/Union59_B.svg';
import Show from '../images/Eye_B.svg';
import Info from '../images/Info.svg';

class Suggestions extends React.Component {
    render(){
        const { title, subtitle, desc, preApp, preCode} = this.props;

        return(
        <div>    
            <div className='stage content posAbslute'>
                <div className='intro padding marginTop-sm marginBottom-md posRelative'>
                    <div className='title ft-md ft-semibold marginBottom-md'>{title}</div>
                        <div className='thumb leftZero marginRight-lg floatLeft'><img src ={ThumbImg} alt='basic'></img></div>
                        <div className='txt ft-xsm'>{desc}</div>
                </div>
                <div className='toolbar padding-left borderBottom borderTop posRelative'>
                    <div className='azbtn ft-sm controler centering-left posAbslute'>
                        <a href={preApp} onClick={function(e){e.preventDefault();}}>
                            <img src ={Union59} alt='btn' className='icon'></img>
                            <span>Preview App</span>
                        </a>
                        <a href={preCode} onClick={function(e){e.preventDefault();}}>
                            <img src ={Show} alt='btn' className='icon'></img>
                            <span>View Code</span>
                        </a>
                    </div>
                </div>
                <div>
                    {/* {_addImg_Mode} */}
                </div>
                <div className='option padding posRelative'>
                    <div className='template'>
                        <div className='ft-sm ft-semibold marginBottom-md marginTop-sm'>
                            {subtitle}
                            <img src={Info} alt='btn' className='marginLeft-sm'></img>
                        </div>
                        <div className='table ft-xsm'>
                            <div className='col floatLeft'>
                                <div className='ft-xxsm ft-semibold uppercase'>text variables</div>
                                <p></p>
                                searchText
                                <p></p>
                                displayText
                            </div>
                            <div className='col floatLeft'>
                                <div className='ft-xxsm ft-semibold uppercase'>Text size(px)</div>
                                <p>
                                <select name='title'>
                                    <option value='searchText'>10</option>
                                    <option value='searchText'>12</option>
                                </select>
                                </p>
                                <p>
                                <select name='title'>
                                    <option value='displayText'>10</option>
                                    <option value='displayText'>12</option>
                                </select>
                                </p>
                            </div>
                            <div className='col floatLeft'>
                                <div className='ft-xxsm ft-semibold uppercase'>Text weight</div>
                                <p>
                                <select name='title'>
                                    <option value='searchText'>Regular</option>
                                    <option value='searchText'>Bold</option>
                                </select>
                                </p>
                                <p>
                                <select name='title'>
                                    <option value='displayText'>Bold</option>
                                    <option value='displayText'>Regular</option>
                                </select>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Wizard />
            </div>
            <Bottomcontrol reviewPage={(value) => this.props.jumpToStep(value)}/>
        </div>
        );
    }
}
export default Suggestions;