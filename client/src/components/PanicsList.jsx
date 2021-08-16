import React from "react";

import { useSelector } from "react-redux";

import Panic from './Panic';


const PanicList = ({ onUpdateMap }) => {

    const {panics} = useSelector((state) => state.getPanics);


    if (!panics) {
        return <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh)"
        }}>
            <div>There are no panics</div>
        </div>;
    }
    return (
        <div>
            {panics.map((panic) => (<Panic onUpdateMap={onUpdateMap} key={panic.id} panic={panic}></Panic>))}
        </div>
    );
}

export default PanicList;