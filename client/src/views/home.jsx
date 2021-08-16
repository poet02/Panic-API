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

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleUpdateMap = (panic) => {
    setMapPanic(panic);
  };
  useEffect(() => {
    dispatch(listPanics());
  }, [dispatch]);

  // useInterval(() => {
  //   dispatch(listPanics());
  // }, [dispatch]);

  return (
    <>
      < div style={{ display: 'flex' }}>
        <div style={{ height: '100vh', width: '30%', overflowY: 'auto' }}>
          <PanicList onUpdateMap={handleUpdateMap} />
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