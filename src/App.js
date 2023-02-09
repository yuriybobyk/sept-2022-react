
import './App.css';
import {Header, PostHeader, Posts, Users} from "./components";

function App() {
  return (
      <div className="App">
        <Header/>
        <hr/>
        <Users/>
          <PostHeader/>
          <hr/>
          <Posts/>
      </div>
  );
}

export default App;
