import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Category from "../../components/Category";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import videos from "../../json/db.json"
import Carousel from "../../components/Carousel";

function Home() {
  const [banner, setBanner] = useState("home")
  let categories = videos.map( (video) => video.category)
  categories = [...new Set(categories)]
  
  function filterCategory(id) {
    return videos.filter( video => video.category === categories[id] )
  }
    
  return (
    <>
      <Header/>
      <Banner imagem={banner}/>
      <Container>
        { categories.map( (categoria, index) => (
          <Category category={categoria} key={categoria}>
            <Carousel>
              { filterCategory(index).map( (video) => (
                <Card id={video.id} key={video.id} linkvideo={video.url} linkimage={video.cover} />
              ))}
            </Carousel>
          </Category>
        ))}
      </Container>
      <Footer/>
    </>
  );
}

export default Home;
