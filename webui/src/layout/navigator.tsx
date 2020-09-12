/**
 * Copyright (C) 2020 Seknox Pte Ltd.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

// import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
// import logo from '../assets/fireser.svg';
// import logo from '../assets/firebot-face-fire.svg'
import { Grid, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SvgIcon from '@material-ui/core/SvgIcon';
import ServiceIcon from '@material-ui/icons/Apps';
import DashbordIcon from '@material-ui/icons/Assessment';
import ControlIcon from '@material-ui/icons/SecuritySharp';
import SettingsIcon from '@material-ui/icons/Settings';
import Account from '@material-ui/icons/SupervisedUserCircle';
import React from 'react';

function HomeIcon(props: any) {
  return (
    <SvgIcon {...props}>
      {props.path}
    </SvgIcon>
  );
}

const categories = () => {
  const ar = [];
  ar.push({
    id: 'Overview',
    path: 'overview',
    icon: <DashbordIcon />,
    children: [],
  });

  ar.push({
    id: 'Device',
    path: 'control',
    icon: <ControlIcon />,
    children: [],
  });

  ar.push({
    id: 'Accounts',
    path: 'control',
    icon: <Account />,
    children: [],
  });

  // ar.push({
  //   id: 'Integrations',
  //   path: 'monitor/sessions',
  //   icon: <ServiceIcon />,
  //   children: [],
  // });

  ar.push({
    id: 'Settings',
    path: 'system',
    icon: <SettingsIcon />,
    children: [],
  });

  // }

  return ar;
};

const NormalUsersMenu = [
  {
    id: 'My',
    path: 'my',
    icon: <Account />,
    children: [
      // { id: 'Group', path: 'groups', icon: <SettingsIcon /> },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  categoryHeader: {
    color: 'black', // 'black',
    fontSize: '15px',
    fontFamily: 'Open Sans, Rajdhani',
  },
  categoryHeaderPrimary: {
    color: 'black', // 'black',
    fontSize: '18px',
    fontWeight: 500,
    fontFamily: 'Open Sans, Rajdhani',
  },
  item: {
    color: 'black', // '#404854',
  },
  itemCategory: {
    boxShadow: '0 -1px 0 #404854 inset',
    color: 'white',
  },
  firebase: {
    fontSize: 24,
    backgroundColor: '#eeeeee', // 'rgb(3,4,27)',   //'#030417', // rgb(3,4,27)
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white,
  },
  itemActionable: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    color: 'black', // 'black',
    fontSize: '15px',
    fontFamily: 'Open Sans, Rajdhani',
  },
  textDense: {},
  divider: {
    //   marginTop: theme.spacing(2),
  },
  logoImage: {
    width: 30,
    height: 20,
  },
  toolbar: {
    color: 'white',
    backgrounColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  logo: {
    // backgroundColor: 'rgba(1,1,35,1)', // 'rgba(1,1,35,1)','#000066'
    paddingLeft: '70px',
    paddingRight: '15px',
    paddingTop: '35px',
    paddingBottom: '50px',
  },
  drawer: {
    // width: 200
    background: 'white',
    width: 200,
    //  boxShadow: '0 0 20px 0 rgba(0,0,0,0.12)',
    minHeight: '100vh',
  },
  drawerPaper: {
    fontSize: '50px',
  },
  icon: {
    color: '#0570f6',
    fontSize: '50px',
    minHeight: 50,
    marginLeft: '40%',
  }
}));

export default function Navigator(props: any) {
  const classes = useStyles();
  // const [open, setopen] = React.useState(false);

  return (
    <Paper className={classes.drawer} elevation={0}>
      <div className={classes.logo}>
        {/* <img src={logo} alt="logo" width={70} /> */}
      </div>

      <List disablePadding>
        {
          categories().map(({ id, children, path, icon }) => (
            <React.Fragment key={id}>
              <Grid container spacing={4} direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                  {/* <Icon fontSize="inherit" className={classes.icon} >{icon}</Icon> */}
                  <HomeIcon style={{
                    color: '#0570f6',
                    fontSize: '40px',
                    marginLeft: '30%'
                  }} path={icon} />
                  <Typography variant="h4">
                    {id}
                  </Typography>
                </Grid>

              </Grid>

            </React.Fragment>
          ))}
      </List>
    </Paper>
  );
}
