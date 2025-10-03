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
import { useTheme } from "@mui/material/styles";
import { useAuth } from "../context/AuthContext";

const drawerWidth = 240;

export default function DashboardLayout() {
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
            <img src="/logo.svg" alt="logo" style={{ width: 24, height: 24, margin: '20px 0' }} />
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
                                border: '5px solid #F8F8FB'
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
                            onClick={() => setDrawerOpen(!drawerOpen)}
                            sx={{ mr: 2, color: "#003EFF" }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography sx={{ flexGrow: 1, fontSize: '28px', lineHeight: "100%", fontWeight: 600, color: "#373B47" }}>
                        INVOICE
                    </Typography>

                    <IconButton sx={{ bgcolor: "#fff", borderRadius: "30px", mr: '1rem' }}>
                        <img
                            src="/notification.svg"
                            alt="home"
                            style={{ width: 24, height: 24, }}
                        />
                    </IconButton>

                    <Box display="flex" alignItems="center" sx={{ bgcolor: "#fff", borderRadius: "30px" }}>
                        <IconButton onClick={handleOpen}>
                            <Avatar sx={{ bgcolor: "#003EFF" }}> {user?.displayName?.split(" ")[0][0]}</Avatar>

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
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    padding: "0 24px",
                    width: '100%',
                    margin: "20px 0",
                    mt: 4,
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
}
