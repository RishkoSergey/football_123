import {useEffect, useRef} from 'react';
import cn from 'classnames';
import cpt1 from './assets/capitain/1.png';
import cpt2 from './assets/capitain/2.png';
import cpt3 from './assets/capitain/3.png';
import cpt4 from './assets/capitain/4.png';
import cpt5 from './assets/capitain/5.png';
import cpt6 from './assets/capitain/6.png';
import cpt7 from './assets/capitain/7.png';
import cpt8 from './assets/capitain/8.png';
import cpt9 from './assets/capitain/9.png';
import cpt10 from './assets/capitain/10.png';
import sniper1 from './assets/sniper/1.png';
import sniper2 from './assets/sniper/2.png';
import sniper3 from './assets/sniper/3.png';
import sniper4 from './assets/sniper/4.png';
import sniper5 from './assets/sniper/5.png';
import sniper6 from './assets/sniper/6.png';
import sniper7 from './assets/sniper/7.png';
import sniper8 from './assets/sniper/8.png';
import sniper9 from './assets/sniper/9.png';
import sniper10 from './assets/sniper/10.png';
import trainer1 from './assets/trainer/1.png';
import trainer2 from './assets/trainer/2.png';
import trainer3 from './assets/trainer/3.png';
import trainer4 from './assets/trainer/4.png';
import trainer5 from './assets/trainer/5.png';
import trainer6 from './assets/trainer/6.png';
import trainer7 from './assets/trainer/7.png';
import trainer8 from './assets/trainer/8.png';
import trainer9 from './assets/trainer/9.png';
import trainer10 from './assets/trainer/10.png';
import rifler11 from './assets/rifler1/1.png';
import rifler12 from './assets/rifler1/2.png';
import rifler13 from './assets/rifler1/3.png';
import rifler14 from './assets/rifler1/4.png';
import rifler15 from './assets/rifler1/5.png';
import rifler16 from './assets/rifler1/6.png';
import rifler17 from './assets/rifler1/7.png';
import rifler18 from './assets/rifler1/8.png';
import rifler19 from './assets/rifler1/9.png';
import rifler110 from './assets/rifler1/10.png';
import rifler21 from './assets/rifler2/1.png';
import rifler22 from './assets/rifler2/2.png';
import rifler23 from './assets/rifler2/3.png';
import rifler24 from './assets/rifler2/4.png';
import rifler25 from './assets/rifler2/5.png';
import rifler26 from './assets/rifler2/6.png';
import rifler27 from './assets/rifler2/7.png';
import rifler28 from './assets/rifler2/8.png';
import rifler29 from './assets/rifler2/9.png';
import rifler210 from './assets/rifler2/10.png';
import rifler31 from './assets/rifler3/1.png';
import rifler32 from './assets/rifler3/2.png';
import rifler33 from './assets/rifler3/3.png';
import rifler34 from './assets/rifler3/4.png';
import rifler35 from './assets/rifler3/5.png';
import rifler36 from './assets/rifler3/6.png';
import rifler37 from './assets/rifler3/7.png';
import rifler38 from './assets/rifler3/8.png';
import rifler39 from './assets/rifler3/9.png';
import rifler310 from './assets/rifler3/10.png';


const options = {
  1: [cpt1, cpt2, cpt3, cpt4, cpt5, cpt6, cpt7, cpt8, cpt9, cpt10],
  2: [sniper1, sniper2, sniper3, sniper4, sniper5, sniper6, sniper7, sniper8, sniper9, sniper10],
  3: [rifler11, rifler12, rifler13, rifler14, rifler15, rifler16, rifler17, rifler18, rifler19, rifler110],
  4: [rifler21, rifler22, rifler23, rifler24, rifler25, rifler26, rifler27, rifler28, rifler29, rifler210],
  5: [rifler31, rifler32, rifler33, rifler34, rifler35, rifler36, rifler37, rifler38, rifler39, rifler310],
  6: [trainer1, trainer2, trainer3, trainer4, trainer5, trainer6, trainer7, trainer8, trainer9, trainer10],
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
        return 'КАПИТАН';
      case 2:
        return 'СНАЦПЕР'
      case 3: 
        return 'РИФЛЕР-1'
      case 4: 
        return 'РИФЛЕР-2'
      case 5: 
        return 'РИФЛЕР-3'
      default: 
        return 'ТРЕНЕР'
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