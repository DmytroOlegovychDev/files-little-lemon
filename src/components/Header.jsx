import Nav from "./Nav";

function Header() {
  return (
    <header className="header" role="banner">
      <div className="header-container">
        <a href="/" className="logo-link" aria-label="Little Lemon Home">
          <img src="/src/icons_assets/Logo.svg" alt="Logo images" />
        </a>
        <Nav
          first="Home"
          two="About"
          three="Menu"
          four="Reservations"
          five="Order Online"
          six="Login"
        />
      </div>
    </header>
  );
}

export default Header;
