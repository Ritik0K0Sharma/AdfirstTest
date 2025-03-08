import { Routes, Route } from "react-router-dom";
import FacebookLogin from "./Facebook";
import PrivacyPolicy from "./PrivayPolicy";
import Terms from "./Terms";


function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>This is the adfirst facebook trsting Page</h1>} />
      <Route path="/facebook" element={<FacebookLogin />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms/>} />
    </Routes>
  );
}

export default App;
