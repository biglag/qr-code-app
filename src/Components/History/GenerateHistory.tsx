import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { GENERATE_DATA } from "../../constants";
import s from "./history.module.css";
export const GenerateHistory = () => {
  const [data, setData] = useState<string[]>(
    JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]"),
  );
  const clearHistory = () => {
    localStorage.removeItem(GENERATE_DATA);
    setData([]);
  };
  return (
    <div className={s.historyContainer}>
      <h2>History of Generated QR Codes</h2>
      {data.length > 0 ? (
        data.map((item: string) => (
          <div key={item} className={s.historyItem}>
            <p>{item}</p>
            <QRCodeSVG className={s.qrCode} value={item} size={50} />
          </div>
        ))
      ) : (
        <p>No history available.</p>
      )}
      {data.length > 0 && (
        <button className={s.clearButton} onClick={clearHistory}>
          Clear History
        </button>
      )}
    </div>
  );
};
