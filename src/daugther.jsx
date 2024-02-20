import React from 'react';

class ListItems extends React.Component {
    render() {
      return (
        <ul>
          {this.props.fruits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
}

export default ListItems;
