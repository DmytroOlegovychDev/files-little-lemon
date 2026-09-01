function Nav(props) {
  return (
    <nav className="main-nav">
      <img src="/src/icons_assets/Logo.svg" alt="Logo images" />
      <ul>
        <li>{props.first}</li>
        <li>{props.two}</li>
        <li>{props.three}</li>
        <li>{props.four}</li>
        <li>{props.five}</li>
      </ul>
    </nav>
  );
}

export default Nav;
