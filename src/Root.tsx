import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Navbar } from "@components/shared/Navbar";
import { cosmicGroove } from "@styles/themes/cosmicGroove";
import { Footer } from "@components/shared/Footer";
import { AuthProvider } from "@providers/AuthProvider";

function Root() {
  return (
    <AuthProvider>
      <ThemeProvider theme={cosmicGroove}>
        <Navbar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default Root;
