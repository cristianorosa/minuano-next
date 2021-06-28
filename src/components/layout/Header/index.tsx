import styles from './styles.module.scss';

export default function header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.navButton}>
                <img src="./icons/template/header/menu.svg" onClick={() => props.onClick()}/>
            </div>
            <div className={styles.logo}>
                Minuano
            </div>
        </header>
    );
}