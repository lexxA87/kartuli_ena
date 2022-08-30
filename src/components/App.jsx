import { Routes, Route } from "react-router-dom";

import Header from "./header/Header";
import StartPage from "./startPage/StartPage";
import AdminPage from "./adminPage/AdminPage";
import AboutPage from "./aboutPage/AboutPage";
import GalleryPage from "./galleryPage/GalleryPage";
import HistoryPage from "./historyPage/HistoryPage";
import RulesPage from "./rulesPage/RulesPage";
import WordsPage from "./wordsPage/WordsPage";
import WordPage from "./wordsPage/WordPage";
import NotFound from "./notFound/NotFound";

import "/node_modules/flag-icons/css/flag-icons.min.css";

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Routes>
          <Route index element={<StartPage />} />
          <Route path="words" element={<WordsPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="rules" element={<RulesPage />} />
          <Route path="word:id" element={<WordPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
