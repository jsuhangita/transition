import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import Container from './components/base/container.component';
// import { connect } from 'react-redux';

export default class AppComponent extends PureComponent {
  render() {
    return (
      <Container>
        <Text>Base app</Text>
      </Container>
    );
  }
}

// export default connect(null, null)(AppComponent);
