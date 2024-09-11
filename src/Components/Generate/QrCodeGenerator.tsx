import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { GENERATE_DATA } from "../../constants";
import s from "./qrCodeGenrator.module.css";
export const QrCodeGenerator = () => {
  const [qrValue, setQrValue] = useState("");
  const [qrResult, setQrResult] = useState("");
  const [error, setError] = useState("");
  const isValidUrl = (url: string) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|localhost|" +
        "\\d{1,3}\\.?\\d{1,3}\\.?\\d{1,3}\\.?\\d{1,3})" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i",
    );
    return urlPattern.test(url) && url.length <= 2048;
  };
  const onClickHandler = () => {
    if (isValidUrl(qrValue)) {
      const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
      localStorage.setItem(
        GENERATE_DATA,
        JSON.stringify([...prevData, qrValue]),
      );
      setQrResult(qrValue);
      setQrValue("");
      setError("");
    } else {
      setError("Please enter valid url");
    }
  };
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQrValue(event.target.value);
  };
  return (
    <div className={s.generatorContainer}>
      <h2 className={s.title}>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Paste your link here"
        value={qrValue}
        onChange={onChangeHandler}
        className={s.inputField}
      />
      <button
        type="button"
        onClick={onClickHandler}
        className={s.generateButton}
      >
        Generate
      </button>
      {error && <p className={s.errorMessage}>{error}</p>}
      {qrResult !== "" && (
        <div className={s.qrCodeWrapper}>
          <QRCodeSVG value={qrResult} size={150} className={s.qrCode} />
        </div>
      )}
      <p className={s.qrCodeDescription}>
        This is your generated QR code:
        <br />
        {qrResult}
      </p>
    </div>
  );
};
