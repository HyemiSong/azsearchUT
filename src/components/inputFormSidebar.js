import React from 'react';

class InputFormSidebar extends React.Component {
    onClick(e){
        e.preventDefault();
        const field_Value = e.target.field.value;
        const comp_Value = e.target.comp.value;
        console.log(field_Value, comp_Value)
        const init_Mode_Value = true;
        const trashImg_Mode_Value = false;
        const comp_Mode_Value = false;
        const addSidebar_Mode_Value = false;
        const compAdded_Value = true;
        this.props.updateAddSidebarComp(
            init_Mode_Value, trashImg_Mode_Value, comp_Mode_Value, addSidebar_Mode_Value, compAdded_Value, field_Value, comp_Value);
    }
    onCancel(e){
        e.preventDefault();
        console.log("field_Value, comp_Value")
        const comp_Mode_Value = false;
        const addSidebar_Mode_Value = false;
        this.props.updateCancelSidebarComp(comp_Mode_Value, addSidebar_Mode_Value)
    }
    render(){
        return(
            <div className='formFrame posAbsolute padding'>
                <div></div>
                <form action='./create_process' method='post' onSubmit={this.onClick.bind(this)}>
                    <p>
                        <select name='field'>
                            <option value='Beds'>Beds</option>
                            <option value='Baths'>Baths</option>
                            <option value='City'>City</option>
                        </select>
                        <select name='comp'>
                            <option value='Checkbox'>Checkbox</option>
                            <option value='Range Slider'>Range Slider</option>
                            <option value='Static Filter'>Static Filter</option>
                        </select>
                    </p>
                    <p>
                        <input type='submit' value='add'></input>
                        <input onClick={this.onCancel.bind(this)} type='button' value='Cancle'></input>
                    </p>
                </form>
            </div>
        );
    }
}
export default InputFormSidebar;