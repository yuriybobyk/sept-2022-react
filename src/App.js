
import './App.css';
import {Header, PostHeader, Posts, Users} from "./components";

function App() {
  return (
      <div className="App">
          <div className={'container'}>
        <div className={'user-part'}>
        <Header/>
        <hr/>
        <Users/>
        </div>
          <div className={'post-part'}>
          <PostHeader/>
          <hr/>
          <Posts/>
          </div>
          </div>
      </div>
  );
}

export default App;
