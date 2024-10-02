

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Container} from 'react-bootstrap';
function App() {
  return (
    <div>
      <main>
        <Container>
          <Row class='px-5 my-5'>
            <Col sm='12'>
            <h1 className='font-weight-light'> Welcome to the ChatApp</h1>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
