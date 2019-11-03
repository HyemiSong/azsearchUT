import React from 'react';

class InputFormDesc extends React.Component {
    onClick(e){
        e.preventDefault();
        console.log(e.target.title.value)
        const addImg_Mode_Value = false;
        const addDesc_Mode_Value = false;
        const init_Mode_Value = true;
        const trashImg_Mode_Value = false;
        const comp_Mode_Value = false;
        const descAdded_Value = true;
        const resultTitle_Value = e.target.title.value;

        this.props.updateAddDescComp(
            addImg_Mode_Value, addDesc_Mode_Value, init_Mode_Value, 
            trashImg_Mode_Value, comp_Mode_Value, descAdded_Value, resultTitle_Value);
    }
    onCancel(e){
        e.preventDefault();
        const comp_Mode_Value = false;
        const addImg_Mode_Value = false;
        const addTitle_Mode_Value = false;
        const addDesc_Mode_Value = false;
        this.props.updateCancelComp(comp_Mode_Value, addImg_Mode_Value, addTitle_Mode_Value, addDesc_Mode_Value);
    }
    render(){
        return(
            <div className='formFrame posAbsolute form-padding padding'>
                <div className='ft-xsm'>Choose a field that you want to display as description. The list is from the first object of your index as an example.</div>
                <form action='/create_process' method='post'
                    onSubmit={this.onClick.bind(this)}>
                      <p>
                        <select name='title'>
                            <option value='Bellevue'>"city": Bellevue</option>
                            <option value='9382100'>"listingId": 9382100</option>
                            <option value='3'>"beds": 3</option>
                            <option value='2'>"baths": 2</option>
                            <option value='This is a apartment residence and is priced to..'>"description": This is a apartment residence and is priced to sell.  This property has great views located in a de..</option>
                            <option value='Dies ist eine Eigentumswohnung und ist die Marke neu.  Diese Eigenschaft hat Zugang zum...'>"description_de": Dies ist eine Eigentumswohnung und ist die Marke neu.  Diese Eigenschaft hat Zugang zum...</option>
                        </select>
                      </p>
                      <p>
                          <input type='submit' value='add'></input>
                          <input onClick={this.onCancel.bind(this)} type='button' value='Cancel'></input>
                      </p>
                </form>
            </div>
        );
    }
}
export default InputFormDesc;