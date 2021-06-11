import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SongCard = (props) => {
    return (
        <Col sm={6} md={4} lg={3} xl={2}>
            <Link to={`/album/${props?.id}`}>
                <div class="card">
                    <img class="card-img-top" src={props.cover} alt="Card" />
                    <div class="card-play-btn">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            </Link>
            <p class="card-text">{props.title}</p>
            {
                props.artistSection && <p class="text-center card-artist">{props.artist}</p>
            }
        </Col>
    )
}

export default SongCard