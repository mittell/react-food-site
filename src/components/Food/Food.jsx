import React from 'react';
import './FoodStyles.css';

const Food = (props) => {
	return (
		<div
			className='food'
			style={{
				background: `url("${props.bgImg}") no-repeat center center/cover`,
			}}
		>
			<div className='container'>
				<div
					className='left'
					style={{
						background: `url("${props.bgImg1}") no-repeat center center/cover`,
					}}
				></div>
				<div
					className='right'
					style={{
						background: `url("${props.bgImg2}") no-repeat center center/cover`,
					}}
				></div>
			</div>
		</div>
	);
};

export default Food;
