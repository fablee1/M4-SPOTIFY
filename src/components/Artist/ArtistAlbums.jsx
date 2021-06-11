import SongCard from '../Common/SongCard'
import { Container, Row } from 'react-bootstrap'

const ArtistAlbums = (props) => {
    return (
        <>
            <div class="pt-5 pb-3">
                <br/>
                <br/>
                <span class="heading mx-3">Albums</span>
            </div>

            <Container className="mb-3"> 
                <Row>
                    {
                        props.data?.map(album => <SongCard {...album} artistSection={true} artist={props.artist} id={album.id} />)
                    }
                </Row>
            </Container>
        </>
    )
}

export default ArtistAlbums