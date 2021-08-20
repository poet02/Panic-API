import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPanics as listPanics } from "../redux/actions/panicActions";
import useInterval from '../hooks/useInterval';

import CircularProgress from '@material-ui/core/CircularProgress';

import PanicList from './../components/PanicsList';
import SimpleMap from './../components/SimpleMap';


const Home = () => {
  const dispatch = useDispatch();

  const { panics } = useSelector((state) => state.getPanics);

  const [mapPanic, setMapPanic] = useState({});
  const handleUpdateMap = (panic) => {
    setMapPanic(panic);
  };

  let liveMapData = {};
  if (panics && mapPanic) {
    liveMapData = panics.find((panic) => {
      return mapPanic.id === panic.id
    })

  }

   useEffect(() => {
    dispatch(listPanics());
  }, [dispatch]);

  //Polling
  useInterval(() => {
    dispatch(listPanics());
  }, 4500);

  return (
    <>
      < div style={{ display: 'flex' }}>
        <div style={{ height: '100vh', width: '30%', overflowY: 'auto' }}>
          <PanicList panics={panics} onUpdateMap={handleUpdateMap} selected={mapPanic.id} />
        </div>
        {/* TODO: if mobile hide */}
        <div style={{ height: '100vh', width: '70%', overflowY: 'auto' }}>
          <SimpleMap panic={liveMapData} />
        </div>
      </div>
    </>

  );
}

export default Home;