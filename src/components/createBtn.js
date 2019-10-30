import React from 'react';

class CreateBtn extends React.Component {
    _onClick(e){
      const appCreated_Value = true;
      this.props.createApp(appCreated_Value)
    }
     render(){
         return(
             <div className='bottomCtrl posAbslute'>
                 <div className='centering-left'>
                     <a href="#" onClick={this._onClick.bind(this)}><button>Create</button></a>
                 </div>
             </div>
         );
     }
}
export default CreateBtn;