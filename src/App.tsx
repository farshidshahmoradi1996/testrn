import React from 'react';
import Home from './pages/Home';
import {SWRConfig, ConfigInterface} from 'swr';
import fetcher from './utils/fetch';
const App: React.FC = () => {
  //fetching config
  const swrConfig: ConfigInterface = {
    fetcher,
    errorRetryInterval: 5,
    loadingTimeout: 5,
    shouldRetryOnError: false,
  };

  //root
  return (
    <SWRConfig value={swrConfig}>
      <Home />
    </SWRConfig>
  );
};

export default App;
