function Checkbox({ done, checkHandler, label, index }) {
  return (
    <>
      <input
        type="checkbox"
        id={`checbox-${index}`}
        defaultChecked={done}
        onChange={checkHandler}
      />
      <label htmlFor={`checbox-${index}`} className={done ? "done" : ""}>
        {label}
      </label>
    </>
  );
}

export default Checkbox;
