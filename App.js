import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { GlobalStyles } from "./GlobalStyles";

import Hero from "./components/Hero";
import Highlight_1 from "./components/Highlights_1";
import Highlight_2 from "./components/Highlights_2";
import Highlight_3 from "./components/Highlights_3";
import Highlight_4 from "./components/Highlights_4";
import Highlight_5 from "./components/Highlights_5";
import Highlight_6 from "./components/Highlights_6";
import Homepage from "./components/Homepage";
export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Highlight_1 />
      <Highlight_2 />
      <Highlight_3 />
      <Highlight_4 />
      <Highlight_5 />
      <Highlight_6 />
    </Router>
  );
}
