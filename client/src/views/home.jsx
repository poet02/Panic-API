import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPanics as listPanics } from "../redux/actions/panicActions";
import useInterval from '../hooks/useInterval';

import CircularProgress from '@material-ui/core/CircularProgress';

import PanicList from './../components/PanicsList';
import SimpleMap from './../components/SimpleMap';


const Home = () => {
  const dispatch = useDispatch();
  const [mapPanic, setMapPanic] = useState({});
  const handleUpdateMap = (panic) => {
    setMapPanic(panic);
  };
  useEffect(() => {
    dispatch(listPanics());
  }, [dispatch]);

  useInterval(() => {
    console.log('panics')
    dispatch(listPanics());
  }, 1500);

  return (
    <>
      < div style={{ display: 'flex' }}>
        <div style={{ height: '100vh', width: '30%', overflowY: 'auto' }}>
          <PanicList onUpdateMap={handleUpdateMap} selected={mapPanic.id}/>
        </div>
        {/* TODO: if mobile hide */}
        <div style={{ height: '100vh', width: '70%', overflowY: 'auto' }}>
          <SimpleMap panic={mapPanic} />
        </div>
      </div>
    </>

  );
}

export default Home;