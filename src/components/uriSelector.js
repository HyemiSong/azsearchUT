import React from 'react';

class UriSelector extends React.Component {
    render(){
        return(
            <div>
                <select>
                    <option value='uri'>"uri": “https://searchdatasets.blob.core.windows.net/images/bd5bt3home.jpg”</option>
                    <option value='uri2'>"uri2": “https://searchdatasets.blob.core.windows.net/images/bd5bt3home.jpg”</option>
                </select>
            </div>
        );
    }
}
export default UriSelector