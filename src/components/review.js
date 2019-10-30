import React from 'react';
import Wizard from './wizard';
import CreateBtn from './createBtn';
import InputCreateApp from './inputCreateApp';

class Review extends React.Component {
    _createApp(value1){
        this.props.updateCreateApp(value1)
    }
    _updateAppCreateComp(value1, value2){
        this.props.updateAppCreateCompMode(value1, value2)
    }
    render() {
        const { title, desc, comp_Mode, appCreated } = this.props;
        let _appCreated = null;
        if(appCreated === true){
            _appCreated = <InputCreateApp  updateAppCreateComp={this._updateAppCreateComp.bind(this)}/>
        }else if(appCreated === false && comp_Mode===false){
            _appCreated = null;
        }

        return (
        <div>
            <div className='stage content posAbslute'>
            {_appCreated}
                <div className='padding marginTop-sm marginBottom-md posRelative'>
                    <div className='title ft-md ft-semibold marginBottom-md'>{title}</div>
                    <div className='txt ft-xxsm'>{desc}</div>
                </div>
                <div className='borderTop table padding line-height-md'>
                    <div>
                        <div className='ft-sm ft-semibold'>Basic info</div>
                        <div className='ft-xxsm'>
                            <div className='col floatLeft'>
                                Title
                            </div>
                            <div className='marginBottom-md'>
                                azsearch engine
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='ft-sm ft-semibold'>Individual results</div>
                        <div className='ft-xxsm'>
                            <div className='col floatLeft'>
                                <div>Title</div>
                                <div>Description</div>
                                <div>Image</div>
                            </div>
                            <div className='marginBottom-md'>
                                <div>Seattle</div>
                                <div>This is a apartment residence and is priced to sell.  This property....</div>
                                <div>Field: URI1</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='ft-sm ft-semibold'>Sidebar</div>
                        <div className='ft-xxsm'>
                            <div className='col floatLeft'>
                                <div>Filter 1</div>
                                <div>Filter 2</div>
                                <div>Filter 3</div>
                            </div>
                            <div className='marginBottom-md'>
                                <div>Beds</div>
                                <div>Baths</div>
                                <div>Years</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='ft-sm ft-semibold'>Suggestions</div>
                        <div className='ft-xxsm'>
                            <div className='col floatLeft'>
                                <div>Search Text</div>
                                <div>Display Text</div>
                            </div>
                            <div className='marginBottom-md'>
                                <div>12px, Regular</div>
                                <div>14px, Semibold</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Wizard />
            </div>
            <CreateBtn createApp={this._createApp.bind(this)}/>
        </div>
        );
    }
}
export default Review;