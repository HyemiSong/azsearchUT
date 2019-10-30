import React from 'react';
import Wizard from './wizard';
import EditableList from './editableList';
import InputFormSidebar from './inputFormSidebar';
import Bottomcontrol from './buttomControl';

import ThumbImg from '../images/results.svg';
import Union59 from '../images/Union59_B.svg';
import Show from '../images/Eye_B.svg';
import Info from '../images/Info.svg';
import AddBox from '../images/addBox_B.svg';

import '../sidebar.css';

class Sidebar extends React.Component {
    _updateAddSidebarComp(value1, value2, value3, value4, value5, value6, value7){
        this.props.updateAddSidebarCompMode(value1, value2, value3, value4, value5, value6, value7);
    }

    _updateCancelSidebarComp(value1, value2){
        this.props.updateCancelSidebarCompMode(value1, value2);
    }

    _updateComponents(value1, value2){
        this.props.updateComponentsArr(value1, value2)
    }

    onClickAddSidebar(e){
        e.preventDefault();
        const addSidebar_Mode_Value = true;
        const comp_Mode_Value = false;
        this.props.updateAddSidebarMode(addSidebar_Mode_Value, comp_Mode_Value)
    }

    _updateRemoveObjData(value1, value2){
        this.props.updateSelectedId(value1, value2);
    }

    render(){
        const { title, subtitle, desc, init_Mode, trashImg_Mode, compAdded, comp_Mode, addSidebar_Mode, components, selected_id, newComp } = this.props;
        let _addSidebar_Mode, _compAdded = null;

        if(addSidebar_Mode === true){
            _addSidebar_Mode = <InputFormSidebar updateAddSidebarComp={this._updateAddSidebarComp.bind(this)} updateCancelSidebarComp={this._updateCancelSidebarComp.bind(this)} />
        }else if(init_Mode === true && addSidebar_Mode === false){
            _addSidebar_Mode = null;
        }

        if(comp_Mode === false && compAdded === true){
            const compAdded = false;
            const trashImg_Mode = false;
            const length = components.length;
            const _components = Array.from(components);
            _components.push({id:length+1, field:newComp.field, name:newComp.name});

            this._updateComponents(_components, compAdded, trashImg_Mode);
        }

        _compAdded = components.map((data, i) => {
            return (<EditableList field={data.field} name={data.name} key={i} id={data.id} updateRemoveObjData={this._updateRemoveObjData.bind(this)}/>);
        })

        if(trashImg_Mode === true && compAdded === false){
            const compAdded = false;
            const trashImg_Mode = false;
            // if(window.confirm('really?')){
                let _components = Array.from(components);
                let i = 0;
                while(i < _components.length){
                    if(_components[i].id === selected_id){
                        _components.splice(i,1);
                        break;
                    }
                    i = i+1;
                }
                console.log(_components)
                this._updateComponents(_components, compAdded, trashImg_Mode)
           // }
        }

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
                        <a href='/' onClick={this.onClickAddSidebar.bind(this)}>
                            <img src ={AddBox} alt='btn' className='icon'></img>
                            <span>Add component</span>
                        </a>
                        <a href='/' onClick={function(e){e.preventDefault();}}>
                            <img src ={Union59} alt='btn' className='icon'></img>
                            <span>Preview App</span>
                        </a>
                        <a href='/' onClick={function(e){e.preventDefault();}}>
                            <img src ={Show} alt='btn' className='icon'></img>
                            <span>View Code</span>
                        </a>
                    </div>
                </div>
                <div>
                    {_addSidebar_Mode}
                </div>
                <div className='option padding posRelative'>
                    <div className='template'>
                        <div className='ft-sm ft-semibold marginBottom-md marginTop-sm'>
                            {subtitle}
                            <img src={Info} alt='btn' className='marginLeft-sm'></img>
                        </div>
                        <ul>
                        {_compAdded}
                        </ul>
                    </div>
                </div>
                <Wizard />
            </div>
            <Bottomcontrol reviewPage={(value) => this.props.jumpToStep(value)}/>
         </div>
        );
    }
}
export default Sidebar;