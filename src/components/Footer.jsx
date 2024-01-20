import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="row text-center bg-primary p-3 mt-5">
      <div className="col fs-1">
        <Link
          to="https://www.github.com/cazthetraveler"
          target="_blank"
          className="link-light"
        >
          <i className="bi bi-github"></i>
        </Link>
        <Link
          to="https://www.linkedin.com/in/luis-olmos-266506204/"
          target="_blank"
          className="link-light mx-3"
        >
          <i className="bi bi-linkedin"></i>
        </Link>
        <Link
          to="https://www.instagram.com/olmos.luisd"
          target="_blank"
          className="link-light"
        >
          <i className="bi bi-instagram"></i>
        </Link>
      </div>
    </footer>
  );
}
