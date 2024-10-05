import {Link} from "react-router-dom"
import styles from "./Card.module.css"
import iconFavorite from "./favorite.png"
import iconunFavorite from "./unfavorite.png"

function Card(props) {
    return (
        <div className={styles.card}>
            <Link to={`/watch/${props.id}`}>
                <img src={props.linkimage} alt="Capa" className={styles.capa} />
            </Link>
            <figure>
                <img src={iconFavorite} alt="Ícone" className={styles.favorite} />
            </figure>
        </div>
    )
}

export default Card