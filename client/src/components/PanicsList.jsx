import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPanics as listPanics } from "../redux/actions/panicActions";

import CircularProgress from '@material-ui/core/CircularProgress';
import Panic from './Panic';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       maxWidth: 345,
//     },
// })

const PanicList = () => {
    const dispatch = useDispatch();
    const { panics, loading } = useSelector((state) => state.getPanics);

    useEffect(() => {
        dispatch(listPanics());
    }, [dispatch]);

    if (loading ) {
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
    // let flatPanicData = panics.map((x) => {
    //     return {
    //         ...x,
    //         user_name: x.user.user_name
    //     }
    // })
    return (
        <div style={{ height: '100vh', width: '30%', overflowY: 'auto' }}>
            {panics.map((panic) => (<Panic key={panic.id} panic={panic}></Panic>))}
        </div>
    );
}

export default PanicList;