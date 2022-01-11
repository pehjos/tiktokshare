import { Circle, Add } from '@mui/icons-material'
import { Fab } from '@mui/material'
import { useState } from 'react'
import Toys from './images/Toys.jpg'
import './Story.css'


function Story({user}) {
    
    return (
			<div className={`story ${user && "you"}`}>
				<div>
					<img
						className={`story__img ${user && "story__imgUser"}`}
						src={Toys}
						alt=""
					/>
				</div>
				{user ? (
					<p className="story__user story__username">You</p>
				) : (
					<p className="story__username">Thomas</p>
				)}
				{user ? (
					<Fab className="add__fab">
						<Add className="add__add" />
					</Fab>
				) : (
					""
				)}
			</div>
		);
}

//  (
// 					<div className="onlineIndicator">
// 						<Circle className="onlineIndicator__icon" />
// 					</div>
// 				)
export default Story
