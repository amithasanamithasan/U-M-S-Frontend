import { decrement, increment } from "./app/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./app/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handelIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handelDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => handelIncrement(5)}>
          Increment by 5
        </button>
        <button aria-label="Increment value" onClick={() => handelIncrement(1)}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={handelDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
