import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = ({ loading, error }) => (
  <div>
    <NavBar />
    <main style={{ padding: 20 }}>
      {loading ? <p>Đang tải...</p> : error ? <p>{error}</p> : <Outlet />}
    </main>
  </div>
);

export default Layout;