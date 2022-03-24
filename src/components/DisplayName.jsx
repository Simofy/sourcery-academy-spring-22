import React from "react";

// // 1
// const [a1, a2] = array;
// // 2
// const array1 = [a1, a2];
// // 3
// const {a1, a2} = object;
// // 4
// const object1 = {a1, a2};
// // 5
// const object2 = {a1, a2, ...object1};
// // 6
// const array2 = [a1, a2, ...array1];
// // 7
// const {a1, a2, ...rest} = object;
// // 8
// const [a1, a2, ...rest] = array1;

class DisplayName extends React.Component {
  render() {
    return <span>{this.props.name}</span>;
  }
}

// Demonstration of JS capabilities
// BUT NOT WHAT YOU SHOULD DO!
Number.prototype.test = "hello";
Object.prototype.toString = function () {
  return "Neveikia taip";
};

function DisplayName1(props) {
  const { name: displayName } = props;

  const name = `${displayName} test`;

  return <span>{name}</span>;
}

export default DisplayName1;
