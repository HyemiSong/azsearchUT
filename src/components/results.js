import React from 'react';
import basic from '../images/basic.svg';
import Wizard from './wizard';
import Union59 from '../images/Union59.svg';
import Show from '../images/Vector.svg';
import AddBox from '../images/addBox.svg';
import FormResults from './formResults'

class Results extends React.Component {
    updateAddComp(value){
        this.props.updateAddCompMode(value)
    }
    render(){
        return(
                <div className='stage content posAbslute'>
                    <div className='intro stage-padding posRelative'>
                        <div className='title'>{this.props.title}</div>
                            <img src ={basic} alt='basic' className='thumb alignLeft'></img>
                            <div className='txt'>{this.props.desc}</div>
                    </div>
                    <div className='toolbar borderBottom borderTop posRelative'>
                        <div className='azbtn controler centering-left posAbslute'>
                            <a href={this.props.preApp} onClick={function(e){e.preventDefault();}}>
                                <img src ={Union59} alt='btn' className='icon'></img>
                                <span>Preview App</span>
                            </a>
                            <a href={this.props.preCode} onClick={function(e){e.preventDefault();}}>
                                <img src ={Show} alt='btn' className='icon'></img>
                                <span>View Code</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <FormResults updateAddComp={this.updateAddComp.bind(this)}/>
                    </div>
                    <div className='option stage-padding posRelative'>
                        <div className='template'>
                            <div className='subtitle'>{this.props.subtitle}</div>
                            <div className='resultFrame'>
                                <div className='thumb border centering-top posRelative'> 
                                    <div className='azbtn centering-top posRelative'>
                                        <a href="/" onClick={function(e){
                                              console.log(this.props.addimg_Mode); 
                                              e.preventDefault();
                                              this.props.onChangePage();
                                            }.bind(this)}>
                                            <img src={AddBox} alt='btn' className='icon'></img>
                                            <span>Add image</span>
                                        </a>
                                    </div>
                                </div>
                                <div className='azbtn'></div>
                            </div>
                        </div>
                    </div>
                    <Wizard />
                 </div>
        );
    }
}
export default Results