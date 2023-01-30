import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout";
import {AlbumsPage, CommentsPage, HomePage, PostByCommentsPage, TodosPage} from "./pages";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element= {<HomePage/>}/>
          <Route path={'todos'} element={<TodosPage/>}/>
          <Route path={'albums'} element={<AlbumsPage/>}/>
          <Route path={'comments'} element={<CommentsPage/>}>
            <Route path={':postId'} element={<PostByCommentsPage/>}/>
          </Route>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
