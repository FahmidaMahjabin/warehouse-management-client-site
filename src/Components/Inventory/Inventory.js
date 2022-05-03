
import { Button, Card } from 'react-bootstrap';

const Inventory = (params) => {
    const { name, sold, quantity, picture, supplier, balance, about } = params.item;

    return (
        <div className='col-12 col-lg-4 g-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h5>Price:{balance}</h5>
                        <h5>quantity:{quantity}</h5>
                        <h5>Supplier:{supplier}</h5>
                        <p>Description:{about}</p>
                        <h5>Availability:{sold}</h5>
                    </Card.Text>
                    <Button variant="primary">Manage Item</Button>
                    <Button variant="primary">Add Item</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Inventory;