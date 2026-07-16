import cn from "classnames"

const Options = ({ list, onChoose, smallImg, children }) => {
  return (
    <div className='options'>
      {list.slice(0, 2).map((item, idx) => (
        <div className='option' onClick={() => onChoose?.(idx)}>
          <div className={cn('optionImg', {smallImg})}>
            {item?.img && <img src={item.img} />}
          </div>
          <div className='optionText'>{item.name}</div>
        </div>
      ))}
      {children}
    </div>
  );
}

export default Options;
