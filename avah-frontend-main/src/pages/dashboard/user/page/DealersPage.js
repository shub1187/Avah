import React from 'react';
import { useSelector } from 'react-redux';


const DealersPage = (props) => {

    
  const { appState } = useSelector((state) => state.appState);

  // const { appState } = useSelector((state) => state.appState.appState);

  var menuname = appState.appState
  console.log("000----0000---Dealers---------"+menuname)

  return (
    <div>Dealers</div>
  );
};

export default DealersPage;