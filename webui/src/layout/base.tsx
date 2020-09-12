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

import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import React, { useEffect, useState } from 'react';
import Constants from '../constants';
import Navigator from './navigator';
import Bot from './bot'

const drawerWidth = 100
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    background: '#f0f5fc',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  appContent: {
    // flex: 1,
    // display: 'flex',
    // flexDirection: 'column',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  mainContent: {
    flex: 1,
    // padding: '48px 36px 0',
    //  background: '#030417', //'#eaeff1',
  },
  bot: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  }
}));

type DashboardBaseProps = {
  children?: React.ReactNode;
};

export default function DashboardBase(props: DashboardBaseProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <nav className={classes.drawer}>
        <Navigator

        />
      </nav>
      <div className={classes.bot}>
        <Bot />
      </div>


    </div>

  );
}
