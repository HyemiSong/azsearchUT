import React from 'react';
import Thumbnail from '../images/thumb.jpg';
import Trashbtn from '../images/TrashBtn.svg';

class Thumb extends React.Component {
    onClickRemoveImg(e){
        e.preventDefault();
        const trashImg_Mode_Value = true;
        const addImg_Mode_Value = false;
        this.props.updateRemoveImg(trashImg_Mode_Value, addImg_Mode_Value);
    }
    render(){
        return(
            <div>
                <img src = {Thumbnail} alt='thumb' className='thumbnail'></img>
                <a href='/' onClick={this.onClickRemoveImg.bind(this)}>
                    <img src ={Trashbtn} alt='trash'></img>
                </a>
            </div>
        )
    }
}
export default Thumb;