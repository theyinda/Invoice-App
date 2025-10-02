import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Box,
    Menu,
    MenuItem,
    useMediaQuery,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "../context/AuthContext";

const drawerWidth = 240;

export default function DashboardShell() {
    const { user, logout } = useAuth();
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

    const navItems = [
        { to: "/getting-started", label: "Getting Started", icon: <img src="/home-2.svg" alt="home" style={{ width: 24, height: 24 }} /> },
        { to: "/overview", label: "Overview", icon: <img src="/overview.svg" alt="home" style={{ width: 24, height: 24 }} /> },
        { to: "/accounts", label: "Accounts", icon: <img src="/home-2.svg" alt="home" style={{ width: 24, height: 24 }} /> },
        { to: "/invoice", label: "Invoices", icon: <img src="/invoice.svg" alt="home" style={{ width: 24, height: 24 }} /> },
        { to: "/beneficiaries", label: "Beneficiary Mgmt", icon: <img src="/profile.svg" alt="home" style={{ width: 24, height: 24 }} /> },
        { to: "/help", label: "Help Center", icon: <img src="/beneficiary.svg" alt="home" style={{ width: 24, height: 24 }} /> },
        { to: "/settings", label: "Settings", icon: <img src="/setting.svg" alt="home" style={{ width: 24, height: 24 }} /> },
    ];

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null);

    const handleLogout = async () => {
        await logout();
        handleClose();
    };

    const drawerContent = (
        <Box sx={{ width: drawerWidth, padding: '0 1rem', background: '#fff' }}>
            <Typography
                variant="h6"
                sx={{
                    p: 2, textAlign: "center", fontWeight: "bold",
                }}
            >
                INVOICE APP
            </Typography>
            <List>
                {navItems.map(({ to, label, icon }) => (
                    <ListItem
                        key={to}
                        component={NavLink}
                        to={to}
                        sx={{
                            color: "#697598",
                            fontSize: '14px', lineHeight: "100%", fontWeight: 400,
                            "&.active": {
                                padding: '0.5rem',
                                borderRadius: '2rem',
                                border: '5px solid #fbfbf8'
                            },
                        }}
                        onClick={() => !isLargeScreen && setDrawerOpen(false)}
                    >
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: "flex", minHeight: "100vh", margin: 0 }}>
            <AppBar
                position="fixed"
                sx={{
                    margin: "0",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    ...(isLargeScreen && { ml: `${drawerWidth}px`, width: `calc(100% - ${drawerWidth}px)` }),
                }}
            >
                <Toolbar sx={{ backgroundColor: "#F5F6FA", margin: 0, boxShadow: 'none' }}>
                    {!isLargeScreen && (
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => setDrawerOpen(true)}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" sx={{ flexGrow: 1, fontSize: '28px', lineHeight: "100%", fontWeight: 500, color: "#373B47" }}>
                        INVOICE
                    </Typography>

                    <IconButton sx={{ bgcolor: "#fff", }}>
                        <NotificationsIcon sx={{ color: "#373B47" }} />
                    </IconButton>

                    <Box display="flex" alignItems="center">
                        <IconButton onClick={handleOpen}>
                            <Avatar
                                src={user?.photoURL || ""}
                                alt={user?.displayName || "User"}
                                sx={{ width: 32, height: 32, mr: 1 }}
                            />
                            <ExpandMoreIcon fontSize="small" />
                        </IconButton>

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            transformOrigin={{ vertical: "top", horizontal: "right" }}
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        >
                            <MenuItem disabled>{user?.displayName || user?.email}</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer (responsive) */}
            {isLargeScreen ? (
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
                    }}
                >
                    {drawerContent}
                </Drawer>
            ) : (
                <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                    {drawerContent}
                </Drawer>
            )}

            {/* Main content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    padding: "0 24px",
                    width: '100%',
                    // maxWidth: '1440px',
                    margin: "20px 0",
                    // display: 'flex',
                    // justifyContent: 'center',
                    // background: 'red',

                    mt: 4,
                    // ...(isLargeScreen && { ml: `${drawerWidth}px` }),
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
}
