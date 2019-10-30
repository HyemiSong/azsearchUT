import React from 'react';

class BottomControl extends React.Component {
    _onClick(e){
       this.props.reviewPage(3);
    }
    render(){
        return(
            <div className='bottomCtrl posAbslute'>
                <div className='centering-left'>
                    <a href="#" onClick={this._onClick.bind(this)}><button>Review+Create</button></a>
                </div>
            </div>
        );
    }
}
export default BottomControl;