import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, sign_in } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      Counter {counter}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(sign_in())}>SIGN IN</button>
      {isLogged && <h2>You are logged in</h2>}
    </div>
  );
}

export default App;
