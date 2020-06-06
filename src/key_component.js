import React from 'react';
import './calc.css';


function Key({name}){ 
    const cls =  `key${'=+/*-÷'.includes(name) ? ' operator ' : ' '}`


  return(
    <div className={cls}>
        {name}
    </div>
  )
};
export default Key;