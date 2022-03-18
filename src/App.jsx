import Navbar from './components/Navbar';
import Hero from './components/Hero';
  
import Card from './components/Card';
import Footer from './components/Footer';
import appdata from './appdata.js'
import React from "react";

function App() {
  
const reviewcards = appdata.map(item => {
  return(
    <Card key={item.id}
      image={item.image}
      name={item.name}
      review={item.review}/>
  )
})
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <section className="appcards">
        <div className="inside--appcards">
        {reviewcards}
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default App;