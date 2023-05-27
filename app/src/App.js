import react, { useState, useRef, useMemo, useEffect } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import { usePosts } from "./components/hooks/usePosts";
import PostFilter from "./components/PostFilter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MyModal from "./components/UI/MyModal/MyModal";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css';
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./components/hooks/useFetching";
import { getPageCount, getPagesArray } from "./components/utils/pages";
import Pagination from "./components/UI/pagination/Pagination";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/Navbar/Navbar";
import Error from './pages/Error'
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";


function App() {
  const [isAuth, setIsAuth] = useState(false)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }} >
      <BrowserRouter >
        <Navbar />
        <AppRouter />

      </BrowserRouter>
    </AuthContext.Provider>

  )
}

export default App;
