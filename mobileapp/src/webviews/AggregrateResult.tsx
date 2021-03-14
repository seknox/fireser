/*
 *
 *   Copyright (C) 2021 Seknox Pte Ltd.
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

import { Job, ScanResult } from '../types/types';

export function aggregateResult(jobs: Job[]): ScanResult {
  var res: ScanResult = {
    privacyIssuesCount: 0,
    securityIssuesCount: 0,
    connectedDevices: [],
    connectedApps: {
      thirdPartyApps: [],
      signInApps: [],
    },
    securityIssues: [],
    privacyIssues: [],
  };
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    for (let j = 0; j < job.tasks.length; j++) {
      const task = job.tasks[j];

      switch (task.type) {
        case 'PRIVACY':
          if (task.expectedValue !== task.gotValue) {
            res.privacyIssuesCount++;
          }
          res.privacyIssues.push(task);
          continue;
        case 'SECURITY':
          if (task.expectedValue !== task.gotValue) {
            res.securityIssuesCount++;
          }
          res.securityIssues.push(task);
          continue;
        case 'CONNECTED_DEVICES':
          res.connectedDevices = task.gotValue;
          continue;
        case 'THIRD_PARTY_APPS':
          res.connectedApps.thirdPartyApps = task.gotValue;
          continue;
        case 'SIGNED_IN_APPS':
          res.connectedApps.signInApps = task.gotValue;
          continue;

        default:
          console.error('Invalid type', task.name);
      }
    }
  }

  return res;
}
