import React from 'react'


function Child(props) { 
	return ( 
		<div className="child">
			<h1>Child</h1>
			<button onClick={() => props.changeWord('david')}>Click to change title</button>
		</div>
	);
}
export default Child;