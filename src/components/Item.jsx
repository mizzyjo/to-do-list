import React, { useState } from 'react';

export default function Item({id, item, handleOnDel}) {
  const [line, setLine] = useState({ 
    textDecoration: 'none' 
  });
  
  const getCheckboxValue = (e) => {
    console.log(e.target.checked);
    if(e.target.checked){
      setLine({...line, textDecoration: 'line-through'});
      console.log(`line : ${line}`);
    }else {
      setLine({...line, textDecoration: 'none'});
      console.log(`line : ${line}`);
    }
  }

  return (
    // 체크박스의 checked가 true가 되면 
    // 변수 line도 true가 되면서 
    // style line-through를 적용
    
      <li>
        <input type='checkbox' onClick={getCheckboxValue}></input>
        <span style={line}>{item.text}</span>
        <button onClick={() => {
          // console.log(id);
          handleOnDel(id)
        }}>DEL</button>
      </li>
    
  );
}

