import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPanics as listPanics } from "../redux/actions/panicActions";
import { getPanics } from "../redux/actions/panicActions";

import CircularProgress from '@material-ui/core/CircularProgress';
import Panic from './Panic';
import useInterval from '../hooks/useInterval';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       maxWidth: 345,
//     },
// })

const PanicList = ({ onUpdateMap }) => {
    const dispatch = useDispatch();
    const { panics, loading } = useSelector((state) => state.getPanics);
    const {panicl, setPanicsL} = useState({});


    if (!panics) {
        return <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh)"
        }}>
            <CircularProgress />
        </div>;
    }
    if (!panics) {
        return <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh)"
        }}>
            <div>Could not Retrieve Panic Data</div>
        </div>;
    }
    return (
        <div>
            {panics.map((panic) => (<Panic onUpdateMap={onUpdateMap} key={panic.id} panic={panic}></Panic>))}
        </div>
    );
}

export default PanicList;