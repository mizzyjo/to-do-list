import React from 'react';

export default function Navbar({onFilterCompleted}) {

  const handleOnCompleted = () => {
    console.log('you clicked completed');
  }

  return (
    // 2. Active 버튼을 클릭하면 

    // 3. Completed 버튼을 클릭하면
    // <Item>의 체크박스의 checked가 true가 된 것만 보여줌
    <>
      <button>Mode</button>
      <button>All</button>
      <button>Active</button>
      <button onClick={onFilterCompleted}>Completed</button>
    </>
  );
}

