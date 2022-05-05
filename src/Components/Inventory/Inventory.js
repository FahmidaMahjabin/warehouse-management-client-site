
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = ({item}) => {
    const navigate = useNavigate();
    console.log("item:", item)
    const {_id, name, sold, quantity, picture, supplier, balance, about } = item;
    console.log("name:", name)
    return (
        <div className='col-12 col-lg-4 g-3 d-flex align-items-stretch'>
            <Card >
                <Card.Img variant="top" src={item.picture} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        <h5>Price:{item.balance}</h5>
                        <h5>quantity:{item.quantity}</h5>
                        <h5>Supplier:{item.supplier}</h5>
                        <p>Description:{item.about}</p>
                        
                    </Card.Text>
                    <Button className = "d-block w-75" onClick={() => navigate(`/inventory/${_id}`)} variant="success">Manage Item</Button>
                    
                </Card.Body>
            </Card>
        </div>

    );
};

export default Inventory;