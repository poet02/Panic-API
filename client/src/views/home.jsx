import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPanics as listPanics } from "../redux/actions/panicActions";

import CircularProgress from '@material-ui/core/CircularProgress';
import { DataGrid } from '@material-ui/data-grid';

import PanicList from './../components/PanicsList';



const Home = () => {
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(listPanics());
  }, [dispatch]);
  return (
    <PanicList></PanicList>
  );
}

export default Home;