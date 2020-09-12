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
import { Grid, Typography, Paper } from '@material-ui/core'

import React, { useEffect, useState } from 'react';
import Constants from '../constants';

import Navigator from './navigator';

import Firebot from '../assets/firebot-face-fire.svg'

const drawerWidth = 100
const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    minHeight: '100vh',
    background: '#f0f5fc',
    marginLeft: '3%',
    textAlign: 'left',
  },

  botIcon: {
    // marginLeft: '3%',
    width: 120,
  },
  actions: {
    padding: theme.spacing(2),
    border: 8,
    boxShadow: '0 0 20px 0 #f0f5fc',
    textAlign: 'center',
  }
}));

type DashboardBaseProps = {
  children?: React.ReactNode;
};

export default function DashboardBase(props: DashboardBaseProps) {
  const classes = useStyles();

  const [anchorState, setAnchorState] = React.useState(false);

  return (

    <div className={classes.root}>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12}>
          <img src={Firebot} className={classes.botIcon} />
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0} className={classes.actions}>
            <Typography variant='h4'>
              Start securing your devices
              </Typography>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0} className={classes.actions}>
            <Typography variant='h4'>
              Start securing your accounts
              </Typography>
          </Paper>
        </Grid>
      </Grid>

    </div>

  );
}
