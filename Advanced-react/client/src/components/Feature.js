import React, { Component } from 'react';
import RequireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return (
      <div>
        This is a feature page!
      </div>
    )
  }
}

export default RequireAuth(Feature);