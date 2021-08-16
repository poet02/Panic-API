import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPanics as listPanics } from "../redux/actions/panicActions";
import useInterval from '../hooks/useInterval';

import CircularProgress from '@material-ui/core/CircularProgress';

import PanicList from './../components/PanicsList';
import SimpleMap from './../components/SimpleMap';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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

  //  useInterval(() => {
  //       dispatch(listPanics());
  //   }, [dispatch]);

  return (
    <div style={{ display: 'flex' }}>
      {/* TODO: if mobile full screen*/}
      <div>
        <div>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
              label="Secondary"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Primary"
            />
          </FormGroup>
        </div>
        <div style={{ height: '100vh', width: '30%', overflowY: 'auto' }}>
          <PanicList onUpdateMap={handleUpdateMap} />
        </div>
      </div>
      {/* TODO: if mobile hide */}
      <div style={{ height: '100vh', width: '70%', overflowY: 'auto' }}>
        <SimpleMap panic={mapPanic} />
      </div>
    </div>
  );
}

export default Home;