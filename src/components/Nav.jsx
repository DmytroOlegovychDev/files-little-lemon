function Nav(props) {
  return (
    <nav className="main-nav">
      <ul>
        <li>{props.first}</li>
        <li>{props.two}</li>
        <li>{props.three}</li>
        <li>{props.four}</li>
        <li>{props.five}</li>
        <li>{props.six}</li>
      </ul>
    </nav>
  );
}

export default Nav;
