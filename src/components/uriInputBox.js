import React from 'react';

class UriInputBox extends React.Component {
    render(){
        return(
            <div>
                <input type='text' name='title' placeholder='Add an external URI' size="100"></input>
            </div>
        );
    }
}
export default UriInputBox