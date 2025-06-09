import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <br></br>
            <PostComponent></PostComponent>
            <br></br>
          </div>
          <div>
            <PostComponent></PostComponent>
            <br></br>
          </div>
          <div>
            <PostComponent></PostComponent>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}
const style = {};
function PostComponent() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: 200,
          background: "white",
          borderRadius: 10,
          borderColor: "gray",
          padding: 20,
        }}
      >
        <img
          src={
            "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D"
          }
          style={{
            width: 50,
            height: 50,
            borderRadius: 30,
          }}
        ></img>
        <div style={{ fontSize: 12 }}>
          <b>100xDevs</b>
          <div style={{ fontSize: 10 }}>32,4232 Followers</div>
          <div>12M</div>
        </div>
        <div style={{ fontSize: 12 }}>
          Want to know how to win big, checkout the folks at $5
        </div>
      </div>
    </div>
  );
}

export default App;
