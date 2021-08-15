import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPanics as listPanics } from "../redux/actions/panicActions";

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
  return (
    <div style={{display: 'flex'}}>
    {/* TODO: if mobile full screen*/}
      <div style={{ height: '100vh', width: '30%', overflowY: 'auto' }}>
        <PanicList onUpdateMap={handleUpdateMap}/>
      </div>
      {/* TODO: if mobile hide */}
      <div style={{ height: '100vh', width: '70%', overflowY: 'auto' }}>
        <SimpleMap panic={mapPanic} />
      </div>
    </div>
  );
}

export default Home;