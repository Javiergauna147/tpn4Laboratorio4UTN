import './productCard.css';
import { Producto } from './models/productType';
import { Row, Col } from 'react-bootstrap';


function ProductCard(args: Producto) {
    return (
        <>
        <Row className='mt-5'>
            <Col xs lg="3">
                <img src={'/img/' + args.imagen}/>
            </Col>
            <Col>
                <Row>
                    <Col>
                        <h3>{args.instrumento}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span>{args.precio}</span>
                    </Col>
                </Row>
                <Row>
                    <Col>{
                       (args.costoEnvio === "G")? <span>Envio Gratis a todo el pais</span> : <span>Costo de envio al interior de Argentina: $ {args.costoEnvio}</span>
                    }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span>{args.cantidadVendida} Vendidos</span>
                    </Col>
                </Row>
            </Col>
        </Row>
        <hr />
        </>
    );
}

export default ProductCard;