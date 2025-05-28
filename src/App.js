import { useState } from 'react';
import emptyCard from './assets/emptyCard.png';
import emptyCardActive from './assets/emptyCardActive.png';
import cn from 'classnames';
import SelectPanel from './selectPanel';
import logo from './assets/logo.png';
import resetImg from './assets/reset.png';

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [name, setName] = useState('');
  const [footballers, setFootballers] = useState([
    {
      id: 1,
      title: 'ВРТ',
      image: null,
    },
    {
      id: 2,
      title: 'ЦЗ',
      image: null,
    },
    {
      id: 3,
      title: 'ЦЗ',
      image: null,
    },
    {
      id: 4,
      title: 'ЛЗ',
      image: null,
    },
    {
      id: 5,
      title: 'ПЗ',
      image: null,
    },
    {
      id: 6,
      title: 'ЦП',
      image: null,
    },
    {
      id: 7,
      title: 'ЦАП',
      image: null,
    },
    {
      id: 8,
      title: 'ЦАП',
      image: null,
    },
    {
      id: 9,
      title: 'ЛФА',
      image: null,
    },
    {
      id: 10,
      title: 'ПФА',
      image: null,
    },
    {
      id: 11,
      title: 'ФРВ',
      image: null,
    },
  ]);

  const onChoosePlayer = (image) => {
    console.log(image)
    console.log(footballers.map(item => {
      if (selectedIndex === item.id) {
        return { ... item, image  };
      }
      return item;
    }))
    setFootballers(footballers.map(item => {
      if (selectedIndex === item.id) {
        return { ... item, image };
      }
      return item;
    }))
    setSelectedIndex(null);
  }

  const reset = () => {
    setFootballers(footballers.map(item => ({ ...item, image: null })));
  }

  return (
    <div className="main">
      {footballers.map(item => (
        <div
          key={item.id}
          className={cn('player', {active: item.id === selectedIndex})}
          onClick={() => setSelectedIndex(selectedIndex === item.id ? null : item.id)}
        >
          <img src={item.image ? item.image : item.id === selectedIndex ? emptyCardActive : emptyCard} className='playerImg'/>
          <div className='playerPosition'>{item.title}</div>
        </div>
      ))}
      <div className='topLeft'>
        <img src={logo} className='logo' />
        <div className='fieldTitle'>КОМАНДА МЕЧТЫ</div>
        <input className='textField' placeholder='ВВЕДИТЕ НАЗВАНИЕ' onChange={e => setName(e.target.value)} />
      </div>
      <button className='reset' onClick={reset}>
        <img src={resetImg} className='resetImage' />
        НАЧАТЬ ЗАНОВО
      </button>
      <SelectPanel
        positionId={selectedIndex}
        onChoose={onChoosePlayer}
        onClose={() => setSelectedIndex(null)}
      />
    </div>
  );
}

export default App;
