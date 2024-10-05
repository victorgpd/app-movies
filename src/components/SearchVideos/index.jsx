import { useState } from "react";
import styles from "./SearchVideos.module.css"
import VideoList from "../VideoList";

function filterVideos(videos, searchText) {
    return [videos.filter((video) => video.title.toLowerCase().includes(searchText.toLowerCase())), videos.length]
}

function SearchVideos(props) {
    // Função para gerar botôes de A-Z
    const renderLetterButtons = () => {
        const letters = [];
        for (let i = 65; i <= 90; i++) { letters.push(<button key={i}>{String.fromCharCode(i)}</button>) }
        return letters;
    }
    
    // Função para gerar botões de 0-9
    const renderNumberButtons = () => {
        const numbers = [];
        for (let i = 0; i <= 9; i++) { numbers.push(<button key={i}>{i}</button>) }
        return numbers;
    }

    const [searchText, setSearchText] = useState("")
    const [foundVideos, count] = filterVideos(props.videos, searchText)

    return (
        <>
            <div className={styles.busca}>
                <h1>Pesquisar</h1>
                <input type="search" name="isearch" id="isearch" placeholder="Nome do vídeo" value={searchText} onChange={event => setSearchText(event.target.value)} />
                <div className={styles.keyboard}>
                    {renderLetterButtons()}
                    {renderNumberButtons()}
                </div>
            </div>

            <VideoList videos={foundVideos} emptyHeading={count}/>
        </>
    )
}

export default SearchVideos