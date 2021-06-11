import MainLayout from "../MainLayout"
import HomeCardsRow from "./HomeCardsRow"
import './Home.css'
import HomeNav from './HomeNav';
import { useState, useEffect } from 'react';

const Home = (props) => {

    const [topArtists, setTopArtists] = useState(null)
    const [topAlbums, setTopAlbums] = useState(null)

    useEffect(() => {
        fetchTop("search?q=eminem", setTopAlbums)
        fetchTop("search?q=a", setTopArtists)
    }, [props.match.params.id])

    const fetchTop = async (endpoint, callback) => {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/${endpoint}`)
        if(response.ok){
            const data = await response.json()
            callback(data)
        }
    }

    return (
        <MainLayout class="home">
            <HomeNav />
            <HomeCardsRow heading="Eminem Albums" {...topAlbums?.slice(0,5)} />
            <HomeCardsRow heading="Random Artists" {...topArtists?.slice(0, 5)} />
        </MainLayout>
    )
}

export default Home