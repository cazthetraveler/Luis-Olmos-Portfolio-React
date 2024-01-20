import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const currentPage = useLocation().pathname;
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fw-bolder" to="/">
          Luis Olmos
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fs-4">
            <li className="nav-item">
              <Link
                to="/About-Me"
                className={
                  currentPage === "/About-Me" || currentPage === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                ABOUT ME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Portfolio"
                className={
                  currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={
                  currentPage === "/Contact" ? "nav-link active" : "nav-link"
                }
              >
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Resume"
                className={
                  currentPage === "/Resume" ? "nav-link active" : "nav-link"
                }
              >
                RESUME
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
