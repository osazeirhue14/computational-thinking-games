import React, { useState } from "react";
import Logo from "../../Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useNavigate } from "react-router-dom";
import Login from "./Login.js";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      route: "/", // Define the route for Home
    },
    {
      text: "About Us",
      route: "/AboutUs", // Define the route for About Us
    },
    {
      text: "Reviews",
      route: "/Reviews", // Define the route for Reviews
    },
    {
      text: "Sign In/Registration",
      route: "/Login", // Define the route for Reviews
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      route: "/contact", // Define the route for Contact
    },
  ];
  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" style={{ width: "120px" }} /> {/* Adjust the width to make the logo smaller */}
      </div>
      <div className="navbar-links-container">
        {/* Use Link component for routing */}
        <Link to="/" className="navbar-link">Home Page</Link>
        <Link to="/about-us" className="navbar-link">About Us</Link>
        <Link to="/reviews" className="navbar-link">Reviews</Link>
        <Link to="/games" className="navbar-link">Games</Link>
        <Link to="/leaderboards" className="navbar-link">Leaderboards</Link>
        <Link to="/login" className="primary-button">Sign In/Register</Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.route}> {/* Use Link component for routing */}
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
