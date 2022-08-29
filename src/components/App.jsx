import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./header/Header";
import StartPage from "./startPage/StartPage";
import NotFound from "./notFound/NotFound";

import "/node_modules/flag-icons/css/flag-icons.min.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<StartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
