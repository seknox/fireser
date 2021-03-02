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

import { extractVisibility } from '../ExtractChecked';

export default {
  name: 'Email Visibility',
  pageURL: 'https://www.linkedin.com/psettings/privacy/email',
  tasks: [
    {
      extractFunc: extractVisibility,
      name: 'Who can see or download your email address',
      expectedValue: 'JUST_ME',
      fixFunc: "document.querySelector('input[id=just-me]').click();",
      fixURL: 'https://www.linkedin.com/psettings/privacy/email',
    },
  ],
};

export const DiscoverUsingEmail = {
  name: 'Email Visibility',
  pageURL: 'https://www.linkedin.com/mypreferences/m/settings/discover-me-by-email-address',
  tasks: [
    {
      extractFunc: extractVisibility,
      name: 'Who can discover your profile with your email address',
      expectedValue: 'JUST_ME',
      fixFunc: "document.querySelector('input[id=first]').click()",
      fixURL: 'https://www.linkedin.com/mypreferences/m/settings/discover-me-by-email-address',
    },
  ],
};

export const DiscoverUsingPhone = {
  name: 'Phone Visibility',
  pageURL: 'https://www.linkedin.com/mypreferences/m/settings/discover-me-by-phone-number',
  tasks: [
    {
      extractFunc: extractVisibility,
      name: 'Who can discover your profile with your phone',
      expectedValue: 'JUST_ME',
      fixFunc: "document.querySelector('input[id=first]').click()",
      fixURL: 'https://www.linkedin.com/mypreferences/m/settings/discover-me-by-phone-number',
    },
  ],
};
