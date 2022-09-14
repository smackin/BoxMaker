import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
	const [ boxes, setBoxes ] = useState([]);
	const add = boxObj => {
		setBoxes((boxes) => [...boxes, boxObj]);
	};
	const remove = id => {
		setBoxes((boxes) => boxes.filter((box) => box.id !== id));
	};

	const boxComponents = boxes.map((box) => (
		<Box
			key={box.id}
			id={box.id}
			width={box.width}
			height={box.height}
			handleRemove={remove}
			backgroundColor={box.backgroundColor}
		/>
	));

    return (
        <div>
            <NewBoxForm createNewBox={add}/>
            {boxComponents}
        </div>
    )
};
export default BoxList;
