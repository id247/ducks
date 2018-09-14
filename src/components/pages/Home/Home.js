import React, { Component } from 'react';

import Layout from '../../common/Layout';
import Welcome from '../../features/Welcome';

export default class Home extends Component {
  render() {
    return (
      <Layout pageTitle="Welcome">
        <Welcome />
      </Layout>
    );
  }
}
