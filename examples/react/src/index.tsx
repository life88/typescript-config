import { useState } from 'react';

export default function Index() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(prevState => prevState + 1);
  };

  return <div onClick={onClick}>hello world! {count}</div>;
}
