import React, { Component } from 'react';

import Layout from '../../common/Layout';
import Counters from '../../features/Counters';

export default class Home extends Component {
  render() {
    return (
      <Layout pageTitle="Counter">
        <Counters />
      </Layout>
    );
  }
}
