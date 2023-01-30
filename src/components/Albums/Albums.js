import {useEffect, useState} from "react";
import {albumsRequest} from "../../api";
import {Album} from "../Album/Album";
import './Albums.css'

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(()=>{
        albumsRequest.getAll().then(({data})=> setAlbums([...data]))
    },[])
    return (
        <div className={'Albums'}>
            {albums.map(album=> <Album key = {album.id} album={album}/> )}
        </div>
    );
};

export {Albums};