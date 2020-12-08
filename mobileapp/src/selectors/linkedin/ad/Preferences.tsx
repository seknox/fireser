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

import {clickChecked, extractChecked} from '../ExtractChecked';

export const AdsBasedOnIntrestCategories = {
  name: 'Personalised ads',
  pageURL: 'https://www.linkedin.com/psettings/advertising/li-enterprise-product',
  tasks: [
    {
      extractFunc: extractChecked,
      fixFunc: clickChecked,
      name: 'Interest Categories',
      expectedValue: 'No',
      fixURL: 'https://www.linkedin.com/psettings/advertising/li-enterprise-product',
    },
  ],
};

export const AdsBasedOnProfileData = {
  name: 'Personalised ads',
  pageURL: 'https://www.linkedin.com/psettings/advertising/profile-data',
  tasks: [
    {
      extractFunc: extractChecked,
      fixFunc: clickChecked,
      name: 'Use your profile data',
      expectedValue: 'FALSE',
      fixURL: 'https://www.linkedin.com/psettings/advertising/profile-data',
    },
  ],
};

export const AdsBasedOnConnections = {
  name: 'Personalised ads',
  pageURL: 'https://www.linkedin.com/psettings/advertising/connections',
  tasks: [
    {
      extractFunc: extractChecked,
      fixFunc: clickChecked,
      name: 'Ads based on connections',
      expectedValue: 'FALSE',
      fixURL: 'https://www.linkedin.com/psettings/advertising/connections',
    },
  ],
};

export const AdsBasedOnLocation = {
  name: 'Personalised ads',
  pageURL: 'https://www.linkedin.com/psettings/advertising/location',
  tasks: [
    {
      extractFunc: extractChecked,
      fixFunc: clickChecked,
      name: 'Ads based on locations',
      expectedValue: 'FALSE',
      fixURL: 'https://www.linkedin.com/psettings/advertising/location',
    },
  ],
};
export const AdsBasedOnDemographics = {
  name: 'Personalised ads',
  pageURL: 'https://www.linkedin.com/psettings/advertising/demographics',
  tasks: [
    {
      extractFunc: extractChecked,
      fixFunc: clickChecked,
      name: 'Ads based on demographics',
      expectedValue: 'FALSE',
      fixURL: 'https://www.linkedin.com/psettings/advertising/demographics',
    },
  ],
};

export const AdsBasedOnCompanies = {
  name: 'Personalised ads',
  pageURL: 'https://www.linkedin.com/psettings/advertising/companies-followed',
  tasks: [
    {
      extractFunc: extractChecked,
      fixFunc: clickChecked,
      name: 'Ads based on companies you follow',
      expectedValue: 'FALSE',
      fixURL: 'https://www.linkedin.com/psettings/advertising/companies-followed',
    },
  ],
};

export const AdsBasedOnGroups = {
  name: 'Personalised ads',
  pageURL: 'https://www.linkedin.com/psettings/advertising/groups-joined',
  tasks: [
    {
      extractFunc: extractChecked,
      fixFunc: clickChecked,
      name: 'Ads based on groups you joined',
      expectedValue: 'FALSE',
      fixURL: 'https://www.linkedin.com/psettings/advertising/groups-joined',
    },
  ],
};

export const InfoAboutVisitsToOtherWebsites = {
  name: 'Personalised ads',
  pageURL: 'https://www.linkedin.com/psettings/advertising/websites-visited',
  tasks: [
    {
      extractFunc: extractChecked,
      fixFunc: clickChecked,
      name: 'Ads based on info about your visit to other sites',
      expectedValue: 'FALSE',
      fixURL: 'https://www.linkedin.com/psettings/advertising/websites-visited',
    },
  ],
};

export const AdsBeyondLinkedIn = {
  name: 'Personalised ads',
  pageURL: 'https://www.linkedin.com/psettings/advertising/ads-beyond-linkedin',
  tasks: [
    {
      extractFunc: extractChecked,
      fixFunc: clickChecked,
      name: 'Ads beyond LinkedIn',
      expectedValue: 'FALSE',
      fixURL: 'https://www.linkedin.com/psettings/advertising/ads-beyond-linkedin',
    },
  ],
};

export const AdsBasedOnInformationYouSharedWithBusinesses = {
  name: 'Personalised ads',
  pageURL: 'https://www.linkedin.com/psettings/advertising/actions-that-showed-interest',
  tasks: [
    {
      extractFunc: extractChecked,
      fixFunc: clickChecked,
      name: 'Ads Based On Information You Shared With Businesses',
      expectedValue: 'FALSE',
      fixURL: 'https://www.linkedin.com/psettings/advertising/actions-that-showed-interest',
    },
  ],
};

export const AdsBasedOnActionsYouTookInResponseToAds = {
  name: 'Personalised ads',
  pageURL: 'https://www.linkedin.com/psettings/advertising/actions-after-viewing-ads',
  tasks: [
    {
      extractFunc: extractChecked,
      fixFunc: clickChecked,
      name: 'Ads Based On Actions You Took In Response To Ads',
      expectedValue: 'FALSE',
      fixURL: 'https://www.linkedin.com/psettings/advertising/actions-after-viewing-ads',
    },
  ],
};
