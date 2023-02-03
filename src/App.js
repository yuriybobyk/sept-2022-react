import './App.css';
import {PostsComponent} from "./components";
import {CommentsComponent} from "./components";
import {FaArrowUp} from "react-icons/fa"

function App() {
  return (
    <div className="App">
        <h2>Posts:</h2>
      <PostsComponent/>
        <hr/>
      <h2>Comments:</h2>
        <CommentsComponent/>
        <button className={'up'} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} >
            <FaArrowUp/>
        </button>
    </div>
  );
}

export default App;
