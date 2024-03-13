import Container from 'react-bootstrap/Container'; 

const ItemListContainer = ({greeting}) => {
    return (
    <Container className="mt-4">
        <h2>{greeting}</h2>
    </Container>
    )
}

export default ItemListContainer