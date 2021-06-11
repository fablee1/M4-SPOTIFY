import { Container, Row } from 'react-bootstrap'
import MainLayout from "../MainLayout"
import AlbumCard from './AlbumCard';
import AlbumTrackList from './AlbumTrackList';
import './Album.css'
import { useState, useEffect } from 'react';

const Album = (props) => {

    const [albumInfo, setAlbumInfo] = useState(null)

    useEffect(() => {
        fetchAlbum()
    }, [props.match.params.id])

    const fetchAlbum = async () => {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${props.match.params.id}`)
        if(response.ok){
            const data = await response.json()
            setAlbumInfo(data)
        }
    }
    
    return (
        <MainLayout class="album">
            <Container fluid id="main_content">
                <Container fluid>
                    <Row>
                        { 
                            albumInfo && <><AlbumCard {...albumInfo} /><AlbumTrackList {...albumInfo} /></>
                        }
                    </Row>
                </Container>
            </Container>
        </MainLayout>
    )
}

export default Album