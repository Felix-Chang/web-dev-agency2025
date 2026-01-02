'use client';

import React, { createContext, useContext } from 'react';
import { useDeviceType, type DeviceType } from '../hooks/useDeviceType';

const DeviceContext = createContext<DeviceType>(null);

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const deviceType = useDeviceType();

  return (
    <DeviceContext.Provider value={deviceType}>
      {children}
    </DeviceContext.Provider>
  );
}

export function useDevice() {
  return useContext(DeviceContext);
}
