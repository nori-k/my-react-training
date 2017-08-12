import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, MenuItem, Drawer } from 'material-ui';

class NavBar extends Component {
    render() {
        return(
            <MuiThemeProvider>
                <div>
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.props.open}
                        onRequestChange={() => this.props.onToggle()}
                    >
                        <MenuItem>HOME</MenuItem>
                        <MenuItem>MENU</MenuItem>
                        <MenuItem>ABOUT</MenuItem>
                        <MenuItem>CONTENTS</MenuItem>
                        <MenuItem>BLOG</MenuItem>
                        <MenuItem>CONTACT</MenuItem>
                        <MenuItem>RECRUIT</MenuItem>
                    </Drawer>
                    <AppBar
                        title="My First React SideBar Menu"
                        onLeftIconButtonTouchTap={ () => this.props.onToggle()}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}
export default NavBar;
