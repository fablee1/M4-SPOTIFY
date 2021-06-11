import { Col } from 'react-bootstrap'

const AlbumCard = (props) => {
    return (
        <Col sm={12} md={5} className="image">
            <div class="image-div">
                <img src={props.cover_xl} alt="Album cover" />
                <div class="album_name">{props.title}</div>
                <div class="artist-name">{props.artist.name}</div>
                <br />
                <button type="button" class="btn btn-success btn-md p-l-4">PLAY</button>
                <div class="img-lst-cnt">{props.release_date.split('-')[0]} . {props.nb_tracks} SONGS</div>
                <div class="font-aw"><i class="far fa-heart"></i><i class="fas fa-ellipsis-h"></i></div>
            </div>
        </Col>
    )
}

export default AlbumCard