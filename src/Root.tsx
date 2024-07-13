import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Navbar } from "@components/shared/Navbar";
import { cosmicGroove } from "@styles/themes/cosmicGroove";
import { Footer } from "@components/shared/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function Root() {
  const links = [
    {
      text: 'Home',
      path: '/',
    },
    {
      text: 'Components',
      path: '/components',
    }
  ];

  return (
    <ThemeProvider theme={cosmicGroove}>
      <Navbar links={links} />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default Root;
