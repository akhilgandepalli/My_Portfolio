import { useState } from "react";

import "./App.css";
import { Container } from "@mui/material";
import AppAppBar from "./components/AppAppBar";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px groove gray",
        borderRadius:2,
        bgcolor:'#E8F9FF'
      }}
    >
      <AppAppBar />
      <Introduction />
      <Projects />
    </Container>
  );
}

export default App;
