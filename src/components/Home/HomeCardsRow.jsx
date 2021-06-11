import { Container, Row } from 'react-bootstrap'
import SongCard from '../Common/SongCard';

const HomeCardsRow = (props) => {
    return (
        <Container className="cards_cont">
            <div class="heading">{props?.heading}</div>
            <Container>
                <Row>
                    {
                        props.cards?.map(card => (
                            <SongCard cover={card.cover} title={card.title} />
                        ))
                    }
                </Row>
            </Container>
        </Container>
    )
}

export default HomeCardsRow