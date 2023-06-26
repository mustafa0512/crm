import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { FormControlLabel, FormGroup } from "@mui/material";
import axios from "axios";
import { useTranslation } from "react-i18next";
let BASE_URL: string = "http://localhost:3103";

interface HeaderProps { }

type typeClient = {
    id: number;
    client: string;
    date: string;
    email: string;
    city: string;
    status: string;
    telNumber: number;
    branch: string;
    secTelNumber: number;
    hotel: string;
    from_city: string;
    to_city: string;
    cost: number;
    takeOff: string;
    arrive: string;
    exampleRequired: string;
};

const drawerWidth = 330;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 3,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

const Header: React.FC<HeaderProps> = () => {
    const [search, setSearhc] = useState<string>("");
    const [person, setPerson] = useState<Array<typeClient>>([]);

    useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get(BASE_URL + "/customers");
            setPerson(res.data);
        };

        getUsers();
    }, []);

    const searching = () => {
        const val = person.filter((item) =>
            item.client.toLowerCase().includes(search.toLowerCase())
        );
        console.log(val);
    };

    // searching()

    const { t, i18n } = useTranslation()

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    }



    const id = window.location.href.split("/").at(-1);

    const headBtn = () => {
        if (id === "agency") {
            return (
                <Link to={"/addagency"}>
                    <div className="flex items-center">
                        <img src="/img/plus-circle.svg" className="w-[20px]" alt="" />
                        <p className="text-[#B5B5B5FF] ml-[15px] text-[16px]">
                            {t('createAgency')}
                        </p>
                    </div>
                </Link>
            );
        } else if (id === "hotel") {
            return (
                <Link to={"/addhotel"}>
                    <div className="flex items-center">
                        <img src="/img/plus-circle.svg" className="w-[20px]" alt="" />
                        <p className="text-[#B5B5B5FF] ml-[15px] text-[16px]">
                            {t('createHotel')}
                        </p>
                    </div>
                </Link>
            );
        } else if (id === "branches") {
            return (
                <Link to={"/addbranches"}>
                    <div className="flex items-center">
                        <img src="/img/plus-circle.svg" className="w-[20px]" alt="" />
                        <p className="text-[#B5B5B5FF] ml-[15px] text-[16px]">
                            {t('createBranch')}
                        </p>
                    </div>
                </Link>
            );
        } else if (id === "") {
            return (
                <Link to={"/addclient"}>
                    <div className="flex items-center">
                        <img src="/img/plus-circle.svg" className="w-[20px]" alt="" />
                        <p className="text-[#B5B5B5FF] ml-[15px] text-[16px]">
                            {t('createClient')}
                        </p>
                    </div>
                </Link>
            );
        }
    };

    const blogBtn = () => {
        if (id === "map") {
            return (
                <div className="flex items-center">
                    <img src="/img/settings.svg" className="w-[20px]" alt="" />
                    <Link to={'/blog'}>
                        <p className="text-[#B5B5B5FF] ml-[15px] text-[16px]">
                            {t('createBlog')}
                        </p>
                    </Link>
                </div>
            );
        } else {
            return (
                <div className="flex items-center">
                    <img src="/img/settings.svg" className="w-[20px]" alt="" />
                    <Link to={'/map'}>
                        <p className="text-[#B5B5B5FF] ml-[15px] text-[16px]">
                            {t('showBlog')}
                        </p>
                    </Link>
                </div>
            );
        }
    }

    const comppFilter = () => {
        if (id === "") {
            return (
                <div className="px-4 py-3">
                    <div className="flex items-end mb-[30px]">
                        <img src="/img/filter.svg" alt="" />
                        <p className="text-[18px] text-[#fff] font-semibold ml-[10px]">
                            {t('filter')}
                        </p>
                    </div>

                    <p className="text-[18px] text-[#fff] font-medium mb-[15px]">
                        {t('status')}
                    </p>
                    <FormGroup>
                        <FormControlLabel
                            sx={{ color: "#fff", fontSize: "16px" }}
                            control={<Checkbox sx={{ color: "#B5B5B5FF" }} />}
                            label={t('new')}
                        />
                        <FormControlLabel
                            sx={{ color: "#fff", fontSize: "16px" }}
                            control={<Checkbox sx={{ color: "#B5B5B5FF" }} />}
                            label={t('requestSent')}
                        />
                        <FormControlLabel
                            sx={{ color: "#fff", fontSize: "16px" }}
                            control={<Checkbox sx={{ color: "#B5B5B5FF" }} />}
                            label={t('process')}
                        />
                        <FormControlLabel
                            sx={{ color: "#fff", fontSize: "16px" }}
                            control={<Checkbox sx={{ color: "#B5B5B5FF" }} />}
                            label={t('booked')}
                        />
                        <FormControlLabel
                            sx={{ color: "#fff", fontSize: "16px" }}
                            control={<Checkbox sx={{ color: "#B5B5B5FF" }} />}
                            label={t('tickets')}
                        />
                        <FormControlLabel
                            sx={{ color: "#fff", fontSize: "16px" }}
                            control={<Checkbox sx={{ color: "#B5B5B5FF" }} />}
                            label={t('arrived')}
                        />
                    </FormGroup>
                </div>
            );
        } else if (id === "hotel") {
            return (
                <>
                    <div className="px-4 py-3">
                        <div className="flex items-end mb-[30px]">
                            <img src="/img/filter.svg" alt="" />
                            <p className="text-[18px] text-[#fff] font-semibold ml-[10px]">
                                {t('filter')}
                            </p>
                        </div>

                        <p className="text-[18px] text-[#fff] font-medium mb-[15px]">
                            {t('status')}
                        </p>
                        <form className="flex items-center justify-between w-[280px]">
                            <label className="flex border-[#B5B5B5FF] border-[2px] items-center px-3 w-[130px] rounded-[8px]">
                                <p className="text-[#B5B5B5FF]">{t('from')}</p>
                                <input type="text" className="outline-none px-3 py-2 bg-[transparent] text-[#B5B5B5FF]" placeholder="5000" />
                            </label>
                            <label className="flex border-[#B5B5B5FF] border-[2px] items-center px-3 w-[130px] rounded-[8px]">
                                <p className="text-[#B5B5B5FF]">{t('to')}</p>
                                <input type="text" className="outline-none px-3 py-2 bg-[transparent] text-[#B5B5B5FF]" placeholder="150000" />
                            </label>
                        </form>
                    </div>
                </>
            );
        }
    }

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box sx={{ display: "flex", maxWidth: "1440px" }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    open={open}
                    sx={{ background: "white", boxShadow: "none" }}
                >
                    <Toolbar>
                        <IconButton
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                mr: 2,
                                color: "#B5B5B5FF",
                                ...(open && { display: "none" }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <div className="max-w-[1440px] w-full h-[80px] m-auto flex justify-between items-center">
                            <Link to={'/'}>
                                <img
                                    src="/img/logo.svg"
                                    className={`${open ? "hidden" : "block"} w-[120px]`}
                                    alt=""
                                />
                            </Link>

                            <div
                                className={`${open ? "ml-[20%]" : "justify-between"
                                    } w-[80%] flex justify-between items-center`}
                            >
                                {headBtn()}

                                {blogBtn()}

                                <form
                                    className="w-[300px] border-[1px] border-[#B5B5B5FF] rounded-[8px] flex items-center px-4 py-3"
                                    action=""
                                >
                                    <img src="/img/search.svg" className="w-[20px]" alt="" />
                                    <input
                                        type="text"
                                        className="text-[#B5B5B5FF] ml-[15px] text-[14px] outline-none"
                                        onKeyUp={(e: any) => setSearhc(e.target.value)}
                                        placeholder={t('search')}
                                    />
                                </form>
                                <div className="flex items-center">
                                    <img className="w-[25px]" src="/img/bell.svg" alt="" />

                                    <div className="w-[100px] border-[#B5B5B5FF] border-l-[2px] border-r-[2px] ml-[20px] mr-[20px] px-5">
                                        <select
                                            className="text-[#B5B5B5FF] text-[20px] outline-none list-none"
                                            name=""
                                            id="select"
                                            onClick={(e: any) => changeLanguage(e.target.value)}
                                        >
                                            <option className=" hover:bg-[red]" value="ru">
                                                {t('ruLang')}
                                            </option>
                                            <option className="list-none" value="eng">
                                                {t('enLang')}
                                            </option>
                                        </select>
                                    </div>
                                    <img
                                        onClick={() => {
                                            localStorage.clear();
                                            location.reload();
                                        }}
                                        className="w-[30px]"
                                        src="/img/miniLogo.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader
                        sx={{
                            background: "#1F1E1E",
                            display: "flex",
                            justifyContent: "space-between",
                            height: "80px",
                        }}
                    >
                        <img src="/img/logoTwo.svg" alt="" />
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === "ltr" ? (
                                <img src="/img/menu.svg" alt="" />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </IconButton>
                    </DrawerHeader>
                    <List sx={{ background: "#2E2E2EFF" }}>
                        <div className="px-4 py-3">
                            <Link to={"/"}>
                                <div className="flex items-end ">
                                    <img src="/img/home.svg" alt="" />
                                    <p className="text-[18px] text-[#fff] font-semibold ml-[10px]">
                                        {t("menu")}
                                    </p>
                                </div>
                            </Link>

                            <nav className="flex flex-col justify-between h-[130px] pl-10 mt-[15px] text-[16px] text-[#fff] ">
                                <Link onClick={handleDrawerClose} to={"/"}>
                                    {t("client")}
                                </Link>
                                <Link onClick={handleDrawerClose} to={"/hotel"}>
                                    {t("hotel")}
                                </Link>
                                <Link onClick={handleDrawerClose} to={"/agency"}>
                                    {t("agency")}
                                </Link>
                                <Link onClick={handleDrawerClose} to={"/branches"}>
                                    {t("branch")}
                                </Link>
                            </nav>
                        </div>
                    </List>
                    <List sx={{ background: "#2E2E2EFF", height: "100%" }}>
                        <div className="w-[90%] m-auto border-[1px] border-[#646464]"></div>
                        {comppFilter()}
                    </List>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                </Main>
            </Box>
        </div>
    );
};

export default Header;
