import { useState, useEffect } from 'react';
import cn from 'classnames';

// const options = {
//   '0-0-0': img0.png,
//   ...
// }

const SelectPanel = ({ gender, visible }) => {
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [sneackers, setSneakers] = useState(0);
  const [activeTab, setActiveTab] = useState('top');

  // useEffect(() => {
  //   Object.values(options).forEach(el => {
  //     el.forEach(item => {
  //       const img = new Image();
  //       img.src = item;
  //       document.body.appendChild(img)
  //     })
  //   })
  // }, [])
  
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
    </div>
  )
};

export default SelectPanel;