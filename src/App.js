import logo from "./logo.svg";
import "./App.css";
import Heading2 from "./components/atoms/Heading2";
import { useState } from "react";
import HeadingWithText from "./components/HeadingWithText";

function App() {
  const [name, setName] = useState("Ahmed");
  const [isModalOpen, setIsModalOpen] = useState(false);

  //  Change user name
  const changeName = () => {
    setName("mohamed");
  };

  //  Open Modal
  const openModal = () => {
    // if (!isModalOpen) {
    //   setIsModalOpen(true);
    // } else {
    //   setIsModalOpen(false);
    // }
    setIsModalOpen(!isModalOpen);

    console.log(isModalOpen);
  };

  return (
    <div className='App'>
      <h1>{name}</h1>
      <button onClick={changeName}>Please change user</button>
      <br />
      <br />
      {/* <Heading2 value='heading 1' color='red' isImportant />
      <Heading2 value='heading 2' color='green' />
      <Heading2 value='heading 3' color='yellow' isImportant />
      <Heading2 value='heading 4' color='pink' hidden /> */}

      {/* // condition ? case 1 : case 2 */}

      <button onClick={openModal}>{`${
        isModalOpen ? "close" : "open"
      } ${" "}modal`}</button>

      {isModalOpen ? <HeadingWithText /> : null}
    </div>
  );
}

export default App;
