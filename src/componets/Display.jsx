import styles from './Display.module.css'
const Display = ({displayValue}) => {
    return <input className={styles.cal1} type="text" placeholder='AKSHAY KUMAR' value={displayValue} readOnly/>
}
export default Display;