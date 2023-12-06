import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPages from "./componen/pages/index-pages";
import NavbarIndex from "./componen/navbar";
import DetailBootcampEduwork from "./componen/pages/detail-bootcamp";
import DetailBootcampUdemy from "./componen/pages/detail-bootcamp2";
import DetailBootcampMySkill from "./componen/pages/detail-bootcamp3";
import DetailBootcampCodingStudio from "./componen/pages/detail-bootcamp4";
import DetailBootcampKlass from "./componen/pages/detail-bootcamp5";
import DetailBootcampRevou from "./componen/pages/detail-boocatmp6";

function App() {
  return (
    <div>

      <BrowserRouter>
        <NavbarIndex />
        <Routes>
          <Route path="/" element={<IndexPages />} />
          <Route path="/bootcamp-eduwork" element={<DetailBootcampEduwork />} />
          <Route path="/bootcamp-udemy" element={<DetailBootcampUdemy />} />
          <Route path="/bootcamp-mySkill" element={<DetailBootcampMySkill />} />
          <Route path="/bootcamp-coding-studio" element={<DetailBootcampCodingStudio />} />
          <Route path="/bootcamp-klass" element={<DetailBootcampKlass />} />
          <Route path="/bootcamp-revou" element={<DetailBootcampRevou />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
