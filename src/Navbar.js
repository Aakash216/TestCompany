import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import { height, textAlign } from "@mui/system";

const drawerWidth = 240;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F2F3F4",
  color: "#808081",
  margin: "0px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginRight: theme.spacing(5),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "#808081",
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    color: "#808081",
    height: "30px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#FFFAFA",
    },
  },
});
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <Badge color="error">
              <ChatIcon
                style={{
                  color: "#808081",
                  fontSize: "40px",
                  textAlign: "center",
                  marginRight: "0%",
                }}
              />
            </Badge>
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <Badge color="error">
              <NotificationsIcon
                style={{
                  color: "#808081",
                  fontSize: "40px",
                  textAlign: "center",
                  marginRight: "0%",
                }}
              />
            </Badge>
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <Badge color="error">
              <MoreVertIcon
                style={{
                  color: "#808081",
                  fontSize: "40px",
                  textAlign: "center",
                  marginRight: "0%",
                }}
              />
            </Badge>
          </IconButton>
        </MenuItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar component="nav" style={{ height: "8%" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 60, height: 60 }}
              />
            </Typography>
            <Search style={{ color: "black" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                style={{ color: "black" }}
              />
            </Search>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <ChatIcon
                  style={{
                    color: "#808081",
                    fontSize: "40px",
                    textAlign: "center",
                    marginRight: "0%",
                  }}
                />
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <NotificationsIcon
                  style={{
                    color: "#808081",
                    fontSize: "40px",
                    textAlign: "center",
                    marginRight: "0%",
                  }}
                />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <MoreVertIcon
                  style={{
                    color: "#808081",
                    fontSize: "40px",
                    textAlign: "center",
                    marginRight: "0%",
                  }}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
