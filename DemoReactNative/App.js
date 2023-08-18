import React, { useReducer, useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

function reducer(state, action) {
  switch (action.type) {
    case "first":
      return { ...state, first: action.value };
    case "last":
      return { ...state, last: action.value };
  }
}

export default function App() {
  const [count, setCount] = useState(0);
  const countEvery3 = Math.floor(count / 3);
  useEffect(() => {
    console.log(countEvery3);
  }, [countEvery3]);
  return (
    <Button
      title={`Increment ${count}`}
      onPress={() => {
        setCount(count + 1);
      }}
    ></Button>
  );
}
