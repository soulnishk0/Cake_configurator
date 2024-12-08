import React from "react";
import { Box, Typography, Button, AppBar, Toolbar, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import ChatButton from "./components/ChatButton.jsx"; // Импортируем компонент кнопки чата

const HomePage = () => {
    const navigate = useNavigate();

    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById("about-section");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleChatClick = () => {
        console.log("Chat button clicked"); // Замените это на вызов модального окна или чата
    };

    return (
        <Box sx={{ flexGrow: 1, m: 0, p: 0 }}>
            {/* Header */}
            <AppBar position="static" color="inherit" elevation={0}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h6" component="div">
                        CakeMaster
                    </Typography>
                    <Box>
                        <Button color="inherit" onClick={() => navigate("/")}>
                            HOME
                        </Button>
                        <Button color="inherit" onClick={() => navigate("/shop")}>
                            SHOP
                        </Button>
                        <Button color="inherit" onClick={handleScrollToAbout}>
                            ABOUT
                        </Button>
                        <IconButton color="inherit" onClick={() => navigate("/profile")}>
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Main Banner */}
            <Box
                sx={{
                    height: "90vh",
                    backgroundImage: `url('/1.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#fff",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                }}
            >
                <Typography variant="h2" gutterBottom>
                    CakeMaster
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                    - BENTO BOUTIQUE -
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{
                        bgcolor: "rgba(255,255,255,0.8)",
                        color: "black",
                        "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                    }}
                    onClick={() => navigate("/build-bento")}
                >
                    Build a Bento
                </Button>
            </Box>

            {/* About Section */}
            <Box
                id="about-section"
                sx={{
                    height: "30vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                    bgcolor: "#f8f8f8",
                }}
            >
                <Typography variant="h5" gutterBottom>
                    About CakeMaster
                </Typography>
                <Typography variant="body1" textAlign="center">
                    Welcome to CakeMaster, a web application crafted with love and
                    dedication to the art of baking. We strive to provide an intuitive
                    and delightful experience for our users. Should you encounter any
                    challenges or have questions, our integrated chatbot is always here
                    to assist you. Thank you for choosing CakeMaster to sweeten your day!
                </Typography>
            </Box>

            {/* Chat Button */}
            <ChatButton onClick={handleChatClick} />
        </Box>
    );
};

export default HomePage;
