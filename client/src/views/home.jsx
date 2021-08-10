import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPanics as listPanics } from "../redux/actions/panicActions";

import CircularProgress from '@material-ui/core/CircularProgress';
import { DataGrid } from '@material-ui/data-grid';
const columns = [
  {
    field: 'createdAt',
    headerName: 'Time Ago',
    width: 100,
    editable: true,
  },
  {
    field: 'user_name',
    headerName: 'Victim',
    width: 150,
    editable: true,
  },
  {
    field: 'responder',
    headerName: 'Responder',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'ResponderAt',
    headerName: 'Responder At',
    type: 'string',
    width: 110,
    editable: true,
  },
  // {
  //   field: 'RespondedAt',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
  //     }`,
  // },
];

const Home = () => {
  const dispatch = useDispatch();
  const { panics, loading } = useSelector((state) => state.getPanics);
 

  useEffect(() => {
    dispatch(listPanics());
  }, [dispatch]);

  if (loading) {
    return <div style={{ 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100vh)"}}>
       <CircularProgress />
    </div> ;
  }
  let flatPanicData = panics.map((x) => {
    return {
      ...x,
      user_name: x.user.user_name
    }
  })
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={flatPanicData}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
}

export default Home;