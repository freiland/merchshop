import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      <div className="card">
        <h1>Items for sale</h1>
        <hr />
        {Object.values(props.itemList).map((item) => (
          <Item
            whenItemClicked={props.onItemSelection}
            name={item.name}
            description={item.description}
            quantity={item.quantity}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.object,
  onItemSelection: PropTypes.func,
};

export default ItemList;
