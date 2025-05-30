import {useEffect, useRef, useState} from 'react';
import cn from 'classnames';

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const en = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"]
]

const ru = [
  ["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ"],
  ["Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э"],
  ["Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", "Ё"]
]

const bottomLeft = ['-', '_', '@'];
const bottomRight = ['!', '/', '#'];

const Keyboard = ({ open, initValue, resetValue, onChange, onClose }) => {
  const wrapperRef = useRef(null);
  const [lang, setLang] = useState('en');
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    setValue('')
  }, [resetValue])

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef.current && !wrapperRef.current.contains(event.target)
      ) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    onChange(value);
  }, [value])

  const currentLetters = lang === 'ru' ? ru : en;

  return (
    <div ref={wrapperRef} className={cn('keyboard', {open})}>
      <div className='keyboardLeft'>
        <div className='letterRow'>
          {numbers.map(letter => <button className='letter' onClick={() => setValue(prev => prev + letter)}>{letter}</button>)}
        </div>
        {currentLetters.map(row => (
          <div className='letterRow'>
            {row.map(letter => <button className='letter' onClick={() => setValue(prev => prev + letter)}>{letter}</button>)}
          </div>
        ))}
        <div className='letterRow'>
          {bottomLeft.map(letter => <button className='letter' onClick={() => setValue(prev => prev + letter)}>{letter}</button>)}
          <button className='letter space text' onClick={() => setValue(prev => prev + ' ')}>space</button>
          {bottomRight.map(letter => <button className='letter' onClick={() => setValue(prev => prev + letter)}>{letter}</button>)}
        </div>
      </div>
      <div className='keyboardRight'>
        <button className='letter' onClick={() => setValue(prev => prev && prev.slice(0, -1))}>{`⌫`}</button>
        <button className='letter text' onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}>{lang}</button>
        <button className='letter text' onClick={onClose}>Enter</button>
      </div>
    </div>
  )
};

export default Keyboard;