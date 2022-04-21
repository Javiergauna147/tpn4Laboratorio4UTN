import './home.css';
import { Col, Row } from 'react-bootstrap';

function Home() {
  return (
    <>
      <div className='mt-4'>
          <Row>
            <Col className='d-flex justify-content-center'>
            <span className='fs-3'>Musical hendrix</span>
            </Col>
          </Row>
          <Row>
            <Col>
            <hr />
              <p> Es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el 
                conocimiento y al capacidad como para informarte acerca de las mejores elecciones para tu compra musical.
              </p>
            <hr />
            </Col>
          </Row>
          
      </div>
    </>
  );
}

export default Home;
