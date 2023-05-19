import React from 'react';

export default function Header({filters, filter, onFilterChange}) {

  return (
    <header>
      {
        filters.map((filter, index) => (
          <button id={index} onClick={() => onFilterChange(filter)}>{filter}</button>
        ))
      }
    </header>
  )










  











  
  // return (
  //   <header>
  //     <ul>
  //       {
  //         filters.map((value, index) => (
  //           <li key={index}>
  //             <button onClick={() => onFilterChange(value)}>{value}</button>
  //           </li>
  //         ))
  //       }
  //     </ul>
  //   </header>
  // );
}

