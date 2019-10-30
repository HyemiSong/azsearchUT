import React from 'react';
import TrashBtn from './trashBtn';

class EditableList extends React.Component {

    _updateRemoveObj(value1, value2){
        this.props.updateRemoveObjData(value1, value2)
    }

    render(){
        const { field, name, id } = this.props;
        console.log(id)
        return(
            <div>
                <li className="editList clear">
                    <form>
                        <select name='field' className='floatLeft'>
                            <option value={field}>{field}</option>
                            <option value='Baths'>Baths</option>
                            <option value='City'>City</option>
                        </select>
                        <select name='value' className='floatLeft'>
                            <option value={name}>{name}</option>
                            <option value='Range Slider'>Range Slider</option>
                            <option value='Static Filter'>Static Filter</option>
                        </select>
                        <div><TrashBtn id={id} updateRemoveObj={this._updateRemoveObj.bind(this)}/></div>
                    </form>
                </li>
               
            </div>
        );
    }
}
export default EditableList;