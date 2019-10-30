import React from 'react';
import TrashBtn from './trashBtn';

class ResultsDesc extends React.Component {
    _updateRemoveObj(value1){
        const descAdded_Value = false;
        this.props.updateRemoveDesc(value1, descAdded_Value);
    }
    render(){
        const { resultDesc } = this.props;
        console.log(resultDesc)
        return(
            <div className='marginTop-md posAbsolute'>
                <div className='resultDesc floatLeft'>{resultDesc}</div>
                <div className='trashBtn floatLeft'><TrashBtn updateRemoveObj={this._updateRemoveObj.bind(this)}/></div>
                <div className='whiteBg-mx'></div>
            </div>
        );
    }
}
export default ResultsDesc;