import React from 'react';
import TopBar from './topBar';
import NavBar from './navBar';
import FullBladeNav from './fullBladeNav';
import Bottomcontrol from './buttomControl';
import StepZilla from 'react-stepzilla';

import Results from './results';
import Sidebar from './sidebar';
import Review from './review';
import Suggestions from './suggestions';

import '../App.css';
import '../main.css';
import '../basicinfo.css';
import '../frame.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected_content: 2,
      addimg_Mode: false,
      preApp: '',
      preCode: '',
      contents:[
        {id:1, title:'Basic information', subtitle:'Templates', desc:'Basic information is greate.'},
        {id:2, title:'Individual Results', subtitle:'An individual result', desc:'Individual results are greate?'},
        {id:3, title:'Sidebar', desc:'Sidebar is great?????'},
        {id:4, title:'Suggestions', desc:'Suggestions are great.'},
        {id:5, title:'Graph', desc:'Graph is great.'},
        {id:6, title:'Splash', desc:'Splash is great.'},
        {id:7, title:'Review', desc:'Review is great.'}
      ]
    };
  }
  updateAddCompMode(value){
    this.setState({addimg_Mode: value})
    console.log(value)
  }
  render(){
    const steps = [
      // {name: '.', component: <Basic information={this.state.contents[0].title} desc={this.state.contents[0].desc}/>},
      {name: '.', component: <Results title={this.state.contents[1].title} subtitle={this.state.contents[1].subtitle} 
                                      desc={this.state.contents[1].desc} preApp={this.state.preApp} preCode={this.state.preCode}
                                      addimg_Mode={this.state.addimg_Mode}
                                      onChangePage={function(){
                                        this.setState({addimg_Mode: true});
                                      }.bind(this)}
                                      updateAddCompMode={this.updateAddCompMode.bind(this)}/>
      },
      {name: '.', component: <Sidebar title={this.state.contents[2].title} desc={this.state.contents[2].desc}/>},
      {name: '.', component: <Suggestions title={this.state.contents[3].title} desc={this.state.contents[3].desc}/>},
      // {name: '.', component: <Graph title={this.state.contents[4].title} desc={this.state.contents[4].desc}/>},
      // {name: '.', component: <Splash title={this.state.contents[5].title} desc={this.state.contents[5].desc}/>},
      {name: '.', component: <Review title={this.state.contents[6].title} desc={this.state.contents[6].desc}/>},
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
            onStepChange={step =>
              console.log(step)
            }
            />
          </div>
          {/* <Results updateAddCompMode={this.updateAddCompMode.bind(this)}/> */}
          <Bottomcontrol />
        </div>
    );
  }
}

export default App;
