import { Outlet } from "react-router-dom";
import { Navbar } from "./components/shared/Navbar";
import { ThemeProvider } from "@emotion/react";
import { themeBasic } from "./styles/themes/basic";

function Root() {
  return (
    <ThemeProvider theme={themeBasic}>
      <Navbar />
      <Outlet />
    </ThemeProvider>
  );
}

export default Root;
