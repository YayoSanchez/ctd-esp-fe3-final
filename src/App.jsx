import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from './Pages/Detail';
import Home from './Pages/Home';
import Favs from './Pages/Favs';
import { ThemeProvider } from './Context/ThemeContext';
import Form from './Components/Form'

function App() {
    return (
        <ThemeProvider>
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/dentist"} element={<Detail />} />
                        <Route path="/dentist/:id" element={<Detail />} />
                        <Route path={"/favorites"} element={<Favs />} />
                        <Route path={"/contacto"} element = {<Form/>}/>
                        <Route path={"*"} element={<h1>404 - Page NOT FOUND</h1>} />
                    </Routes>
                </Router>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;