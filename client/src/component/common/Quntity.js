
const Qunatity = ({count , setCount}) => {

    const increseQuantity = () => {
        setCount(count + 1);
      };
      
      const decreseQuantity = () => {
        if (count > 1) {
          setCount(count - 1);
        } else {
          return false;
        }
      };

  return (
    <>
    <span>
      <button className="quntity_btn" onClick={decreseQuantity}>
        -
      </button>
      <input type="text" value={count} />
      <button className="quntity_btn" onClick={increseQuantity}>
        +
      </button>
    </span>
    </>
  );
};

export default Qunatity;
