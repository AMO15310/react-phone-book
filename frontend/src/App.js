import ContactMain from "./components/Contact-main";
import AddContact from "./components/AddContact";
import Edit from "./components/Editt";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactMain />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
