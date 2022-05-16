import { Component } from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from './App';
import DondeEstamos from "./pages/dondeEstamos/dondeEstamos";
import Home from "./pages/home/home";
import Productos from "./pages/productos/productos";
import Navigation from './components/shared/navbar/navigation';

class AppRoutes extends Component {
    render() {
        return(
            <>
            <Navigation></Navigation>
            <Container>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/productos" element={<Productos/>} />
                    <Route path="/about" element={<DondeEstamos/>} />
                </Routes>
            </Container>
            </>
        )
    }
}

export default AppRoutes;