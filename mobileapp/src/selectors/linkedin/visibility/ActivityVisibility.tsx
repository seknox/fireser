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

import { clickChecked, extractChecked, extractVisibility } from '../ExtractChecked';

export const ActiveStatusVisibility = {
  name: 'LinkedIn Visibility',
  pageURL: 'https://www.linkedin.com/psettings/presence',
  tasks: [
    {
      extractFunc: extractVisibility,
      name: 'Active Status Visibility',
      expectedValue: 'HIDDEN',
      fixFunc: "document.querySelectorAll('input#option-hidden').click();",
      fixURL: 'https://www.linkedin.com/psettings/presence',
    },
  ],
};

export const WorkAnniversariesVisibility = {
  name: 'LinkedIn Visibility',
  pageURL: 'https://www.linkedin.com/psettings/activity-broadcast',
  tasks: [
    {
      extractFunc: extractChecked,
      name: 'Work Anniversaries Visibility',
      expectedValue: 'FALSE',
      fixFunc: clickChecked,
      fixURL: 'https://www.linkedin.com/psettings/activity-broadcast',
    },
  ],
};

export const NewsMentionsVisibility = {
  name: 'LinkedIn Visibility',
  pageURL: 'https://www.linkedin.com/psettings/activity-broadcast',
  tasks: [
    {
      extractFunc: extractChecked,
      name: 'News Mentions Visibility',
      description:
        'whether linkedin notify people in your network that you’ve been mentioned in an article or blog post',
      expectedValue: 'FALSE',
      fixFunc: clickChecked,
      fixURL: 'https://www.linkedin.com/psettings/activity-broadcast',
    },
  ],
};
