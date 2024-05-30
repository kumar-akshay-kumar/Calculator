import styles from './App.module.css'
import Display from './componets/Display';
import But from './componets/But';

function App(){

  return <div className={styles.cal}>
    <Display></Display>
    <But></But>
    
  </div>
}
export default App;