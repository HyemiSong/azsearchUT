import React from 'react';
import TrashBtn from './trashBtn';

class ResultsTitle extends React.Component {
    _updateRemoveObj(value1){
        const titleAdded_Value = false;
        this.props.updateRemoveTitle(value1, titleAdded_Value);
    }
    render(){
        const { resultTitle } = this.props;
        return(
            <div className='posAbsolute'>
                <div className='ft-md ft-semibold floatLeft'>{resultTitle}</div>
                <div className='trashBtn floatLeft'><TrashBtn updateRemoveObj={this._updateRemoveObj.bind(this)}/></div>
                <div className='whiteBg-mx'></div>
            </div>
        );
    }
}
export default ResultsTitle;