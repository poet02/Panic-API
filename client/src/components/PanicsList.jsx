import React, { useState, useEffect }  from "react";

import { useSelector } from "react-redux";

import Panic from './Panic';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const PanicList = ({ onUpdateMap }) => {

	const { panics } = useSelector((state) => state.getPanics);

	const [state, setState] = React.useState({
		checkedNoResponder: true,
		checkedActive: true,

});


const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
};


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
			<FormGroup style={{paddingLeft: '10px'}} row>
				<FormControlLabel
					control={<Checkbox checked={state.checkedNoResponder} onChange={handleChange} name="checkedNoResponder" color="primary"/>}
					label="No Responder"
				/>
				<FormControlLabel
					control={<Checkbox checked={state.checkedActive}	onChange={handleChange} name="checkedActive"	color="primary"/>}
					label="Active"
				/>
		
			</FormGroup>
			{panics.map((panic) => (<Panic onUpdateMap={onUpdateMap} key={panic.id} panic={panic}></Panic>))}
		</div>
	);
}

export default PanicList;