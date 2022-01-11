import { MenuOutlined, NotificationsOutlined } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import "./Appbar.css";

function Appbar() {
	return (
		<div className="appbar">
			<div className="appbar__header">
				<div className="appbar__headerLogo">
					<h3>Tiktokshare</h3>
				</div>
				<div className="appbar__headerRight">
					<IconButton className="appbar__headerRightButon">
						<Badge badgeContent={2} color="secondary">
							<NotificationsOutlined className="appbar__headerRightIcon" />
						</Badge>
					</IconButton>
					<IconButton className="appbar__headerRightButon">
						<MenuOutlined className="appbar__headerRightIcon" />
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default Appbar;
