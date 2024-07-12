import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <h1>Root</h1>
      <Outlet />
    </>
  );
}

export default Root;
