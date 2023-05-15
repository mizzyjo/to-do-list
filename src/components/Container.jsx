import React, { useState } from 'react';

export default function Container() {
  const [itemId, setItemId] = useState(3);
  const [items, setItems] = useState([
    {
      id: 0,
      text: '공부하기',
      completed: false,
      listStyle : "textDecoration: 'none'"
    },
    {
      id: 1,
      text: '운동하기',
      completed: false,
      listStyle : "textDecoration: 'none'"
    },
    {
      id: 2,
      text: '독서하기',
      completed: false,
      listStyle : "textDecoration: 'none'"
    },
  ]);

  const setStyle = () => {
    // console.log();
    items.filter((item) => {
      setItems( [...items, item.listStyle = "textDecoration: 'line'"] );

      console.log(`textdecoration : ${item.listStyle.textDecoration}`); // none
    });
    console.log(items);
  }

  return (
    <>
      <nav>
        <button onClick={setStyle}>Mode</button>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </nav>

      <ul>
        {
          items.map((item) => {
            return (
              <li>
                <input type='checkbox'></input>
                <span>{item.text} {item.listStyle}</span>
                <button>DEL</button>
              </li>
            )
          })
        }
        
      </ul>
    </>
  );
}

