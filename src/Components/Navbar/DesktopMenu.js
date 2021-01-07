import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';

/************************************************************************************/
                    // START DesktopMenu.js STYLES //
/************************************************************************************/
const useStyles = makeStyles((theme) => ({
    
    toolBarOptions: {
        justifyContent: 'space-between',
        minHeight: '11px',
        background: 'rgb(37, 37, 37)',
    },

    desktopNav: {
        display: "flex",
        justifyContent: "space-between",
        width: '100%'
    },

    deskTopNavTypo: {
        textTransform: 'capitalize',
        borderRadius: '0',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        color: 'white',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#10ABB0',
            color: 'white',
        },
    },
}))


const DesktopMenu = () => {
    const classes = useStyles();
    const { t } = useTranslation(['navbar']);  // i18n component

    // <--- START - JSX items list ---> //

    const menuItems = [
        {
            'menuTitle': 'navbar:home',
            'offset': -70,
            'component-id': 'home'
        },
        {
            'menuTitle': 'navbar:about',
            'offset': 5,
            'component-id': 'about-me'
        },
        {
            'menuTitle': 'navbar:portfolio',
            'offset': 5,
            'component-id': 'Portfolio'
        },
        {
            'menuTitle': 'navbar:contact',
            'offset': -70,
            'component-id': 'contact'
        },
    ];
    
    // <--- END - JSX items list ---> //

    return (
        <>
            <div className={classes.desktopNav}>
                {menuItems.map(menuItem => {
                    return (
                        <Link activeClass="active" to={menuItem['component-id']} spy={true} smooth={true} offset={menuItem.offset} duration={1000}>
                            <Button vartiant='body2' className={classes.deskTopNavTypo}>{t(menuItem.menuTitle)}</Button>
                        </Link> 
                    )
                })}
            </div>
        </>
    )
}

export default DesktopMenu;
