import { Outlet } from "react-router-dom";
import { Navbar } from "./components/shared/Navbar";
import { ThemeProvider } from "@emotion/react";
import { cosmicGroove } from "./styles/themes/cosmicGroove";

function Root() {
  return (
    <ThemeProvider theme={cosmicGroove}>
      <Navbar />
      <Outlet />
    </ThemeProvider>
  );
}

export default Root;
