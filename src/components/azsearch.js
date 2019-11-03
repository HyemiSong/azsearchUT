import React from 'react';

import TopBar from './topBar';
import NavBar from './navBar';
import FullBladeNav from './fullBladeNav';
import StepZilla from 'react-stepzilla';

import Basic from './basicinfo';
import Results from './results';
import Sidebar from './sidebar';
import Review from './review';
import Suggestions from './suggestions';
import Tab from './tab';

import '../App.css';
import '../main.css';
import '../frame.css';
import '../results.css';
import '../stepwizard.css';

class Azsearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          selected_id: 2,
          addImg_Mode: false,
          addTitle_Mode: false,
          addDesc_Mode: false,
          addSidebar_Mode: false,
          trashImg_Mode: false,
          init_Mode: false,
          comp_Mode: false,
          imgAdded: false,
          titleAdded: false,
          descAdded: false,
          compAdded: false,
          appCreated: false,
          isChecked: false,
          preApp: '',
          preCode: '',
          resultTitle: '',
          resultDesc: '',
          newComp:{field:' ', name:' '},
          components:[
            {id:1, field:'beds', name:'Checkbox'},
            {id:2, field:'baths', name:'Renge Slider'},
            {id:3, field:'city', name:'static Filter'},
            {id:4, field:'floors', name:'Checkbox'}
          ],
          contents:[
            {id:1, title:'Basic information', subtitle:'Application title', desc:'Basic information is greate.'},
            {id:2, title:'Individual Results', subtitle:'An individual result', desc:'Customize displaying individual results. You can manupulate UI representing an individual result through selecting a field from your index.'},
            {id:3, title:'Sidebar', subtitle:'UI components of sidebar', desc:'Choose and customize filters that will be displayed in the sidebar. The list order will be same as the components layout in the sidebar.'},
            {id:4, title:'Suggestions', subtitle:'A suggestion', desc:'Choose a field that will be displayed in the suggestion. The list order will be same as the suggestion layout in a search suggestion.'},
            {id:5, title:'Graph', desc:'Graph is great.'},
            {id:6, title:'Splash', desc:'Splash is great.'},
            {id:7, title:'Review & Create', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'}
          ]
        };
    }

    _updateAddImgCompMode(value1, value2, value3, value4, value5, value6){
        this.setState({addImg_Mode: value1});
        this.setState({addTitle_Mode: value2});
        this.setState({init_Mode: value3});
        this.setState({trashImg_Mode: value4});
        this.setState({comp_Mode: value5});
        this.setState({imgAdded: value6});
    }
    _updateAddTitleCompMode(value1, value2, value3, value4, value5, value6, value7){
        this.setState({addImg_Mode: value1});
        this.setState({addTitle_Mode: value2});
        this.setState({init_Mode: value3});
        this.setState({trashImg_Mode: value4});
        this.setState({comp_Mode: value5});
        this.setState({titleAdded: value6});
        this.setState({resultTitle: value7})
    }
    _updateAddDescCompMode(value1, value2, value3, value4, value5, value6, value7){
        this.setState({addImg_Mode: value1});
        this.setState({addDesc_Mode: value2});
        this.setState({init_Mode: value3});
        this.setState({trashImg_Mode: value4});
        this.setState({comp_Mode: value5});
        this.setState({descAdded: value6});
        this.setState({resultDesc: value7});
    }
    _updateAddImgMode(value1, value2){
        this.setState({addImg_Mode: value1});
        this.setState({comp_Mode: value2});
    }
    _updateAddTitleMode(value1, value2){
        this.setState({addTitle_Mode: value1});
        this.setState({comp_Mode: value2});
    }
    _updateAddDescMode(value1, value2){
        this.setState({addDesc_Mode: value1});
        this.setState({comp_Mode: value2});
    }
    _updateRemoveImgMode(value1, value2){
        this.setState({trashImg_Mode: value1});
        // this.setState({imgAdded: value2});
        // this.setState({titleAdded: value3});
        this.setState({imgAdded: value2}); 
        // this.setState({addDesc_Mode: value5})   
    }
    _updateRemoveTitleMode(value1, value2){
        this.setState({trashImg_Mode: value1});
        this.setState({titleAdded: value2});
    }
    _updateRemoveDescMode(value1, value2){
        this.setState({trashImg_Mode: value1});
        this.setState({descAdded: value2});   
    }
    _updateCancelCompMode(value1, value2, value3, value4){
        this.setState({comp_Mode: value1});
        this.setState({addImg_Mode: value2});
        this.setState({addTitle_Mode: value3});
        this.setState({addDesc_Mode: value4});
    }
    _updateAddSidebarMode(value1, value2){
        this.setState({addSidebar_Mode: value1});
        this.setState({comp_Mode: value2});
    }
    //sidebar
    _updateAddSidebarCompMode(value1, value2, value3, value4, value5, value6, value7){
        this.setState({init_Mode: value1});
        this.setState({trashImg_Mode: value2});
        this.setState({comp_Mode: value3});
        this.setState({addSidebar_Mode: value4});
        this.setState({compAdded: value5})
        this.setState({newComp:{field:value6, name:value7}})
    }
    _updateCancelSidebarCompMode(value1, value2){
        this.setState({comp_Mode: value1});
        this.setState({addSidebar_Mode: value2})
    }
    _updateComponentsArr(value1, value2, value3){
        this.setState({components: value1})
        this.setState({compAdded: value2})
        this.setState({trashImg_Mode: value3})
    }
    _updateSelectedId(value1, value2){
        this.setState({trashImg_Mode: value1})
        this.setState({selected_id: value2})
    }
    _updateCreateApp(value1){
        this.setState({appCreated: value1})
    }
    _updateAppCreateCompMode(value1, value2){
        this.setState({comp_mode: value1})
        this.setState({appCreated: value2})
    }
    _updateUriOriginMode(value1){
        this.setState({uriOrigin: value1})
        console.log(value1)
    }
      
    render(){
        const { user } = this.props || {};
        console.log(user)

        const steps = [
            // {name: '.', component: <Basic title={this.state.contents[0].title} subtitle={this.state.contents[0].subtitle}
            //                               desc={this.state.contents[0].desc} />
            // },
            {name: 'Individual Results', component: <Results title={this.state.contents[1].title} subtitle={this.state.contents[1].subtitle} 
                                            desc={this.state.contents[1].desc} preApp={this.state.preApp} preCode={this.state.preCode}
                                            init_Mode={this.state.init_Mode} trashImg_Mode={this.state.trashImg_Mode}
                                            comp_Mode={this.state.comp_Mode} addImg_Mode={this.state.addImg_Mode}
                                            addTitle_Mode={this.state.addTitle_Mode} addDesc_Mode={this.state.addDesc_Mode}
                                            imgAdded={this.state.imgAdded} titleAdded={this.state.titleAdded}
                                            descAdded={this.state.descAdded} resultTitle={this.state.resultTitle}
                                            resultDesc={this.state.resultDesc}
                                            isChecked={this.state.isChecked}
      
                                            updateAddImgMode={this._updateAddImgMode.bind(this)}
                                            updateAddTitleMode={this._updateAddTitleMode.bind(this)}
                                            updateAddDescMode={this._updateAddDescMode.bind(this)}
      
                                            updateAddImgCompMode={this._updateAddImgCompMode.bind(this)}
                                            updateAddTitleCompMode={this._updateAddTitleCompMode.bind(this)}
                                            updateAddDescCompMode={this._updateAddDescCompMode.bind(this)}
                                            updateCancelCompMode={this._updateCancelCompMode.bind(this)}
      
                                            updateRemoveImgMode={this._updateRemoveImgMode.bind(this)}
                                            updateRemoveTitleMode={this._updateRemoveTitleMode.bind(this)}
                                            updateRemoveDescMode={this._updateRemoveDescMode.bind(this)}
                                            />
            },
            {name: 'Sidebar', component: <Sidebar title={this.state.contents[2].title} subtitle={this.state.contents[2].subtitle} 
                                           desc={this.state.contents[2].desc}
                                           init_Mode={this.state.init_Mode} trashImg_Mode={this.state.trashImg_Mode}
                                           comp_Mode={this.state.comp_Mode} compAdded={this.state.compAdded}
                                           addSidebar_Mode={this.state.addSidebar_Mode}
                                           components={this.state.components} selected_id={this.state.selected_id}
                                           newComp={this.state.newComp}
      
                                           updateAddSidebarMode={this._updateAddSidebarMode.bind(this)}
      
                                           updateAddSidebarCompMode={this._updateAddSidebarCompMode.bind(this)}
                                           updateCancelSidebarCompMode={this._updateCancelSidebarCompMode.bind(this)}
                                           updateComponentsArr={this._updateComponentsArr.bind(this)}
                                           updateSelectedId={this._updateSelectedId.bind(this)}
                                           />
            },
            {name: 'Suggestions', component: <Suggestions title={this.state.contents[3].title} subtitle={this.state.contents[3].subtitle}
                                           desc={this.state.contents[3].desc}/>},
            // {name: '.', component: <Graph title={this.state.contents[4].title} desc={this.state.contents[4].desc}/>},
            // {name: '.', component: <Splash title={this.state.contents[5].title} desc={this.state.contents[5].desc}/>},
            {name: 'Review+Create', component: <Review title={this.state.contents[6].title} desc={this.state.contents[6].desc}
                                          comp_Mode={this.state.comp_Mode} appCreated={this.state.appCreated}
      
                                          updateCreateApp={this._updateCreateApp.bind(this)}
                                          updateAppCreateCompMode={this._updateAppCreateCompMode.bind(this)}/>
            },
          ]
            return (
              <div className="App">
                <TopBar />
                <NavBar />
                <FullBladeNav />
                <div className='step-progress'>
                  <StepZilla 
                  steps ={steps}
                  stepsNavigation = {true}
                  showSteps = {true}
                  nextButtonText = 'Next'
                  onStepChange={step =>
                    console.log(step)
                  }
                  />
                </div>   
              </div>
          );
        }
    }
export default Azsearch;

