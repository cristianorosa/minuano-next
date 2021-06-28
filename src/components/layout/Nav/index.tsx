import styles from './styles.module.scss';
import Menu from '../Menu';
import { useState, useEffect } from 'react';

export default function Nav(props) { 
    const {width} = useWindowSize();
    
    var navbar = '';

    if (width > 728) {
        navbar = `${props.isNavOpen ? styles.nav_close : styles.nav_open}`; 
    } else if  (width <= 728) {
        navbar = `${props.isNavOpen ? styles.nav_open : styles.nav_close}`; 
    }

    return (
        <nav className={navbar}>
          <Menu isNavOpen={props.isNavOpen}>
          
          </Menu>
        </nav>
    );
}  

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }