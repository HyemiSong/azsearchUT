import React from 'react';
import '../formResults.css';

class FormResults extends React.Component{
    onClickAddComp(e){
        const addImg_Mode_Value = false;
        const init_Mode_Value = true;
        const trashImg_Mode_Value = false;
        this.props.updateAddImgComp(addImg_Mode_Value, init_Mode_Value, trashImg_Mode_Value)
    }
    render(){
        return (
            <div>
                <div className='formFrame posAbslute form-padding'>
                    <form>
                        <div className='azlabel'>URI in your index</div>
                        <select>
                            <option value='uri'>"uri": “https://searchdatasets.blob.core.windows.net/images/bd5bt3home.jpg”</option>
                            <option value='uri2'>"uri2": “https://searchdatasets.blob.core.windows.net/images/bd5bt3home.jpg”</option>
                        </select>
                        <div className='azlabel'>Add URI</div>
                        <input type='text' name='title' placeholder='Write a custom URI'></input>
                    </form>
                    <input onClick={this.onClickAddComp.bind(this)} type='button' value='Add'>
                    </input>
                </div>
            </div>
        );
    }
}
export default FormResults;