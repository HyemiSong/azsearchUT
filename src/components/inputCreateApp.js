import React from 'react';
import File from '../images/results.svg';

class InputCreateApp extends React.Component {
    onClick(e){
        e.preventDefault();
        const comp_Mode_Value = false;
        const appCreated_Value = false;
        this.props.updateAppCreateComp(comp_Mode_Value, appCreated_Value) 
    }
    render(){
        return(
            <div className='createApp formFrame posAbsolute padding'>
                <div className='ft-sm ft-semibold marginBottom-md marginTop-sm'>
                    Your download is ready
                </div>
                <div className='txt ft-sm'>
                    To use the generated search website, CORS must be enabled. Make sure CORS(*) is enabled before using generated website.
                </div>
                <p>
                    <a href={File} download onClick={this.onClick.bind(this)}><input type='button' value='Download'></input></a>
                    <input onClick={this.onClick.bind(this)} type='button' value='Cancel'></input>
                </p>
            </div>
        );
    }
}
export default InputCreateApp;