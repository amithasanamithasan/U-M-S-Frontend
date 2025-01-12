import { decrement, increment } from "./app/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./app/hook";
import { Button } from "./components/ui/button";

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
        <Button aria-label="Increment value" onClick={() => handelIncrement(5)}>
          Increment by 5
        </Button>
        <Button aria-label="Increment value" onClick={() => handelIncrement(1)}>
          Increment
        </Button>
        <span>{count}</span>
        <Button aria-label="Decrement value" onClick={handelDecrement}>
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default App;
