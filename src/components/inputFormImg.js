import React from 'react';
import UriSelector from './uriSelector';
import UriInputBox from './uriInputBox';

class FormResults extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            uri: 'internal'
        };
    }
    onClick(e){
        const addTitle_Mode_Value = false;
        const addImg_Mode_Value = false;
        const init_Mode_Value = true;
        const trashImg_Mode_Value = false;
        const comp_Mode_Value = false;
        const imgAdded_Value = true;
        this.props.updateAddImgComp(addImg_Mode_Value, addTitle_Mode_Value, init_Mode_Value, trashImg_Mode_Value, comp_Mode_Value, imgAdded_Value);
    }
    onCancel(e){
        const comp_Mode_Value = false;
        const addImg_Mode_Value = false;
        const addTitle_Mode_Value = false;
        const addDesc_Mode_Value = false;
        this.props.updateCancelComp(comp_Mode_Value, addImg_Mode_Value, addTitle_Mode_Value, addDesc_Mode_Value);
    }

    updateCategory(e){
        if (e.target.checked) {
            console.log(e.target.value);
            this.setState({uri: e.target.value});
        }
    }

    render(){
       let inputUI;
       let uriValue = this.state.uri;
       if(uriValue === 'internal'){
        inputUI = <UriSelector />
       }else if(uriValue === 'external'){
        inputUI = <UriInputBox />
       }
        return (
            <div>
                <div className='formFrame posAbslute form-padding padding'>
                    <form>
                        <div className='azlabel floatLeft'>
                            <input type='radio' name='options' value='internal' defaultChecked onChange={this.updateCategory.bind(this)} />
                            URI from your index
                        </div>
                        <div className='azlabel'>
                            <input type='radio' name='options' value='external' onChange={this.updateCategory.bind(this) } />
                            External URI
                        </div>
                        <p></p>
                        {inputUI}
                        <p></p>
                        <input onClick={this.onClick.bind(this)} type='button' value='Add'></input>
                        <input onClick={this.onCancel.bind(this)} type='button' value='cancel'></input>
                    </form>
                </div>
            </div>
        );
    }
}
export default FormResults;