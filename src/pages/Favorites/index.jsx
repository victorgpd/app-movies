import styles from "./Favorites.module.css"
import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"

function Favorites() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>Meus Favoritos</h2>
                    <div className={styles.videos_favorites}>

                    </div>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Favorites