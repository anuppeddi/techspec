import React, {Component} from 'react';
import TechspecData from './Json/techspec.json';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      techSpech:[]
    }
  }

  getTechSpecData = () => {
    this.setState({techSpech:TechspecData})
  }
  render(){
    return (
      <div className="p-3">
      <div className="text-center">
        <div className="d-inline">
          <button className="btn techspec_btn" onClick={this.getTechSpecData}>
            <h4 className="font-weight-bold">TechSpec</h4>
          </button>
        </div>
      </div>
      <div className="row  techspec_container">
            {this.state.techSpech.map((techSpec, index) => {
                return (
                <div key={index} className="col-md-12  p-3">
                  <h1>{techSpec.TechSpec}</h1>
                  <p className="m-0 mb-4 ml-4 border-bottom">
                    <span className="tech_spec">  Dimensions </span>
                    <span className="tech_fields">{techSpec.Dimensions}</span>
                  </p>
                  <p className="m-0 mb-4 ml-4  border-bottom displayTechspec" >
                    <span className="tech_spec">Display </span>
                    <span className="tech_fields displayField ">{techSpec.Display}</span>
                  </p>
                  <p className="m-0 mb-4 ml-4 border-bottom">
                    <span className="tech_spec">Memory </span>
                    <span className="tech_fields">{techSpec.Memory}</span>
                  </p>
                  <p className="m-0 mb-4 ml-4 border-bottom">
                    <span className="tech_spec">Processor</span>
                    <span className="tech_fields">{techSpec.Processor}</span>
                  </p>
                  <p className="m-0 mb-4 ml-4 border-bottom">
                    <span className="tech_spec"> Batterylife</span>
                    <span className="tech_fields">{techSpec.Batterylife}</span>
                  </p>
                  <p className="m-0 mb-4 ml-4 border-bottom">
                    <span className="tech_spec"> Graphics</span>
                    <span className="tech_fields">{techSpec.Graphics}</span>
                  </p>
                  <p className="m-0 mb-4 ml-4 border-bottom">
                    <span className="tech_spec"> Storage5</span>
                    <span className="tech_fields">{techSpec.Storage5}</span>
                  </p>
                  <p className="m-0 mb-4 ml-4 border-bottom displayConnection">
                    <span className="tech_spec ">Connections</span>
                    <span className="tech_fields displayField">{techSpec.Connections}</span>
                  </p>
                  <p className="m-0 mb-4 ml-4 border-bottom displaySecurity">
                    <span className="tech_spec">Security</span>
                    <span className="tech_fields displayFieldSecurity">{techSpec.Security}</span>
                  </p>
                  <p className="m-0 mb-4 ml-4 border-bottom displaySoftware">
                    <span className="tech_spec "> Software</span>
                    <span className="tech_fields displayField ">{techSpec.Software}</span>
                  </p>
                </div>
              );
            })}
        </div>
    </div>
    );
    
  }

}

export default App;
