import { useState, useEffect } from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [isBoxShadowAdded, setBoxShadowAdded] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggelMobileMenu = () => {
    setMobileMenuOpen((current) => !current);
  };

  useEffect(() => {
    const checkAndAddBoxShadow = () => {
      if (window.scrollY >= 200) {
        setBoxShadowAdded(true);
      } else {
        setBoxShadowAdded(false);
      }
    };
    window.addEventListener("scroll", checkAndAddBoxShadow);
    return () => {
      window.removeEventListener("scroll", checkAndAddBoxShadow);
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <div className="flex justify-center items-center">
            <div>
              <img
                src="/logo.png"
                className="mr-3 h-8 rounded"
                alt="CloudSharePlus Logo"
              />
            </div>
            <div>CloudSharePlus</div>
          </div>
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/#home" className="nav__link active-link">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="nav__item">
              <a href="/#about" className="nav__link">
                About{" "}
              </a>
            </li>
            <li className="nav__item">
              <a href="/#features" className="nav__link">
                {" "}
                Features{" "}
              </a>
            </li>
            <li className="nav__item">
              <a href="/#join" className="nav__link">
                {" "}
                Join{" "}
              </a>
            </li>
            <li className="nav__item">
              <div className="center">{/* <ThemeSelector /> */}</div>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggelMobileMenu}>
          <svg
            className="w-5 ml-1 dark:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm7 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </div>
      </nav>
    </header>
  );
}
