import { Route, Routes } from "react-router-dom";
import { QrCodeGenerator } from "./Components/Generate/QrCodeGenerator";
import { GenerateHistory } from "./Components/History/GenerateHistory";
import { ScanHistory } from "./Components/History/ScanHistory";
import { Navigation } from "./Components/Naviagtion/Navigation";
import { QrCodeScanner } from "./Components/Scan/QrCodeScanner";
const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/generateHistory" element={<GenerateHistory />} />
        <Route path="/scanHistory" element={<ScanHistory />} />
      </Routes>
    </div>
  );
};
export { Layout };
