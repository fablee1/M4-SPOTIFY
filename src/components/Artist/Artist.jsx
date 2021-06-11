import ArtistTopSection from './ArtistTopSection';
import {Container} from 'react-bootstrap'
import ArtistAlbums from './ArtistAlbums';
import './Artist.css'
import MainLayout from './../MainLayout';
import { useState, useEffect } from 'react';

const Artist = (props) => {

    const [artistInfo, setArtistInfo] = useState(null)
    const [artistAlbums, setArtistAlbums] = useState(null)

    useEffect(() => {
        const artist = props.match.params.id
        fetchArtist(artist, setArtistInfo)
        fetchArtist(artist+'/albums', setArtistAlbums)
    }, [props.match.params.id])

    const fetchArtist = async (endpoint, callback) => {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${endpoint}`)
        if(response.ok){
            const data = await response.json()
            callback(data)
        }
    }

    return (
        <MainLayout class="artist">
            <Container className="cards_cont">
                <ArtistTopSection {...artistInfo} />
                <ArtistAlbums {...artistAlbums} artist={artistInfo?.name} />
            </Container>
        </MainLayout>
    )
}

export default Artist