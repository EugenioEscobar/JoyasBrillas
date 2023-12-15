import { Routes, Route } from "react-router-dom";
import { Main } from "./layouts/Main";

import { Products } from "./layouts/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/joyas" element={<Products />} />
    </Routes>
  );
}

export default App;
