import { Circle } from "@mui/icons-material";
import React from "react";
import Toys from "./images/Toys.jpg";
import './Post.css'

function Post() {
	return (
		<div className="post">
			<div className="post__left">
				<div className="post__leftTop">
					<img src={Toys} alt="" />
					<p className='post__username'>Shie Ka</p>
					<Circle className="post__leftBullet" />
					<p className="post__leftTimestamp">16:02</p>
				</div>
				<h4 className="post__libraryName">Club Niggas</h4>
				<span className="post__message">Suprise guys!</span>
			</div>
			<div className="post__right">
                <img src={Toys} alt='' />
            </div>
		</div>
	);
}

export default Post;
