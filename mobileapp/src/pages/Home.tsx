/**
 * Copyright (C) 2020 Seknox Pte Ltd.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import Layout from '../components/layout';
import SummaryCard from '../components/SummaryCard';


export default (): React.ReactElement => {
  const styles = useStyleSheet(themedStyles);


  return (

      <Layout>

      <SummaryCard />
      </Layout>

  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },


});
