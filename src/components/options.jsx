const Options = ({ list, onChoose }) => {
  return (
    <div className='options'>
      {list.slice(0, 2).map((item, idx) => (
        <div className='option' onClick={() => onChoose?.(idx)}>
          <div className='optionImg'>
            {item?.img && <img src={item.img} />}
          </div>
          <div className='optionText'>{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Options;
