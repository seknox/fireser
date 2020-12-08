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

import ProfileVisibility from './visibility/profile';
import PublicProfileVisibility from './visibility/publicProfile';
import StoryVisibility from './visibility/StoryVisibility';
import ProfileInfoOnOtherContent from './visibility/ProfileInfoOnOtherContent';
import EmailVisibility from './visibility/emails';
import DataSharing from './DataSharing';
import ThirdPartySharing from './data/ThirdPartySharing';
import {
  AdsBasedOnActionsYouTookInResponseToAds,
  AdsBasedOnCompanies,
  AdsBasedOnConnections,
  AdsBasedOnDemographics,
  AdsBasedOnGroups,
  AdsBasedOnInformationYouSharedWithBusinesses,
  AdsBasedOnLocation,
  AdsBasedOnProfileData,
  AdsBeyondLinkedIn,
  InfoAboutVisitsToOtherWebsites,
} from './ad/Preferences';
import { AdsBasedOnIntrestCategories } from './ad/Preferences';
import SearchHistory from './data/SearchHistory';
import JobAlertsSharedWithRecruiters from './data/JobAlertsSharedWithRecruiters';
import ProfileSharedWithJobPoster from './data/ProfileSharedWithJobPoster';
const LinkedInSelectors = [
  AdsBasedOnIntrestCategories,
  AdsBasedOnProfileData,
  AdsBasedOnLocation,
  AdsBasedOnConnections,
  AdsBasedOnDemographics,
  AdsBasedOnGroups,
  AdsBasedOnCompanies,
  InfoAboutVisitsToOtherWebsites,
  AdsBeyondLinkedIn,
  AdsBasedOnInformationYouSharedWithBusinesses,
  AdsBasedOnActionsYouTookInResponseToAds,
  DataSharing,
  ThirdPartySharing,
  ProfileVisibility,
  PublicProfileVisibility,
  StoryVisibility,
  EmailVisibility,
  ProfileInfoOnOtherContent,
  SearchHistory,
  JobAlertsSharedWithRecruiters,
  ProfileSharedWithJobPoster,
];

export default LinkedInSelectors;
