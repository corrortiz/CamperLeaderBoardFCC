import React from 'react';

class Campers extends React.Component {
    render() {
        const {
            number,
            img,
            username,
            recent,
            alltime,
            colorALL,
            colorRecent
        } = this.props;
        return (
            <div className="row">

                    <div className="col m1">
                        <div className="card">
                            <div className="card-content">
                                <h4>{number}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col m5">
                        <div className="card grey lighten-4">
                            <div className="card-content valign-wrapper">
                                <div className="row">
                                    <div className="col l3 ">
                                        <img src={img} alt={username} className="circle responsive-img"/>
                                    </div>
                                    <div className="col l9 left-align">
                                        <h3>{username}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col m3">
                        <div className={`card ${colorALL}`}>
                            <div className="card-content">
                                <h3>{recent}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col m3">
                        <div className={`card ${colorRecent}`}>
                            <div className="card-content">
                                <h3>{alltime}</h3>
                            </div>
                        </div>
                    </div>

            </div>
        );
    };
}

export default Campers;