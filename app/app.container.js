import React, { PureComponent } from 'react';
// import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Container from './components/base/Container/Container.component';
import AppRoutes from './routes';
// import { connect } from 'react-redux';

export default class AppComponent extends PureComponent {
  render() {
    return (
      <SafeAreaProvider>
        <Container>
          <AppRoutes />
        </Container>
      </SafeAreaProvider>
    );
  }
}

// export default connect(null, null)(AppComponent);
