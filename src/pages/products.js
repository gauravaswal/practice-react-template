import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Toast from '../component/toast'
const data = [
    {
        name: "Product1",
        image: "p1.jpg",
        description: "it's basically for testing purpose",
        price: 50,
        rating: 4.5,

    },
    {
        name: "Product2",
        image: "p2.jpg",
        description: "it's basically for testing purpose",
        price: 550,
        rating: 4.5,

    },
    {
        name: "Product3",
        image: "p3.jpg",
        description: "it's basically for testing purpose",
        price: 510,
        rating: 4.5,

    },
    {
        name: "Product4",
        image: "p1.jpg",
        description: "it's basically for testing purpose",
        price: 1550,
        rating: 4.5,

    },
    {
        name: "Product5",
        image: "p1.jpg",
        description: "it's basically for testing purpose",
        price: 6510,
        rating: 4.5,

    }



]
function Product() {
    return (
        <>
            <Container>
            <h4 style={{paddingTop:"45px"}}>New Product</h4>

                <Row xs={1} md={2} className="g-4">
                    {Array.from(data).map((item, idx) => {
                     return (<Col>
                            <Card>
                                <Card.Img variant="top" src={item?.image} style={{width:"100%", height:"350px"}} />
                                <Card.Body>
                                    <Card.Title>{item?.name}</Card.Title>
                                    <Card.Text>
                                        {item?.description}
                                    </Card.Text>
                                    <Button variant="primary">Add To Cart </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                     )
})}
                </Row>
            </Container>
        </>
    );
}

export default Product;
