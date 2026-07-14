import { useState } from 'react';
import logo from './assets/logo.png';
import Options from './components/options';
import SelectPanel from './components/selectPanel';
import cn from 'classnames';

const genders = [
  {
    name: 'ЖЕНЩИНА',
    img: '',
  },
  {
    name: 'МУЖЧИНА',
    img: '',
  },
];

const qrCodes = [
  {
    name: 'IOS',
    img: '',
  },
  {
    name: 'ANDROID',
    img: '',
  },
];

const App = () => {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState(0);

  const onChooseGender = (idx) => {
    setGender(idx);
    setStep(2);
  }

  return (
    <>
      <div class="background" />
      <div className="main">
        <img src={logo} className={cn('logo', {left: step === 2})} />
        {step === 1 && <Options list={genders} onChoose={onChooseGender} />}
        <SelectPanel gender={gender} visible={step === 2} />
      </div>
    </>
  );
}

export default App;
