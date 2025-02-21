import React from 'react'

const ListItem = ({ item, onClick }) => {
    console.log(`Rendering ${item}`);
    return <li onClick={() => onClick(item)}>{item}</li>;
  };

export default React.memo(ListItem)
