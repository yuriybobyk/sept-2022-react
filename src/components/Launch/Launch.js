import './Launch.css'
const Launch = ({launch}) => {
    const {flight_number, mission_name, launch_year, links:{mission_patch_small}} = launch;
    return (
        <div>
            <div className={'info'}>
                <div>Flight Number: {flight_number}</div>
                <div>Mission Name: {mission_name}</div>
                <div>Launch year: {launch_year}</div>
                <img src={mission_patch_small} alt={mission_patch_small}/>
            </div>
        </div>
    );
};

export {Launch};