const myObject = {
  name: "Devin",
  age: 29,
};

const print = ({ name, age }) => {
    console.log('name', name);
    console.log('age', age);
};

print(myObject);
