import React, { useRef } from 'react';
import QRCode from 'react-qr-code';
import { Button } from 'react-bootstrap';
import './QRSection.css';

export default function QRSection() {
  const qrRef = useRef(null);

  const downloadQR = () => {
    const svg = qrRef.current.querySelector('svg');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    canvas.width = 200;
    canvas.height = 200;
    img.onload = () => {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, 200, 200);
      ctx.drawImage(img, 0, 0, 200, 200);
      const link = document.createElement('a');
      link.download = 'dentcare-qr.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div className="qr-section text-center">
      <h5 className="qr-title">QR-код сайта</h5>
      <div ref={qrRef} className="qr-wrap">
        <QRCode value={window.location.origin} size={180} />
      </div>
      <p className="qr-label">Сканируйте, чтобы открыть сайт</p>
      <Button variant="outline-primary" size="sm" onClick={downloadQR}>
        ⬇️ Скачать QR
      </Button>
    </div>
  );
}
