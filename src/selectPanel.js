import {useEffect, useRef} from 'react';
import cn from 'classnames';
import gk1 from './assets/gk/1.png';
import gk2 from './assets/gk/2.png';
import gk3 from './assets/gk/3.png';
import gk4 from './assets/gk/4.png';
import gk5 from './assets/gk/5.png';
import gk6 from './assets/gk/6.png';
import gk7 from './assets/gk/7.png';
import gk8 from './assets/gk/8.png';
import lcb1 from './assets/lcb/1.png';
import lcb2 from './assets/lcb/2.png';
import lcb3 from './assets/lcb/3.png';
import lcb4 from './assets/lcb/4.png';
import lcb5 from './assets/lcb/5.png';
import lcb6 from './assets/lcb/6.png';
import lcb7 from './assets/lcb/7.png';
import lcb8 from './assets/lcb/8.png';
import rcb1 from './assets/rcb/1.png';
import rcb2 from './assets/rcb/2.png';
import rcb3 from './assets/rcb/3.png';
import rcb4 from './assets/rcb/4.png';
import rcb5 from './assets/rcb/5.png';
import rcb6 from './assets/rcb/6.png';
import rcb7 from './assets/rcb/7.png';
import rcb8 from './assets/rcb/8.png';
import lb1 from './assets/lb/1.png';
import lb2 from './assets/lb/2.png';
import lb3 from './assets/lb/3.png';
import lb4 from './assets/lb/4.png';
import lb5 from './assets/lb/5.png';
import lb6 from './assets/lb/6.png';
import lb7 from './assets/lb/7.png';
import lb8 from './assets/lb/8.png';
import rb1 from './assets/rb/1.png';
import rb2 from './assets/rb/2.png';
import rb3 from './assets/rb/3.png';
import rb4 from './assets/rb/4.png';
import rb5 from './assets/rb/5.png';
import rb6 from './assets/rb/6.png';
import rb7 from './assets/rb/7.png';
import rb8 from './assets/rb/8.png';
import cm1 from './assets/cm/1.png';
import cm2 from './assets/cm/2.png';
import cm3 from './assets/cm/3.png';
import cm4 from './assets/cm/4.png';
import cm5 from './assets/cm/5.png';
import cm6 from './assets/cm/6.png';
import cm7 from './assets/cm/7.png';
import cm8 from './assets/cm/8.png';
import lcam1 from './assets/lcam/1.png';
import lcam2 from './assets/lcam/2.png';
import lcam3 from './assets/lcam/3.png';
import lcam4 from './assets/lcam/4.png';
import lcam5 from './assets/lcam/5.png';
import lcam6 from './assets/lcam/6.png';
import lcam7 from './assets/lcam/7.png';
import lcam8 from './assets/lcam/8.png';
import rcam1 from './assets/rcam/1.png';
import rcam2 from './assets/rcam/2.png';
import rcam3 from './assets/rcam/3.png';
import rcam4 from './assets/rcam/4.png';
import rcam5 from './assets/rcam/5.png';
import rcam6 from './assets/rcam/6.png';
import rcam7 from './assets/rcam/7.png';
import rcam8 from './assets/rcam/8.png';
import lfa1 from './assets/lfa/1.png';
import lfa2 from './assets/lfa/2.png';
import lfa3 from './assets/lfa/3.png';
import lfa4 from './assets/lfa/4.png';
import lfa5 from './assets/lfa/5.png';
import lfa6 from './assets/lfa/6.png';
import lfa7 from './assets/lfa/7.png';
import lfa8 from './assets/lfa/8.png';
import rfa1 from './assets/rfa/1.png';
import rfa2 from './assets/rfa/2.png';
import rfa3 from './assets/rfa/3.png';
import rfa4 from './assets/rfa/4.png';
import rfa5 from './assets/rfa/5.png';
import rfa6 from './assets/rfa/6.png';
import rfa7 from './assets/rfa/7.png';
import rfa8 from './assets/rfa/8.png';
import frw1 from './assets/frw/1.png';
import frw2 from './assets/frw/2.png';
import frw3 from './assets/frw/3.png';
import frw4 from './assets/frw/4.png';
import frw5 from './assets/frw/5.png';
import frw6 from './assets/frw/6.png';
import frw7 from './assets/frw/7.png';
import frw8 from './assets/frw/8.png';

const options = {
  1: [gk1, gk2, gk3, gk4, gk5, gk6, gk7, gk8],
  2: [lcb1, lcb2, lcb3, lcb4, lcb5, lcb6, lcb7, lcb8],
  3: [rcb1, rcb2, rcb3, rcb4, rcb5, rcb6, rcb7, rcb8],
  4: [lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8],
  5: [rb1, rb2, rb3, rb4, rb5, rb6, rb7, rb8],
  6: [cm1, cm2, cm3, cm4, cm5, cm6, cm7, cm8],
  7: [lcam1, lcam2, lcam3, lcam4, lcam5, lcam6, lcam7, lcam8],
  8: [rcam1, rcam2, rcam3, rcam4, rcam5, rcam6, rcam7, rcam8],
  9: [lfa1, lfa2, lfa3, lfa4, lfa5, lfa6, lfa7, lfa8],
  10: [rfa1, rfa2, rfa3, rfa4, rfa5, rfa6, rfa7, rfa8],
  11: [frw1, frw2, frw3, frw4, frw5, frw6, frw7, frw8],
}

const SelectPanel = ({ positionId, onChoose, onClose }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    Object.values(options).forEach(el => {
      el.forEach(item => {
        const img = new Image();
        img.src = item;
        document.body.appendChild(img)
      })
    })
  }, [])

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

  const selectedPosition = () => {
    switch (positionId) {
      case 1:
        return 'ВРТ';
      case 2:
      case 3: 
        return 'ЦЗ'
      case 4: 
        return 'ЛЗ'
      case 5: 
        return 'ПЗ'
      case 6: 
        return 'ЦП'
      case 7: 
      case 8: 
        return 'ЦАП'
      case 9: 
        return 'ЛAF'
      case 10: 
        return 'ПФА'
      default: 
        return 'ФРВ'
    }
  }

  return (
    <div ref={wrapperRef} className={cn('selectPanel', {open: !!positionId})}>
      <div className='selectPanelTitle'>ВЫБЕРИТЕ ИГРОКА</div>
      <div className='selectPanelPosition'>{selectedPosition()}</div>
      <div className='selectPanelRow'>
        {options?.[positionId] && options[positionId].map((item, idx) => (
          <img
            key={idx}
            src={item}
            className='selectPlayer'
            onClick={() => onChoose(item)}
          />
        ))}
      </div>
    </div>
  )
};

export default SelectPanel;