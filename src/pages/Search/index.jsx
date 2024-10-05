import db from "../../json/db.json"
import styles from "./Search.module.css"
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import SearchVideos from "../../components/SearchVideos"

function Search() {


    return (
        <>
            <Header />
            <Container>
                <section className={styles.search}>
                    <SearchVideos videos={db}/>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Search