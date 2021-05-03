import "./App.css";
import profilePicture from "./img/saar-profile.JPG";

function App() {
  return (
    <div className="App">
      <h1>Saar Cohen</h1>
      <h2>I am a Full Stack Developer</h2>
      <img src={profilePicture} alt="Profile" />
    </div>
  );
}

export default App;
