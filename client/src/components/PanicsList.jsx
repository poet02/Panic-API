import React, { useState, useEffect }  from "react";

import { useSelector } from "react-redux";

import Panic from './Panic';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const PanicList = ({ onUpdateMap, selected }) => {

	const { panics } = useSelector((state) => state.getPanics);

	const [filerState, setState] = React.useState({
		checkedNoResponder: true,
		checkedActive: true,

});


const handleChange = (event) => {
		setState({ ...filerState, [event.target.name]: event.target.checked });
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
					control={<Checkbox checked={filerState.hasResponder} onChange={handleChange} name="hasResponder" color="primary"/>}
					label="Responder Assigned"
				/>
			</FormGroup>
			{panics.map((panic) => (<Panic filterState={filerState} selected={selected} onUpdateMap={onUpdateMap} key={panic.id} panic={panic}></Panic>))}
		</div>
	);
}

export default PanicList;