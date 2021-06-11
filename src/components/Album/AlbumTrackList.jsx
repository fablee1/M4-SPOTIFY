import {Col} from 'react-bootstrap'

const AlbumTrackList = (props) => {

    return (
        <Col sm={12} md={7}>
            <ul class="audio-list">
                {
                    props.tracks?.data?.map(song => <TrackItem {...song} />)
                }
            </ul>
        </Col>
    )
}

export default AlbumTrackList


const TrackItem = (props) => {
    return (
        <li class="mb-4">
            <div class="song-list">
                <div class="song-title">
                    <i class="fas fa-music"></i>
                    {props.title}
                </div>
                <div class="timer">{props.duration}</div>
            </div>
            <div class="artist-name">{props.artist.name}</div>
        </li>
    )
}