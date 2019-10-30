import React from 'react';
import Wizard from './wizard';

import InputFormImg from './inputFormImg';
import InputFormTitle from './inputFormTitle';
import InputFormDesc from './inputFormDesc';
import ResultsImg from './resultsImg';
import ResultsTitle from './resultsTitle';
import ResultsDesc from './resultsDesc';
import Bottomcontrol from './buttomControl';

import ThumbImg from '../images/results.svg';
import Union59 from '../images/Union59_B.svg';
import Show from '../images/Eye_B.svg';
import AddBox from '../images/addBox_B.svg';
import Info from '../images/Info.svg';

import '../inputFormImg.css';


class Results extends React.Component {

    _updateAddImgComp(value1, value2, value3, value4, value5, value6){
        this.props.updateAddImgCompMode(value1, value2, value3, value4, value5, value6);
    }
    _updateAddTitleComp(value1, value2, value3, value4, value5, value6, value7){
        this.props.updateAddTitleCompMode(value1, value2, value3, value4, value5, value6, value7);
    }
    _updateAddDescComp(value1, value2, value3, value4, value5, value6, value7){
        this.props.updateAddDescCompMode(value1, value2, value3, value4, value5, value6, value7);
    }
    _updateRemoveImg(value1, value2){
        this.props.updateRemoveImgMode(value1, value2);
    }
    _updateRemoveDesc(value1, value2){
        this.props.updateRemoveDescMode(value1, value2);
    }
    _updateRemoveTitle(value1, value2){
        this.props.updateRemoveTitleMode(value1, value2);
    }
    _updateCancelComp(value1, value2, value3, value4){
        this.props.updateCancelCompMode(value1, value2, value3, value4);
    }
    _updateUriOrigin(value1){
        this.props.updateUriOriginMode(value1);
    }

    onClickAddImg(e){
        e.preventDefault();
        const addImg_Mode_Value = true;
        const comp_Mode_Value = false;
        this.props.updateAddImgMode(addImg_Mode_Value, comp_Mode_Value);
    }
    onClickAddTitle(e){
        e.preventDefault();
        const addTitle_Mode_Value = true;
        const comp_Mode_Value = false;
        this.props.updateAddTitleMode(addTitle_Mode_Value, comp_Mode_Value);
    }
    onClickAddDesc(e){
        e.preventDefault();
        const addDesc_Mode_Value = true;
        const comp_Mode_Value = false;
        this.props.updateAddDescMode(addDesc_Mode_Value, comp_Mode_Value);
    }
    getContent(){
        const { addImg_Mode, init_Mode, trashImg_Mode, comp_Mode, addTitle_Mode, addDesc_Mode,
                imgAdded, titleAdded, descAdded, resultTitle, resultDesc, uriOrigin } = this.props;

        let _addImg_Mode, _resultImg, _resultTitle, _resultDesc = null;

        console.log(addImg_Mode)

        if(addImg_Mode === true) {
            _addImg_Mode = <InputFormImg updateAddImgComp={this._updateAddImgComp.bind(this)} updateCancelComp={this._updateCancelComp.bind(this)} />
        }else if (init_Mode === true && addImg_Mode === false){ 
            _addImg_Mode = null;
        }

        if(addTitle_Mode === true){
            _addImg_Mode = <InputFormTitle updateAddTitleComp={this._updateAddTitleComp.bind(this)} updateCancelComp={this._updateCancelComp.bind(this)}/>
        }

        if(addDesc_Mode === true){
            _addImg_Mode = <InputFormDesc updateAddDescComp={this._updateAddDescComp.bind(this)} updateCancelComp={this._updateCancelComp.bind(this)}/>
        }

        if(imgAdded === true){
            _resultImg = <ResultsImg updateRemoveImg={this._updateRemoveImg.bind(this)}/>
        }else if(trashImg_Mode === true || imgAdded === false){
            _resultImg = null;
        }

        if(titleAdded === true){
            _resultTitle = <ResultsTitle updateRemoveTitle={this._updateRemoveTitle.bind(this)} resultTitle={resultTitle}/>
        }else if(trashImg_Mode === true || titleAdded === false){
            _resultTitle = null;
        }

        if(descAdded === true){
            _resultDesc = <ResultsDesc updateRemoveDesc={this._updateRemoveDesc.bind(this)} resultDesc={resultDesc}/>
        }else if(trashImg_Mode === true || descAdded === false){
            _resultDesc = null;
        }

        if(comp_Mode === true){
            _addImg_Mode = null;
        }
        return {_addImg_Mode, _resultImg, _resultTitle, _resultDesc}
    }
    render(){
        const {title, subtitle, desc} = this.props;
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
                            <a href={'/'} onClick={function(e){e.preventDefault();}}>
                                <img src ={Union59} alt='btn' className='icon'></img>
                                <span>Preview App</span>
                            </a>
                            <a href={'/'} onClick={function(e){e.preventDefault();}}>
                                <img src ={Show} alt='btn' className='icon'></img>
                                <span>View Code</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        {this.getContent()._addImg_Mode}
                    </div>
                    <div className='option padding posRelative'>
                        <div className='template'>
                            <div className='ft-sm ft-semibold marginBottom-md marginTop-sm'>
                                {subtitle}
                                <img src={Info} alt='btn' className='marginLeft-sm'></img>
                            </div>
                            <div className='resultFrame posRelative'>
                                <div className='col-lg padding-left centering-top posAbsolute'>
                                    <div className='col-sm thumb border posRelative'> 
                                        <div className='azbtn ft-sm centering posAbsolute'>
                                            <a href='/' onClick={this.onClickAddImg.bind(this)}>
                                                <img src={AddBox} alt='btn' className='icon'></img>
                                                <span>Add image</span>
                                            </a>
                                        </div>
                                        {this.getContent()._resultImg}
                                    </div>
                                    <div className='col-md ft-sm padding-left azbtn'>
                                        <div>{this.getContent()._resultTitle}</div>
                                        <a href='/' onClick={this.onClickAddTitle.bind(this)}>
                                            <img src={AddBox} alt='btn' className='icon'></img>
                                            <span>Add title</span>
                                        </a>
                                        {this.getContent()._resultDesc}
                                        <p>
                                            <a href='/' onClick={this.onClickAddDesc.bind(this)}>
                                                <img src={AddBox} alt='btn' className='icon'></img>
                                                <span>Add description</span>
                                            </a>
                                        </p>
                                    </div>
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
export default Results