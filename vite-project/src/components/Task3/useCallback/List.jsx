import React, { useState } from 'react'
import ListItem from './ListItem';

const List = () => {
    const [selectedItem, setSelectedItem] = useState(null);
  
    const handleClick = (item) => {
      setSelectedItem(item);
    };
  
    const items = ["Apple", "Banana", "Cherry"];
  
    return (
      <div>
        <h1>Selected: {selectedItem}</h1>
        <ul>
          {items.map((item) => (
            <ListItem key={item} item={item} onClick={handleClick} />
          ))}
        </ul>
      </div>
    );
  };
  
  export default List;