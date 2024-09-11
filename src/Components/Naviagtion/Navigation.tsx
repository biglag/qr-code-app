import { Link, useLocation } from "react-router-dom";
import s from "./navigation.module.css";
export const Navigation = () => {
  const location = useLocation();
  return (
    <nav className={s.navContainer}>
      <Link
        to={"/generate"}
        className={`${s.navLink} ${
          location.pathname === "/generate" ? s.navLinkActive : ""
        }`}
      >
        generate QR code
      </Link>
      <Link
        to={"/scan"}
        className={`${s.navLink} ${
          location.pathname === "/scan" ? s.navLinkActive : ""
        }`}
      >
        scan QR code
      </Link>
      <Link
        to={"/generateHistory"}
        className={`${s.navLink} ${
          location.pathname === "/generateHistory" ? s.navLinkActive : ""
        }`}
      >
        Generate History
      </Link>
      <Link
        to={"/scanHistory"}
        className={`${s.navLink} ${
          location.pathname === "/scanHistory" ? s.navLinkActive : ""
        }`}
      >
        Scanning History
      </Link>
    </nav>
  );
};
