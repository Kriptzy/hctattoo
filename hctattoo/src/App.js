import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './pages/navbar';
import Footer from './pages/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import News from './pages/news';
import NotFound from './pages/notfound';

function App() {
    return (
      <div>
        <Router>
          <div className="app">
          <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path='/sobre' element={<About />} />
              <Route path='/galeria' element={<Gallery />} />
              <Route path='/noticias' element={<News />} />
              <Route path='/contactos' element={<Contact />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          <Footer />
          </div>
        </Router>
        
      </div>
    )
}

export default App;