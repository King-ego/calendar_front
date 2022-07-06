import React from 'react';
import * as Interface from 'Common/Interfaces';
import { ProviderAplicationData } from './AplicationData';
import { ProviderAplicationDataView } from './AplicationDataView';
import { ProviderUserData } from './UserData';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Style/Theme';

const Provider: React.FC<Interface.ReactChildren> = ({
  children,
}): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <ProviderAplicationData>
        <ProviderAplicationDataView>
          <ProviderUserData>{children}</ProviderUserData>
        </ProviderAplicationDataView>
      </ProviderAplicationData>
    </ThemeProvider>
  );
};

export default Provider;
