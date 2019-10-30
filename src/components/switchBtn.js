import React from 'react';
import '../switch.css';

class SwitchBtn extends React.Component {
    _handleChange () {
	
    }
    render(){
        return(
            <div className="switch-container">
                <label>
                    <input ref="switch" onChange={ this._handleChange } className="switch" type="checkbox" />
                    <div>
                        <div></div>
                    </div>
                </label>
            </div>
        );
    }
};
export default SwitchBtn;