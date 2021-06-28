import styles from './styles.module.scss';
import { useState } from "react";

export default function Menu(props) {    
  const [isSubmenuItemOpen, setSubmenuItemOpen] = useState(true);

  return (
    <div className={styles.menu}>
        <ul>
          <li>
            <div className={props.isNavOpen ? styles.menuItemClose : styles.menuItemOpen}>
              <img className={styles.menuItemImg} src="./icons/template/menu/home.svg"/>
              <span className={styles.menuText}>Home</span>             
            </div>
          </li>
          
          <li>
            <div className={props.isNavOpen ? styles.menuItemClose : styles.menuItemOpen}>
              <img className={styles.menuItemImg} src="./icons/template/menu/redeem.svg"/>
              <span className={styles.menuText}>Produtos</span>
              <img className={styles.menuItemExpandIcon} src="./icons/template/menu/expand.svg" onClick={() => isSubmenuItemOpen ? setSubmenuItemOpen(false) : setSubmenuItemOpen(true)}/>
            </div>
            <ul className={isSubmenuItemOpen ? styles.submenuItemClose : styles.submenuItemOpen}>
              <li className={styles.submenuItem}>Setor</li>
              <li className={styles.submenuItem}>Marca</li>
            </ul>
          </li>  

          <li>
            <div className={props.isNavOpen ? styles.menuItemClose : styles.menuItemOpen}>
              <img className={styles.menuItemImg} src="./icons/template/menu/people.svg"/>
              <span className={styles.menuText}>Pessoas</span>             
            </div>
          </li>
        </ul>
    </div>
  );
}  


{/* <div className={styles.menu}>
  <ul className={props.isNavOpen ? styles.navClose : styles.navOpen}>
    <li>
      <img src="./icons/template/menu/home.svg"/>
      Home              
    </li>
    <li>
      <img src="./icons/template/menu/redeem.svg"/>
      Produtos
      <img className={styles.expandIcon} src="./icons/template/menu/expand.svg"/>
      <div>
      <ul className={props.isNavOpen ? styles.navClose : styles.navOpen}>
        <li>Setor</li>
        <li>Marcas</li>
      </ul>
      </div>
    </li>
    <li>
      <img src="./icons/template/menu/people.svg"/>
      Pessoas
    </li>
  </ul>
</div> */}