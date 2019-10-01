import React from 'react';

class bottomControl extends React.Component {
    render(){
        return(
            <div className='bottomCtrl posAbslute'>
                <div className='centering-left'>
                    <button>Review+Create</button>
                    {/* <button className='closebtn'>Close</button> */}
                </div>
            </div>
        );
    }
}
export default bottomControl;