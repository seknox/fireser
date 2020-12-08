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

import React from 'react';

import { clickChecked, extractChecked } from '../ExtractChecked';

export default {
  name: 'Job Alerts Shared with recruters',
  pageURL: 'https://www.linkedin.com/psettings/jobs/job-alerts-shared-with-recruiters',
  tasks: [
    {
      extractFunc: extractChecked,
      name: 'Job Alerts Shared with recruters',
      description:
        'Signal your interest to recruiters at companies you have created job alerts for',
      expectedValue: 'FALSE',
      fixFunc: clickChecked,
      fixURL: 'https://www.linkedin.com/psettings/jobs/job-alerts-shared-with-recruiters',
    },
  ],
};
