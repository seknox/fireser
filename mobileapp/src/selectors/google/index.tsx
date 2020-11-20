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
import GoogleActivityHistory from './GoogleActivityHistory';
import GoogleSecurityStatus from './GoogleSecurityStatus';
import SecurityCheckup from './SecurityCheckup';
import AdPersonalization from "./AdPersonalization";
import AutoDeleteActivityHistory from "./autodelete/ActivityHistory";
import AutoDeleteLocationHistory from "./autodelete/Location";
import AutoDeleteYoutubeHistory from "./autodelete/YoutubeHistory";
const GoogleSelectors = [
    // GoogleActivityHistory,
    // AutoDeleteActivityHistory,
    AutoDeleteLocationHistory,
    AutoDeleteYoutubeHistory,
    // GoogleSecurityStatus,
    // SecurityCheckup,
    // AdPersonalization,

];
export default GoogleSelectors;
