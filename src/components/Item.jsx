import React, { useState } from 'react';

export default function Item({id, item, handleOnDel, handleOnCompleted}) {
  const [line, setLine] = useState({ textDecoration: 'none' });
  let checkboxValue;

  const getCheckboxValue = (e) => {
    checkboxValue = e.target.checked;
    console.log(`checkboxValue : ${checkboxValue}`);

    if(e.target.checked){
      setLine({...line, textDecoration: 'line-through'});
      console.log(`checkedItem's id ${id}`);
      handleOnCompleted(id);

    }else {
      setLine({...line, textDecoration: 'none'});
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

