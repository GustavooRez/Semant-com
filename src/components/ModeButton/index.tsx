import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../assets/styles/theme";
import GlobalTheme from "../../assets/styles/global";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { Button } from 'react-bootstrap';

const ModeButton = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            window.localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            window.localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
    }, []);

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalTheme />
            <Button className="button-dark-light px-2" variant="link" onClick={toggleTheme}>{theme === "light" ? <IoSunnyOutline /> : <IoMoonOutline />}</Button>
        </ThemeProvider>
    );
}

export default ModeButton;