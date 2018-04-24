import React, {Component} from "react";
import axios from "axios";
import Request from "superagent";
import CampersList from "./CampersList";

import "./App.css";

const ALL_TIME = `https://fcctop100.herokuapp.com/api/fccusers/top/alltime`;
const RECENT = `https://fcctop100.herokuapp.com/api/fccusers/top/recent`;

const titlesCars = (titleName) =>{
  return (
    <div className="card">
      <div className="card-content">
        <h5>{titleName}</h5>
      </div>
    </div>
  )
};



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results:null,
            colorALL: null,
            colorRecent: null
        };
    }

    componentWillMount() {
        this.apiCall(ALL_TIME);
    }

    apiCall = (URL) =>{
        axios.get(URL)
            .then((response) => {
                this.setState({
                    results: response.data
                })
            })
            .catch( function (error) {
                console.log(error);
            });

        if (URL.includes("alltime")){
            this.setState({
                colorRecent:`teal lighten-4`,
                colorALL:""
            })
        }else {
            this.setState({
                colorALL:`teal lighten-4`,
                colorRecent:""
            })
        }
    };

    changeTable = (e) => {
      this.apiCall(e.target.id);
    };

  render() {
      const {
          colorRecent,
          colorALL
      } = this.state;
      return (
      <div className="App">
            <h1>Camper Leaderboard</h1>
            <div className="container">
              <div className="row">
                <div className="col m1">
                    {titlesCars("#")}
                </div>
                <div className="col m5">
                    {titlesCars("Camper name")}
                </div>
                <div className="col m3">
                    <div className={`card ${colorALL} hoverable pointer`}>
                        <div className="card-content">
                            <a id={RECENT} onClick={this.changeTable}>Points in the past 30 days</a>
                        </div>
                    </div>
                </div>
                <div className="col m3">
                    <div className={`card ${colorRecent} hoverable pointer`}>
                        <div className="card-content">
                            <a id={ALL_TIME} onClick={this.changeTable}>All time points</a>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div>
                <CampersList
                    campersData={this.state.results}
                    colorALL={colorALL}
                    colorRecent={colorRecent}
                />
            </div>
      </div>
    );
  }
}
