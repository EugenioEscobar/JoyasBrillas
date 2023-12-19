import { Routes, Route } from "react-router-dom";
import { Main } from "./layouts/Main";
import { Products } from "./layouts/Products";
import { ProductView } from "./layouts/ProductView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/joyas" element={<Products />} />
      <Route path="/joya" element={<ProductView />} />
    </Routes>
  );
}

export default App;
