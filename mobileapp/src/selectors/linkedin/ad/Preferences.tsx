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

import { extractChecked } from '../ExtractChecked';

export const IntrestCategories = {
  name: 'Personalised ads',
  pageURL: 'https://www.linkedin.com/psettings/advertising/li-enterprise-product',
  tasks: [
    {
      extractFunc: extractChecked,
      name: 'Interest Categories',
      expectedValue: 'No',
      fixURL: 'https://www.linkedin.com/psettings/advertising/li-enterprise-product',
    },
  ],
};

export const ProfileData = {
  name: 'Personalised ads',
  pageURL: 'https://www.linkedin.com/psettings/advertising/profile-data',
  tasks: [
    {
      extractFunc: extractChecked,
      name: 'Use your profile data',
      expectedValue: 'FALSE',
      fixURL: 'https://www.linkedin.com/psettings/advertising/profile-data',
    },
  ],
};

export const Connections = {
  name: 'Personalised ads',
  pageURL: 'https://www.linkedin.com/psettings/advertising/connections',
  tasks: [
    {
      extractFunc: extractChecked,
      name: 'Ads based on connections',
      expectedValue: 'FALSE',
      fixURL: 'https://www.linkedin.com/psettings/advertising/connections',
    },
  ],
};

export const Location = {
  name: 'Personalised ads',
  pageURL: 'https://www.linkedin.com/psettings/advertising/location',
  tasks: [
    {
      extractFunc: extractChecked,
      name: 'Ads based on locations',
      expectedValue: 'FALSE',
      fixURL: 'https://www.linkedin.com/psettings/advertising/location',
    },
  ],
};
