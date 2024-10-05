import styles from "./Category.module.css"

function Category(props) {
    return (
        <section className={styles.category}>
            <h2>{props.category}</h2>
            <div className={styles.cards}>
                {props.children}
            </div>
        </section>
    )
}

export default Category