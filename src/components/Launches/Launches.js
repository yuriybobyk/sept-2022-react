import {Launch} from "../Launch/Launch";
import {useEffect, useState} from "react";
import {launchService} from "../api/launchService";
import './Launches.css'
const Launches = () => {
    const [launches, setLaunches] = useState([]);
useEffect(() =>{
    launchService.getAll().then(({data}) => setLaunches(data))

},[])
    return (
        <div className={'spaceX'}>
            {
                launches.filter(value => value.launch_year !== '2020')
                    .map(launch => <Launch key={launch.flight_number} launch={launch} />)
            }
        </div>
    );
};

export {Launches};