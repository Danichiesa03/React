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
            <Link to="/"> Welcome </Link>
            <Link to="/counter"> Counter </Link>
            <Link to="/users"> Users </Link>
          </div>
          <Routes>
            <Route path="/" element={<Welcome name="John" age={30} />} />
            <Route
              path="/counter"
              element={<Counter initialValue={0} incrementAmount={1} />}
            />
            <Route path="/users" element={<ShowGithubUser />} />
            <Route path="*" element={<NotFound />} />
            <Route path=":username" element={<GithubUserList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
