/*
 *
 *   Copyright (C) 2020 Seknox Pte Ltd.
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as
 *   published by the Free Software Foundation, either version 3 of the
 *   License, or (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Affero General Public License for more details.
 *
 *   You should have received a copy of the GNU Affero General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

//
export type Account = {
  loginURL: string;
  checkLogin: string;
  loginFunc: string;
  // unameSelector: string;
  // passwordSelector: string;
  jobList: Job[];
};

export type Job = {
  name: string;
  pageURL: string;
  isLoggedInFunc: string;
  tasks: Task[];
};

export type Task = {
  extractFunc: (htmlContent: string) => Promise<string | boolean>; // function to extract certain data from a html content
  name: string;
  description: string;
  expectedValue: string;
  gotValue: any;
  fixURL: string; // url to fix the setting if expectedValue!=gotvalue
  fixFunc: string; // function to automatically fix the setting
  //onFixed: () => {};
  type: 'SECURITY' | 'PRIVACY' | 'CONNECTED_DEVICES' | 'THIRD_PARTY_APPS' | 'SIGNED_IN_APPS';
};

export type Fixable = {
  fixUrl: string;
  fixFunc: string;
  name: string;
};

export type Device = {
  name: string;
  os: string;
  imageURL: string;
};

export type Apps = {
  name: string;
  imgURL: string;
  permissions: string;
};

export type ScanResult = {
  privacyIssuesCount: number;
  securityIssuesCount: number;
  privacyIssues: Task[];
  securityIssues: Task[];
  connectedDevices: Device[];
  connectedApps: {
    thirdPartyApps: Apps[];
    signInApps: Apps[];
  };
};

// ScanObject represents data type related to scan event
export type ScanObject = {
  id: string; // Unique of scan object. This is requied because e.g. there might be two or more google accounts.
  accountName: string; // Google, Facebook
  email: string;
  username: string; // Username or firstname
  scanResult: ScanResult;
  firstScanned: string;
  lastScanned: string;
};
