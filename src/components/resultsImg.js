import React from 'react';
import Thumbnail from '../images/thumb.jpg';
import TrashBtnFrame from './trashBtnFrame';

class Thumb extends React.Component {
    _updateRemoveObj(value1){
        const descAdded_Value = false;
        this.props.updateRemoveImg(value1, descAdded_Value);
    }
    render(){
        return(
            <div className='posAbsolute'>
                <div className='thumbnail'><img src = {Thumbnail} alt='thumb'></img>
                <div className='trashBtnFrame'><TrashBtnFrame updateRemoveObj={this._updateRemoveObj.bind(this)}/></div>
                </div>
            </div>
        )
    }
};
export default Thumb;