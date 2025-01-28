import { BrowserRouter } from "react-router-dom"
import {About,  Experience, 
  Hero, Navbar, Tech, Works, Contact } from './components'
  const App = () => {
    return (
      <BrowserRouter>
        <div className=" relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat
          bg-center">
            
            <Navbar/>
            <Hero/>
          </div>
          
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Contact />
        </div>
      </BrowserRouter>
  )}

    


export default App;
