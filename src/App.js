import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AboutPage from './pages/aboutPage';
import ArticlePage from './pages/articlePage';
import ArticleListPage from './pages/articlesListPage';
import HomePage from './pages/homePage';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
            <Routes>
              <Route path ="/" element = {<HomePage/>} />
              <Route path ="/about" element = {<AboutPage />} />
              <Route path ="/articles" element = {<ArticleListPage />} />
              <Route path ="/articles/:articleID" element = {<ArticlePage />} /> {/* The artcleID is known as a url parameter */}
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
