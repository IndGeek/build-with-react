import "./styles.css";
import Model from "./components/Model";
import Slider from './components/Slider';

export default function App() {
  return (
    <div className="App">
      <Slider/>
      <Model popTitle="Register">
        <h1>Hi, apply here</h1>
        <h4>Start filling the form!</h4>
        <form className="flex flex-col">
          <input type="text" placeholder="Enter name" />
          <input type="password" placeholder="Set a Password" />
          <input type="submit" value="Sign up" className="btn" />
        </form>
      </Model>
      <Model popTitle="Log In">
        <h1>Welcome back</h1>
        <h4>Fill Details</h4>
        <form className="flex flex-col">
          <input type="text" placeholder="Enter Username" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Log In" className="btn" />
        </form>
      </Model>
    </div>
  );
}
