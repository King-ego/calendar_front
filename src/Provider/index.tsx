import React from 'react';
import * as Interface from 'Common/Interfaces';
import { ProviderAplicationData } from './AplicationData';
import { ProviderAplicationDataView } from './AplicationDataView';
import { ProviderUserData } from './UserData';

const Provider: React.FC<Interface.ReactChildren> = ({
  children,
}): JSX.Element => {
  return (
    <ProviderAplicationData>
      <ProviderAplicationDataView>
        <ProviderUserData>{children}</ProviderUserData>
      </ProviderAplicationDataView>
    </ProviderAplicationData>
  );
};

export default Provider;
