import MainLayout from "../MainLayout"
import HomeCardsRow from "./HomeCardsRow"
import './Home.css'
import HomeNav from './HomeNav';
import { useState, useEffect } from 'react';

const Home = (props) => {

    // const [topArtists, setTopArtists] = useState(null)
    // const [topAlbums, setTopAlbums] = useState(null)

    // useEffect(() => {
    //     fetchTop("search?q=eminem", setTopAlbums)
    //     fetchTop("search?q=a", setTopArtists)
    // }, [props.match.params.id])

    // const fetchTop = async (endpoint, callback) => {
    //     const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/${endpoint}`)
    //     if(response.ok){
    //         const data = await response.json()
    //         callback(data)
    //     }
    // }

    return (
        <MainLayout class="home">
            <HomeNav />
            <HomeCardsRow heading="Eminem Albums" cards={[{id: "194219042", type: "album", cover: "https://cdns-images.dzcdn.net/images/cover/55d424a53904d145b17869ba133843d7/1000x1000-000000-80-0-0.jpg", title: "Music To Be Murdered By - Side B (Deluxe Edition)"},
                    {id: "127270232", type: "album", cover: "https://cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/1000x1000-000000-80-0-0.jpg", title: "Music To Be Murdered By"},
                    {id: "72000342", type: "album", cover: "https://cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/1000x1000-000000-80-0-0.jpg", title: "Kamikaze"},
                    {id: "53227232", type: "album", cover: "https://cdns-images.dzcdn.net/images/cover/432ed502692292710f09a88837077f5a/1000x1000-000000-80-0-0.jpg", title: "Revival"},
                    {id: "154556992", type: "album", cover: "https://cdns-images.dzcdn.net/images/cover/7c2641a8f3d5d453581549d55ef501a7/1000x1000-000000-80-0-0.jpg", title: "Recovery (Deluxe Edition)"},
                    {id: "119606", type: "album", cover: "https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg", title: "Curtain Call: The Hits"}]}/>
            <HomeCardsRow heading="Random Artists" cards={[{id: "11152580", type: "artist", cover: "https://cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/1000x1000-000000-80-0-0.jpg", title: "Olivia Rodrigo"},
                                        {id: "13", type: "artist", cover: "https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/1000x1000-000000-80-0-0.jpg", title: "Eminem"},
                                        {id: "4050205", type: "artist", cover: "https://cdns-images.dzcdn.net/images/artist/c3cbc4309cf09aec8914784270f194e4/1000x1000-000000-80-0-0.jpg", title: "The Weeknd"},
                                        {id: "384236", type: "artist", cover: "https://cdns-images.dzcdn.net/images/artist/f4daf253b92a1a9646844c5162e2a968/1000x1000-000000-80-0-0.jpg", title: "Ed Sheeran"}]} />
        </MainLayout>
    )
}

export default Home