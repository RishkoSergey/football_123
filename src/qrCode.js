import {useEffect, useRef} from 'react';
import QRCode from "react-qr-code";
import Loading from './assets/loading.gif';

const QrCode = ({ link, onClose }) => {
  const wrapperRef = useRef(null);

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

  return (
    <div ref={wrapperRef} className='qrCodeModal'>
      <div className='qrCodeTitle'>КОМАНДА СОХРАНЕНА</div>
      <div className='qrCodeSubtitle'>Отсканируй qr-код и скачай себе на память команду твоей мечты</div>
      {link
        ? <QRCode value={link} />
        : <img src={Loading} style={{ width: '100%', height: 'auto', position: 'relative', top: '-5.4vh' }}/>}
    </div>
  )
};

export default QrCode;