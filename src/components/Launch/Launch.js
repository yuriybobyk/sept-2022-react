const Launch = ({launch}) => {
    const {mission_name, launch_year, links:{mission_patch_small}} = launch;
    return (
        <div>
            <div className={'info'}>
                <div>{mission_name}</div>
                <div>{launch_year}</div>
                <img src={mission_patch_small} alt={mission_patch_small}/>
            </div>
        </div>
    );
};

export {Launch};