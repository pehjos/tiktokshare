import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import {
	AddCircleOutlined,
	HomeOutlined,
	OndemandVideoOutlined,
	Search,
} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";



function Footer() {
	const [value, setValue] = useState(0);

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<div className="footer">
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}>
				<BottomNavigationAction
					className="footerIcon"
					component={Link}
					to="/"
					label="Home"
					icon={<HomeOutlined />}
				/>
				<BottomNavigationAction
					className="footerIcon"
					component={Link}
					to="/library"
					label="Library"
					icon={<FontAwesomeIcon icon={faFolder} className="libraryIcon" />}
				/>
				<BottomNavigationAction
					className="footerIcon"
					component={Link}
					to="/addPost"
					icon={<AddCircleOutlined />}
				/>
				<BottomNavigationAction
					className="footerIcon"
					component={Link}
					to="/videos"
					label="Videos"
					icon={<OndemandVideoOutlined />}
				/>
				<BottomNavigationAction
					className="footerIcon"
					component={Link}
					to="/search"
					label="Seacrh"
					icon={<Search />}
				/>
			</BottomNavigation>
		</div>
	);
}

export default Footer;
