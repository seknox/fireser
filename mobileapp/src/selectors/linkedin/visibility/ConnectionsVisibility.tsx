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

import { extractVisibility } from '../ExtractChecked';

export default {
  name: 'Connection Visibility',
  pageURL: 'https://www.linkedin.com/psettings/connections-visibility',
  tasks: [
    {
      extractFunc: extractVisibility,
      name: 'Who can see your connections',
      expectedValue: 'ONLY_ME',
      fixFunc: "document.querySelector('input[value=false]').click();",
      fixURL: 'https://www.linkedin.com/psettings/connections-visibility',
    },
  ],
};