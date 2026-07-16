import { useState, useEffect } from 'react';
import cn from 'classnames';
import SelectImages from './selectImages';
import reset from '../assets/reset.png';
import gift from '../assets/gift.png';

import manTop1 from '../assets/man/options/top/1.png';
import manTop2 from '../assets/man/options/top/2.png';
import manTop3 from '../assets/man/options/top/3.png';
import manTop4 from '../assets/man/options/top/4.png';
import manTop5 from '../assets/man/options/top/5.png';

import manBottom1 from '../assets/man/options/bottom/1.png';
import manBottom2 from '../assets/man/options/bottom/2.png';
import manBottom3 from '../assets/man/options/bottom/3.png';
import manBottom4 from '../assets/man/options/bottom/4.png';
import manBottom5 from '../assets/man/options/bottom/5.png';

import manSneakers1 from '../assets/man/options/sneackers/1.png';
import manSneakers2 from '../assets/man/options/sneackers/2.png';
import manSneakers3 from '../assets/man/options/sneackers/3.png';

import womanTop1 from '../assets/woman/options/top/1.png';
import womanTop2 from '../assets/woman/options/top/2.png';
import womanTop3 from '../assets/woman/options/top/3.png';
import womanTop4 from '../assets/woman/options/top/4.png';
import womanTop5 from '../assets/woman/options/top/5.png';

import womanBottom1 from '../assets/woman/options/bottom/1.png';
import womanBottom2 from '../assets/woman/options/bottom/2.png';
import womanBottom3 from '../assets/woman/options/bottom/3.png';
import womanBottom4 from '../assets/woman/options/bottom/4.png';
import womanBottom5 from '../assets/woman/options/bottom/5.png';

import womanSneakers1 from '../assets/woman/options/sneackers/1.png';
import womanSneakers2 from '../assets/woman/options/sneackers/2.png';
import womanSneakers3 from '../assets/woman/options/sneackers/3.png';

const manTopVariants = {
  1: manTop1,
  2: manTop2,
  3: manTop3,
  4: manTop4,
  5: manTop5,
};

const manBottomVariants = {
  1: manBottom1,
  2: manBottom2,
  3: manBottom3,
  4: manBottom4,
  5: manBottom5,
};
const manSneackersVariants = {
  1: manSneakers1,
  2: manSneakers2,
  3: manSneakers3,
};

const womanTopVariants = {
  1: womanTop1,
  2: womanTop2,
  3: womanTop3,
  4: womanTop4,
  5: womanTop5,
};

const womanBottomVariants = {
  1: womanBottom1,
  2: womanBottom2,
  3: womanBottom3,
  4: womanBottom4,
  5: womanBottom5,
};
const womanSneackersVariants = {
  1: womanSneakers1,
  2: womanSneakers2,
  3: womanSneakers3,
};

const SelectPanel = ({ gender, visible, onSetStep }) => {
  const [top, setTop] = useState(1);
  const [bottom, setBottom] = useState(1);
  const [sneackers, setSneakers] = useState(1);
  const [activeTab, setActiveTab] = useState('top');

  const [manOutfits, setManOutfits] = useState(null);
  const [womanOutfits, setWomanOutfits] = useState(null);

  useEffect(() => {
    Object.values(manTopVariants).forEach(item => {
      const img = new Image();
      img.src = item;
    });
    Object.values(manBottomVariants).forEach(item => {
      const img = new Image();
      img.src = item;
    });
    Object.values(manSneackersVariants).forEach(item => {
      const img = new Image();
      img.src = item;
    });

    Object.values(womanTopVariants).forEach(item => {
      const img = new Image();
      img.src = item;
    });
    Object.values(womanBottomVariants).forEach(item => {
      const img = new Image();
      img.src = item;
    });
    Object.values(womanSneackersVariants).forEach(item => {
      const img = new Image();
      img.src = item;
    });

    const manContext = require.context("../assets/man/models", false, /\.(png|jpe?g|webp)$/);

    const manPhotos = manContext.keys().reduce((acc, file) => {
      const name = file.replace("./", "").replace(".png", "");
      acc[name] = manContext(file);
    
      return acc;
    }, {});

    setManOutfits(manPhotos);

    Object.values(manPhotos).forEach(item => {
      const img = new Image();
      img.src = item;
    });

    const womanContext = require.context("../assets/woman/models", false, /\.(png|jpe?g|webp)$/);

    const womanPhotos = womanContext.keys().reduce((acc, file) => {
      const name = file.replace("./", "").replace(".png", "");
      acc[name] = womanContext(file);
    
      return acc;
    }, {});

    setWomanOutfits(womanPhotos);

    Object.values(womanPhotos).forEach(item => {
      const img = new Image();
      img.src = item;
    });
  }, []);
  
  return (
    <div className={cn('selectPanel', { visible })}>
      <div className='selectPanelButtons'>
        <button className={cn('selectPanelButton', {active: activeTab === 'top'})} onClick={() => setActiveTab('top')}>
          ВЕРХ
        </button>
        <button className={cn('selectPanelButton', {active: activeTab === 'bottom'})} onClick={() => setActiveTab('bottom')}>
          НИЗ
        </button>
        <button className={cn('selectPanelButton', {active: activeTab === 'sneakers'})} onClick={() => setActiveTab('sneakers')}>
          КРОССОВКИ
        </button>
      </div>
      {gender === 'man' && <>
        {activeTab === 'top' && <SelectImages variantObj={manTopVariants} activeVariant={top} onChoose={(val) => setTop(val)} />}
        {activeTab === 'bottom' && <SelectImages variantObj={manBottomVariants} activeVariant={bottom} onChoose={(val) => setBottom(val)} />}
        {activeTab === 'sneakers' && <SelectImages variantObj={manSneackersVariants} activeVariant={sneackers} onChoose={(val) => setSneakers(val)} />}
      </>}
      {gender === 'woman' && <>
        {activeTab === 'top' && <SelectImages variantObj={womanTopVariants} activeVariant={top} onChoose={(val) => setTop(val)} />}
        {activeTab === 'bottom' && <SelectImages variantObj={womanBottomVariants} activeVariant={bottom} onChoose={(val) => setBottom(val)} />}
        {activeTab === 'sneakers' && <SelectImages variantObj={womanSneackersVariants} activeVariant={sneackers} onChoose={(val) => setSneakers(val)} />}
      </>}
      {gender && <img src={gender === 'man' ? manOutfits?.[`${top}-${bottom}-${sneackers}`] : womanOutfits?.[`${top}-${bottom}-${sneackers}`]} className='bigRightImage' />}
      <div className='selectPanelBottomButtons'>
        <button className='selectPanelBottomButton' onClick={() => {
          setTop(1);
          setBottom(1);
          setSneakers(1);
          setActiveTab('top');
          onSetStep(1);
        }}>
          <img src={reset} />
          СБРОС
        </button>
        <button className='selectPanelBottomButton' onClick={() => onSetStep(3)}>
          <img src={gift} />
          ПОЛУЧИТЬ БОНУС
        </button>
      </div>
    </div>
  )
};

export default SelectPanel;