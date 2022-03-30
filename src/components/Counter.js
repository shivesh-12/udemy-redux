import React, { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increseandler = () => {
    // react will automatically create action object which is dispatch {type: some unique identifier, payload:""}
    // payload field name is default redux toolkit uses.
    dispatch(counterActions.increase(10));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;
/*
class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

//automatically take state as parameter from redux
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

//automatically take dispatch as parameter from redux
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/
