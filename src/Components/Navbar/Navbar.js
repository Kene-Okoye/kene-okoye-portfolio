import React from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import myLogo from '../../Assets/Images/myLogo-2.png';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import LanguageMenu from './LanguageMenu';

// START Navbar.js STYLES //

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    myLogo: {
        height: '50px',
        width: '50px',
    },
    
    toolBarOptions: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(5),
        justifyContent: 'space-between',
        minHeight: '11px',
        background: 'rgb(37, 37, 37)',
    },

    navList: {
        display: 'flex',
        justifyContent: 'center'
    }
}))
// END Navbar.js STYLES //

const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <>
        <div id="myHeader" className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.toolBarOptions}>
                    <img src={myLogo} alt='my logo' className={classes.myLogo}/>
                    <div className={classes.navList}>
                        <LanguageMenu/>
                        
                        { isMobile ? (
                            <MobileMenu/>
                        ) : ( 
                            <DesktopMenu/>
                        )}
                    </div>
                    
                </Toolbar>
            </AppBar>
        </div>
    </>
    )
}

export default Navbar;