
import Col from 'react-bootstrap/Col';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Exercise6 = () => {
    document.title = 'num6';

    const[fname, setfName] = useState('');
    const[lname, setlName] = useState('');

    const submitValue = ()=> {
        const frmdetails ={
            'first Name' : fname,
            'last Name': lname       
        }
    alert("Good Day! " +frmdetails['First Name']+ "" +frmdetails['Last Name']);
    }

 return (
    <Container>
       <Row className= 'justify-content-center mt-5'>
        <h1>Hirap na Hirap ako Dito HUHU</h1>
        <Col md={4} className= "mt-3 p-3">
            <Form>
                <Form.Group className="mb-3"
                    controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="First Name" onChange={e => setfName(e.target.value)} />     
                </Form.Group>

                <Form.Group className="mb-3"
                    controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Last Name" onChange={e => setlName(e.target.value)} />     
                </Form.Group>
                <Button variant= "success" type= "submit"  onClick={submitValue}> PINDOTIN MOKO
                </Button>
            </Form>
      </Col>
    </Row>
    </Container>
 )
                };
  export default Exercise6;