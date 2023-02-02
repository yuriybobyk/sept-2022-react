import './App.css';
import {PostsComponent} from "./components";
import {CommentsComponent} from "./components";

function App() {
  return (
    <div className="App">
      <PostsComponent/>
        <hr/>
        <CommentsComponent/>
    </div>
  );
}

export default App;
