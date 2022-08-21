import Table from 'react-bootstrap/Table'


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
function AddToCart() {
    return (
        <>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Deails</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        
      </tbody>
    </Table>
        </>
    );
}

export default AddToCart;
