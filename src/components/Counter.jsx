import "../components/Counter.css";

export function Counter({ count, handleInc, handleDec }) {
  return (
    <div className="counter">
      {count > 0 && (
        <button className="btn" onClick={handleDec}>
          -
        </button>
      )}
      <h1>Count : {count}</h1>
      {count < 10 && (
        <button className="btn" onClick={handleInc}>
          +
        </button>
      )}
    </div>
  );
}
