import React, { useState } from 'react';
import Item from './Item';
import Form from './Form';
import Navbar from './Navbar';


export default function Container() {
  const [itemId, setItemId] = useState(3);
  const [filteredItems, setFilteredItems] = useState([]);
  const [items, setItems] = useState([
    {
      id: 0,
      text: '공부하기',
      completed: false,
    },
    {
      id: 1,
      text: '운동하기',
      completed: false,
    },
    {
      id: 2,
      text: '독서하기',
      completed: false,
    },
  ]);

  const handleOnAdd = (text) => {
    setItems([ ...items, {id: itemId, text:text}])
    setItemId(itemId + 1);
    console.log('you clicked ADD');
  }

  const handleOnDel = (id) => {
    console.log(`you clicked DEL: ${id}`);
    setItems(items.filter((item) => {
      if(id != item.id) {
        console.log(`id: ${id} itemid : ${item.id}`);
        return item;
      }
    }))
  }
  
  const handleOnCompleted = (id) => {
    // !!! 새로 아이템 만들 때 complete 키 추가해 줄 것 !!!!!

    // 3. Completed 버튼을 클릭하면
    // <Item>의 체크박스의 checked가 true가 된 것만 보여줌

    // <Item>에서의 체크박스가 눌려지면 completed의 값이 반대값으로 항상 변경
    // 예 : false 였다면 true로
    // 그러면 <Container> 의 completed가 true일 때만 필터링 되게 하기

    // console.log('handleoncompleted cliked');
    // console.log(items);
    // console.log(`전달받은id : ${id}`);

    setItems(items.filter((item, index) => {
      // <Item>으로 인자로 전달받은 id와 같은 id를 가지면
      // 그 item의 completed를 true로 변경
      if(id === item.id){
        setItems([ ...items, item.completed = true ]);
        console.log(`Index ${index} CHANGED ITEMS : ${item.completed}`);
        return item;
      } else {
        console.log(`Index ${index} CHANGED ITEMS : ${item.completed}`);
        return item;
      }
    }));
    // items.filter((item, index) => {
    //   // <Item>으로 인자로 전달받은 id와 같은 id를 가지면
    //   // 그 item의 completed를 true로 변경
    //   if(id === item.id){
    //     setItems([ ...items, item.completed = true ]);
    //     console.log(`Index ${index} CHANGED ITEMS : ${item.completed}`);
    //     return item;
    //   } else {
    //     console.log(`Index ${index} CHANGED ITEMS : ${item.completed}`);
    //     return item;
    //   }
    // })

    // setItems(items.filter((item) => {
    //   if(!item.completed) {
    //     return;
    //   }else{
    //     console.log(`tt " ${item}`);
    //     return item;
    //   }
    // }));
  }

  const onFilterAll = () => {

  }

  const onFilterActive = () => {

  }

  const onFilterCompleted = () => {
    items.filter((item) => {
      if(item.completed) {
        console.log(`Completeditem : ${item.text}`);
        return <Item handleOnCompleted={handleOnCompleted} id={item.id} item={item} handleOnDel={handleOnDel} />;
      } else {
        return;
      }
    });
  }

  return (
    <>
      <Navbar onFilterCompleted={onFilterCompleted} />
      { 
        items.map((item, index) => {
          // return <Item id={index} item={item} handleOnDel={handleOnDel}/>
          return <Item handleOnCompleted={handleOnCompleted} id={item.id} item={item} handleOnDel={handleOnDel}/>
        })
      }
      <Form handleOnAdd={handleOnAdd} />
    </>
  );
}

