import React, { useState } from "react";
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
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import { FormControlLabel, FormGroup } from "@mui/material";

interface HeaderProps { }

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

    const id = window.location.href.split('/').at(-1)

    const headBtn = () => {
        if (id === 'agency') {
            return (
                <div className="flex items-center">
                    <img src="/img/plus-circle.svg" className="w-[20px]" alt="" />
                    <p className="text-[#B5B5B5FF] ml-[15px] text-[16px]">Создать агентства</p>
                </div >
            )
        } else if (id === 'hotel') {
            return (
                <Link to={'/addhotel'}>
                    <div className="flex items-center">
                        <img src="/img/plus-circle.svg" className="w-[20px]" alt="" />
                        <p className="text-[#B5B5B5FF] ml-[15px] text-[16px]">Создать отель</p>
                    </div >
                </Link>
            )
        } else if (id === 'branches') {
            return (
                <div className="flex items-center">
                    <img src="/img/plus-circle.svg" className="w-[20px]" alt="" />
                    <p className="text-[#B5B5B5FF] ml-[15px] text-[16px]">Создать филиалы</p>
                </div >
            )
        } else if (id === '') {
            return (
                <Link to={'/addclient'}>
                    <div className="flex items-center">
                        <img src="/img/plus-circle.svg" className="w-[20px]" alt="" />
                        <p className="text-[#B5B5B5FF] ml-[15px] text-[16px]">Создать клиента</p>
                    </div >
                </Link>
            )
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
            <Box sx={{ display: "flex", maxWidth: '1440px' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} sx={{ background: 'white', boxShadow: 'none' }}>
                    <Toolbar >
                        <IconButton
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, color: '#B5B5B5FF', ...(open && { display: "none" }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <div className="max-w-[1440px] w-full h-[80px] m-auto flex justify-between items-center">
                            <img src="/img/logo.svg" className={`${open ? "hidden" : 'block'} w-[120px]`} alt="" />

                            <div className={`${open ? "ml-[20%]" : 'justify-between'} w-[80%] flex justify-between items-center`}>

                                {
                                    headBtn()
                                }

                                <div className="flex items-center">
                                    <img src="/img/settings.svg" className="w-[20px]" alt="" />
                                    <p className="text-[#B5B5B5FF] ml-[15px] text-[16px]">Создать блог</p>
                                </div >

                                <form className="w-[300px] border-[1px] border-[#B5B5B5FF] rounded-[8px] flex items-center px-4 py-3" action="">
                                    <img src="/img/search.svg" className="w-[20px]" alt="" />
                                    <input type="text" className="text-[#B5B5B5FF] ml-[15px] text-[14px] outline-none" placeholder="Поиск..." />
                                </form>
                                <div className="flex items-center">
                                    <img className="w-[25px]" src="/img/bell.svg" alt="" />

                                    <div className="w-[100px] border-[#B5B5B5FF] border-l-[2px] border-r-[2px] ml-[20px] mr-[20px] px-5">
                                        <select className="text-[#B5B5B5FF] text-[20px] outline-none list-none" name="" id="select">
                                            <option className=" hover:bg-[red]" value="ru">RU</option>
                                            <option className="list-none" value="eng">ENG</option>
                                        </select>
                                    </div>
                                    <img className="w-[30px]" src="/img/miniLogo.svg" alt="" />
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
                    <DrawerHeader sx={{ background: '#1F1E1E', display: 'flex', justifyContent: 'space-between', height: '80px' }}>
                        <img src="/img/logoTwo.svg" alt="" />
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === "ltr" ? (
                                <img src="/img/menu.svg" alt="" />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </IconButton>

                    </DrawerHeader>
                    <List sx={{ background: '#2E2E2EFF' }}>
                        <div className="px-4 py-3">

                            <Link to={"/signup"}>
                                <div className="flex items-end ">
                                    <img src="/img/home.svg" alt="" />
                                    <p className="text-[18px] text-[#fff] font-semibold ml-[10px]">Меню</p>
                                </div>
                            </Link>

                            <nav className="flex flex-col justify-between h-[130px] pl-10 mt-[15px] text-[16px] text-[#fff] ">
                                <Link to={"/"} ><p>Клиенты</p></Link>
                                <Link to={"/hotel"} ><p>Отели</p></Link>
                                <Link to={"/agency"} ><p>Тур Агентства</p></Link>
                                <Link to={"/branches"} ><p>Филиалы</p></Link>
                            </nav>
                        </div>
                    </List>
                    <List sx={{ background: '#2E2E2EFF', height: '100%' }}>
                        <div className="w-[90%] m-auto border-[1px] border-[#646464]"></div>
                        <div className="px-4 py-3">

                            <div className="flex items-end mb-[30px]">
                                <img src="/img/filter.svg" alt="" />
                                <p className="text-[18px] text-[#fff] font-semibold ml-[10px]">Фильтр</p>
                            </div>

                            <p className="text-[18px] text-[#fff] font-medium mb-[15px]">Статус</p>

                            <FormGroup>
                                <FormControlLabel sx={{ color: '#fff', fontSize: '16px' }} control={<Checkbox sx={{ color: '#B5B5B5FF' }} />} label="Новое" />
                                <FormControlLabel sx={{ color: '#fff', fontSize: '16px' }} control={<Checkbox sx={{ color: '#B5B5B5FF' }} />} label="Запрос отправлен" />
                                <FormControlLabel sx={{ color: '#fff', fontSize: '16px' }} control={<Checkbox sx={{ color: '#B5B5B5FF' }} />} label="В процессе" />
                                <FormControlLabel sx={{ color: '#fff', fontSize: '16px' }} control={<Checkbox sx={{ color: '#B5B5B5FF' }} />} label="Забронировал" />
                                <FormControlLabel sx={{ color: '#fff', fontSize: '16px' }} control={<Checkbox sx={{ color: '#B5B5B5FF' }} />} label="Выкупил билеты" />
                                <FormControlLabel sx={{ color: '#fff', fontSize: '16px' }} control={<Checkbox sx={{ color: '#B5B5B5FF' }} />} label="Прибыл" />
                            </FormGroup>
                        </div>
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
