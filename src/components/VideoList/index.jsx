import { useEffect, useState } from "react"
import styles from "./VideoList.module.css"
import Card from "../Card/index"

function VideoList(props) {
    const [resultado, setResultado] = useState(props.emptyHeading)
    const count = props.emptyHeading

    useEffect(() => {
        if (count > 0) {
            const noun = count > 1 ? "Vídeos" : "Vídeo"
            setResultado(`${count} ${noun}`)
        }
    }, [])

    return (
        <div className={styles.result}>
            <h2>{resultado}</h2>
            <div className={styles.result_videos}>
                { props.videos.map( (video) => (<Card id={video.id} key={video.id} linkvideo={video.url} linkimage={video.cover} />))}
            </div>
        </div>
    )
}

export default VideoList