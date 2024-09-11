import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import { SCAN_DATA } from "../../constants";
import s from "./qrCodeScanner.module.css";

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState("");
  const scanHandler = (detectedCodes: IDetectedBarcode[]) => {
    setScanned(detectedCodes[0].rawValue);
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, detectedCodes[0].rawValue]),
    );
  };

  const settings = {
    audio: false,
    finder: false,
  };

  return (
    <div className={s.qrScannerContainer}>
      <p className={s.qrScannerResult}>
        {" "}
        Scanned result:{" "}
        <span>{scanned ? scanned : "No QR code scanned yet"}</span>
      </p>
      <div className={s.qrScannerWrapper}>
        <Scanner
          onScan={scanHandler}
          components={settings}
          styles={{
            container: { width: 250, height: 250 },
          }}
        />
      </div>
    </div>
  );
};
