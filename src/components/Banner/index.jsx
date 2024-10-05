import styles from "./Banner.module.css"

function Banner(props) {
    return (
        <div className={styles.banner} style={{backgroundImage: `url('/images/banner-${props.imagem}.png')`}}>
        </div>
    )
}

export default Banner