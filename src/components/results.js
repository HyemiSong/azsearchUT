import React from 'react';
import basic from '../images/basic.svg';
import Wizard from './wizard';
import Union59 from '../images/Union59.svg';
import Show from '../images/Vector.svg';
import AddBox from '../images/addBox.svg';
import FormResults from './formResults';
import Thumb from './thumb';

class Results extends React.Component {
    _updateAddImgComp(value1, value2, value3){
        this.props.updateAddImgCompMode(value1, value2, value3)
    }
    _updateRemoveImg(value1, value2){
        this.props.updateRemoveImgMode(value1, value2)
    }
    onClickAddImg(e){
        e.preventDefault();
        this.props.updateAddImgMode();
    }

    render(){
        const { addImg_Mode, init_Mode, trashImg_Mode, title, subtitle, desc, preApp, preCode } = this.props;

        let _addImg_Mode, _thumb = null;

            if(addImg_Mode === true ) {
                _addImg_Mode = <FormResults updateAddImgComp={this._updateAddImgComp.bind(this)}/>
            }else if (init_Mode === true && addImg_Mode === false){ 
                _addImg_Mode = null;
                _thumb = <Thumb updateRemoveImg={this._updateRemoveImg.bind(this)}/>
            }

            if(trashImg_Mode === true){
                _thumb = null;
            }

        return(
                <div className='stage content posAbslute'>
                    <div className='intro stage-padding posRelative'>
                        <div className='title'>{title}</div>
                            <img src ={basic} alt='basic' className='thumb alignLeft'></img>
                            <div className='txt'>{desc}</div>
                    </div>
                    <div className='toolbar borderBottom borderTop posRelative'>
                        <div className='azbtn controler centering-left posAbslute'>
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
                    {_addImg_Mode}
                    </div>
                    <div className='option stage-padding posRelative'>
                        <div className='template'>
                            <div className='subtitle'>{subtitle}</div>
                            <div className='resultFrame'>
                                <div className='thumb border centering-top posRelative'> 
                                    <div className='azbtn centering-top posRelative'>
                                        <a href="/" onClick={this.onClickAddImg.bind(this)}>
                                            <img src={AddBox} alt='btn' className='icon'></img>
                                            <span>Add image</span>
                                        </a>
                                        {_thumb}
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