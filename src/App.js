import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout";
import {AlbumsPage, CommentsPage, HomePage, TodosPage} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
            <Route path={'todos'} element={<TodosPage/>}/>
            <Route path={'albums'} element={<AlbumsPage/>}/>
            <Route path={'comments'} element={<CommentsPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
