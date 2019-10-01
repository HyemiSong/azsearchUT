import React from 'react';
import TopBar from './topBar';
import NavBar from './navBar';
import FullBladeNav from './fullBladeNav';
import Bottomcontrol from './buttomControl';
import StepZilla from 'react-stepzilla';

import Basicinfo from './basicinfo';
import Results from './results';
import Sidebar from './sidebar';
import Review from './review';
import Suggestions from './suggestions';
import Splash from './splash';

import '../App.css';
import '../main.css';
import '../basicinfo.css';
import '../frame.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected_content: 2,
      contents:[
        {id:1, title:'Individual Results', desc:'Individual results are lists that are responses of searching a query in the search box. You can edit the UI below.'},
        {id:2, title:'Sidebar', desc:'Sidebar is something.'},
        {id:3, title:'Suggestions', desc:'Suggestions are somethings.'},
        {id:4, title:'Review', desc:'Review is something.'}
      ]
    };
  }
  render(){
    const steps = [
      // {name: '.', component: <Basicinfo />},
      {name: '.', component: <Results />},
      {name: '.', component: <Sidebar />},
      {name: '.', component: <Suggestions />},
      // {name: '.', component: <Splash />},
      {name: '.', component: <Review />}
    ]
      return (
        <div className="App">
          <TopBar />
          <NavBar />
          <FullBladeNav />
          <div className='step-progress'>
            <StepZilla 
            steps ={steps}
            nextButtonText = 'Next'
            />
          </div>
          <Bottomcontrol />
        </div>
    );
  }
}

export default App;
