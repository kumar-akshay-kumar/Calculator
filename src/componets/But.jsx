import styles from './But.module.css'
import React from 'react'

const But = () => {
const Button=['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','.','%','=']

  return (
    <div className={styles.display}>
        {Button.map(Button=>{
            return <button className={styles.but}>{Button}</button>}
            )}  
      
      
    </div>
  )
}

export default But;
