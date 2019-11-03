import React from 'react';

class InputFormTitle extends React.Component {
    onClick(e){
        e.preventDefault();
        console.log(e.target.title.value)
        const resultTitle_Value = e.target.title.value;
        const addTitle_Mode_Value = false;
        const addImg_Mode_Value = false;
        const init_Mode_Value = true;
        const trashImg_Mode_Value = false;
        const comp_Mode_Value = false;
        const titleAdded_Value = true;

        this.props.updateAddTitleComp(
            addImg_Mode_Value, addTitle_Mode_Value, init_Mode_Value,
            trashImg_Mode_Value, comp_Mode_Value, titleAdded_Value, resultTitle_Value);
    }
    onCancle(e){
        e.preventDefault();
        const comp_Mode_Value = false;
        const addImg_Mode_Value = false;
        const addTitle_Mode_Value = false;
        const addDesc_Mode_Value = false;
        this.props.updateCancelComp(comp_Mode_Value, addImg_Mode_Value, addTitle_Mode_Value, addDesc_Mode_Value);
    }
    render(){
        return (
            <div>
                <div className='formFrame posAbslute form-padding padding'>
                <div className='ft-xsm'>Choose a field that you want to display as result tiltle. The list is from the first object of your index as an example.</div>
                    <form action='/create_propcess' method='post'
                          onSubmit={this.onClick.bind(this)}>
                        <p>
                            <select name='title'>
                                <option value='Seattle'>"city": Seattle</option>
                                <option value='9382100'>"listingId": 9382100</option>
                                <option value='3'>"beds": 3</option>
                                <option value='2'>"baths": 2</option>
                                <option value='This is a apartment residence and is priced to..'>"description": This is a apartment residence and is priced to sell.  This property has great views located in a de..</option>
                                <option value='Dies ist eine Eigentumswohnung und ist die Marke neu.  Diese Eigenschaft hat Zugang zum...'>"description_de": Dies ist eine Eigentumswohnung und ist die Marke neu.  Diese Eigenschaft hat Zugang zum...</option>
                            </select>
                        </p>
                        <p>
                            <input type='submit' value='Add'></input>
                            <input onClick={this.onCancle.bind(this)} type='button' value='Cancel'></input>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
export default InputFormTitle;