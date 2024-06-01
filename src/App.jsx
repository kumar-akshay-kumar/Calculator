import styles from './App.module.css'
import Display from './componets/Display';
import But from './componets/But';
import { useState } from 'react';

function App(){
  const [calVal, setcalVal]=useState("");
  const onButtonClick= (buttonText) => {
    if (buttonText==="C"){
      setcalVal("");
    }
    else if (buttonText==="="){
      const result = eval(calVal);
      setcalVal(result);
    }
    else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };
    

  return <div className={styles.cal}>
    <Display displayValue={calVal}></Display>
    <But onButtonClick={onButtonClick}/>
    
  </div>
}
export default App;