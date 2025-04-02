import "./App.css";
import Counter from "./components/Counter";
import Welcome from "./components/Welcome";
import ShowGithubUser from "./components/ShowGithubUser";
import NotFound from "./components/Notfound";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GithubUserList from "./components/GituhubUserList";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div>
            <Link to="/welcome"> Welcome </Link>
            <Link to="/counter"> Counter </Link>
            <Link to="/users"> Users </Link>
          </div>
          <Routes>
            <Route path="/welcome" element={<Welcome name="John" age={30} />} />
            <Route
              path="/counter"
              element={<Counter initialValue={0} incrementAmount={1} />}
            />
            <Route path="/users" element={<GithubUserList />} />
            <Route path=":username" element={<ShowGithubUser />} />
            <Route index element={<div> Aggiungi utente e selezionalo</div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
