import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav
        first="Home"
        two="Articles"
        three="About"
        four="Contacts"
        five="More"
      />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
