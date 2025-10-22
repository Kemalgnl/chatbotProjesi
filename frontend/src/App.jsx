import { memo } from 'react';
import Sidebar from './bilesenler/Sidebar/Sidebar';
import Main from './bilesenler/main/main';

const App = () => {
  return (
    <>
      <Sidebar/>
      <Main/>
    </>
  );
};

export default memo(App);