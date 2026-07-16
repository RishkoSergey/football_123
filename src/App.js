import { useState } from 'react';
import logo from './assets/logo.png';
import Options from './components/options';
import SelectPanel from './components/selectPanel';
import cn from 'classnames';
import womanMain from './assets/woman-main.png';
import manMain from './assets/man-main.png';
import ios from './assets/ios.png';
import android from './assets/android.png';
import Arrow from './assets/arrow.png';

const genders = [
  {
    name: 'ЖЕНЩИНА',
    img: womanMain,
  },
  {
    name: 'МУЖЧИНА',
    img: manMain,
  },
];

const qrCodes = [
  {
    name: 'IOS',
    img: ios,
  },
  {
    name: 'ANDROID',
    img: android,
  },
];

const App = () => {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState(null);

  const onChooseGender = (idx) => {
    setGender(idx === 0 ? 'woman' : 'man');
    setStep(2);
  }

  return (
    <>
      <div class="background" />
      <div className="main">
        <img src={logo} className={cn('logo', {left: step === 2})} />
        {step === 1 && <Options list={genders} onChoose={onChooseGender} />}
        <SelectPanel gender={gender} visible={step === 2} onSetStep={(value) => setStep(value)} />
        {step === 3 && <Options list={qrCodes} smallImg>
          <button className='backBtn' onClick={() => setStep(2)}>
            <img src={Arrow} />
            НАЗАД  
          </button>  
        </Options>}
      </div>
    </>
  );
}

export default App;
