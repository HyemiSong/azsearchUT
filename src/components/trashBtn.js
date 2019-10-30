import React from 'react';
import Trashbtn from '../images/Trash_B.svg';

class TrashBtn extends React.Component {
    onClickRemoveObj(e, id){
        e.preventDefault();
        const trashImg_Mode_Value = true;
        this.props.updateRemoveObj(trashImg_Mode_Value, this.props.id);
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
export default TrashBtn;