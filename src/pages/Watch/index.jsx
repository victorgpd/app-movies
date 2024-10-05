import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import PageNotFound from "../PageNotFound"
import styles from "./Watch.module.css"
import { useParams } from "react-router-dom"
import db from "../../json/db.json"

function Watch() {
    const params = useParams()
    const videos = db.find((video) => {return video.id === params.id})
    if (!videos) { return <PageNotFound />}

    return (
        <>
            <Header />
            <Container className={styles.container}>
                <section className={styles.watch}>
                    <h1>Assistir</h1>
                    {/*
                        Para descobrir a proporção: proporção = largura / altura
                        Para aumentar a largura: nova-altura = nova-largura / proporção
                        Para aumentar a altura: nova-largura = nova-altura * proporção
                    */}
                    <iframe width="1239" height="700" src={`https://www.youtube.com/embed/${videos.id}?si=uDOAz2m73bRFF86v`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Watch