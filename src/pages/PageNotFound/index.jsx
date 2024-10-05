import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import NotFound from "./erro404.png"
import styles from "./PageNotFound.module.css"

function PageNotFound() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.pagenotfound}>
                    <div>
                        <h1>Ops...</h1>
                        <h2>Página não localizada!</h2>
                    </div>
                    <img src={NotFound} alt="Logo página não encontrada" />
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default PageNotFound