import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    
    iconButton: {
        fontSize: 'inherit',
    },

    languageIcon: {
        fontSize: 'medium',
        paddingRight: '2px'
    },

    menuItem: {
        '&:hover': {
            color: '#10ABB0',
        },
    }

}))

const LanguageMenu = () => {
    const classes = useStyles();
    const { t, i18n } = useTranslation(['translation', 'welcome']);
    const [ languageCode, setLanguageCode ] = useState('');

// <--- Start of Nav toggle-menu media-query STYLES  ---> //

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const changeLanguage = (code) => {
        setAnchorEl(null);
        setLanguageCode(code)
        i18n.changeLanguage(code); // i18n language switch/toggle function
    };
    
// <--- END of Nav toggle-menu media-query STYLES ---> //

    return (
        <>
            <IconButton
                className={classes.iconButton}
                size='small'
                aria-label="Language switch"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <LanguageIcon className={classes.languageIcon}/>
                {languageCode ? languageCode : 'en'}
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
            >

                <MenuItem className={classes.menuItem} disableRipple onClick={() => changeLanguage('en')}>en</MenuItem>
                <MenuItem className={classes.menuItem} disableRipple onClick={() => changeLanguage('de')}>de</MenuItem>
            </Menu>      
        </>
    )
}

export default LanguageMenu;
