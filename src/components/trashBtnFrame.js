import React from 'react';
import Trashbtn from '../images/TrashBtn.svg';

class TrashBtnFrame extends React.Component {
    onClickRemoveObj(e){
        e.preventDefault();
        const trashImg_Mode_Value = true;
        this.props.updateRemoveObj(trashImg_Mode_Value);
    }
    render(){
        return(
            <div>
                <a href='/' onClick={this.onClickRemoveObj.bind(this)}>
                    <img src ={Trashbtn} alt='trash'></img>
                </a>
            </div>
        )
    }
}
export default TrashBtnFrame;