import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BreweryList from "./apiCalls/breweries-list";
import RandomBrewery from "./apiCalls/brewery-random";
import BreweryFilter from "./components/FilterBrewery";
import FilteredBreweries from "./apiCalls/filtered-breweries";
import LoginPage from "./components/loginPage";
import SingleBrewery from "./apiCalls/single-brewery";
import UserFavBreweries from './components/UserFavs';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/breweries" element={<BreweryList />}></Route>
        <Route path="/brewery/random" element={<RandomBrewery />} />
        <Route path="/brewery/filter" element={<BreweryFilter />}></Route>
        <Route
          path="/breweries/filtered"
          element={<FilteredBreweries />}
        ></Route>
        <Route path="/brewery/:id" element={<SingleBrewery />} />
        <Route path="/brewery/favourites" element={<UserFavBreweries />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

