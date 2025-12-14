import { useState } from 'react';
import SelectPanel from './selectPanel';
import logo from './assets/logo.png';
import resetImg from './assets/reset.png';
import CapitainEmpty from './assets/capitainEmpty.png';
import RiflerEmpty from './assets/riflerEmpty.png';
import TrainerEmpty from './assets/trainerEmpty.png';
import SniperEmpty from './assets/sniperEmpty.png';
import html2canvas from 'html2canvas'
import QrCode from './qrCode';
// import Keyboard from "./keyboard";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  // const [name, setName] = useState('');
  const [players, setPlayers] = useState([
    {
      id: 1,
      title: 'Капитан',
      image: null,
      imageEmpty: CapitainEmpty
    },
    {
      id: 2,
      title: 'Снайпер',
      image: null,
      imageEmpty: SniperEmpty
    },
    {
      id: 3,
      title: 'Рифлер-1',
      image: null,
      imageEmpty: RiflerEmpty
    },
    {
      id: 4,
      title: 'Рифлер-2',
      image: null,
      imageEmpty: RiflerEmpty
    },
    {
      id: 5,
      title: 'Рифлер-3',
      image: null,
      imageEmpty: RiflerEmpty
    },
    {
      id: 6,
      title: 'Тренер',
      image: null,
      imageEmpty: TrainerEmpty
    },
  ]);

  const onChoosePlayer = (image) => {
    setPlayers(players.map(item => {
      if (selectedIndex === item.id) {
        return { ... item, image };
      }
      return item;
    }))
    setSelectedIndex(null);
  }

  const [resetValue, setResetValue] = useState(0);

  const reset = () => {
    setPlayers(players.map(item => ({ ...item, image: null })));
    // setName('')
    setResetValue(resetValue + 1);
  }

  const [link, setLink] = useState(null);
  const [showQr, setShowQr] = useState(null);

  const captureAndSave = () => {
    setShowQr(true);
    const screenshotTarget = document.getElementById('screenshot');
    html2canvas(screenshotTarget).then((canvas) => {
      canvas.toBlob(blob => {
        uploadToYandexDisk(blob, '/Screenshots', `/screenshot-${Math.floor(Math.random() * 1000)}.png`);
    }, 'image/png');
    });
  }

  const uploadToYandexDisk = async (fileBlob, path, filename) => {
    const accessToken = 'y0__xCz4Pu3BRjZmjwgsbrDzBWqeV3v-ziSaGnsGID7kb--xaA8dQ';

    const uploadUrl = `https://cloud-api.yandex.net/v1/disk/resources/upload?path=${path}${filename}&overwrite=true`;

    try {
      fetch(uploadUrl, {
        headers: {
            'Authorization': `OAuth ${accessToken}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          fetch(data.href, {
            method: 'PUT',
            headers: {
              'Content-Type': fileBlob.type, // или другой тип
            },
            body: fileBlob
          }).then(() => setLink(`https://disk.yandex.ru/d/PEl1jn4scg42ZA${filename}`));
        });
    } catch (err) {
      console.log(err);
    }
}

  // const [showKeyboard, setShowKeyboard] = useState(false);

  return (
    <>
      <div className="main" id="screenshot">
        {players.map(item => (
          <div
            key={item.id}
            className='player'
            onClick={() => setSelectedIndex(selectedIndex === item.id ? null : item.id)}
          >
            <img src={item.image ? item.image : item.imageEmpty} className='playerImg'/>
            <div className='playerPosition'>{item.title}</div>
          </div>
        ))}
        <SelectPanel
          positionId={selectedIndex}
          onChoose={onChoosePlayer}
          onClose={() => setSelectedIndex(null)}
        />
        <div className='topField'>
          <img src={logo} className='logo' />
          <div className='fieldTitle'>КОМАНДА МЕЧТЫ</div>
          <div style={{width: '8vw'}} />
        </div>
        {/* <Keyboard
          open={showKeyboard}
          initValue={name}
          resetValue={resetValue}
          onChange={(value) => setName(value)}
          onClose={() => setShowKeyboard(false)}
        /> */}
      </div>
      <button className='blueButton' onClick={captureAndSave}>
        СОХРАНИТЬ
      </button>
        {/* <input
          value={name}
          className='textField'
          placeholder='ВВЕДИТЕ НАЗВАНИЕ'
          onFocus={() => setShowKeyboard(true)}
        /> */}
      <button className='reset' onClick={reset}>
        <img src={resetImg} className='resetImage' />
        НАЧАТЬ ЗАНОВО
      </button>
      {showQr && <QrCode link={link} onClose={() => {
        setLink(null);
        setShowQr(false);
      }} />}
    </>
  );
}

export default App;
