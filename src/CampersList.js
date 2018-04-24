import React from 'react';
import Campers from './Campers';

class CampersList extends React.Component {
    render() {
        const {
            campersData,
            colorALL,
            colorRecent
        } = this.props;

        if (!campersData){
            return <h3>Loading...</h3>
        }

        const listCampers = campersData.map((camper, index)=>{
            return(
                <div key={index+1}>
                    <Campers
                        number={index+1}
                        img={camper.img}
                        username={camper.username}
                        recent={camper.recent}
                        alltime={camper.alltime}
                        colorALL={colorALL}
                        colorRecent={colorRecent}
                    />
                </div>
            )
        });

        return(
            <div className="container">
                {listCampers}
            </div>
        )

    };
}

export default CampersList;