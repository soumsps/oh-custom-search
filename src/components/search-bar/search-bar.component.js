import React, { useState, useEffect } from 'react';
import InputField from '../input-field/input-field.component';

const KeyCodes = { ENTER: 13 };
const API_KEY = 'AIzaSyBLmOT1x_5DLAVj6nElNS26kAW1QbCvNmQ';
const CX_ID = '015953220781469061226:qzqi_1frttk';
const searchParameter = 'q';

const SearchBar = ({ setSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const callApi = async () => {
      const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX_ID}&${searchParameter}=${searchTerm}`;

      const response = await fetch(url);

      if (response.ok) {
        const json = await response.json();
        setSearchResult(json.items);
      } else {
        console.error(response.status);
      }
    };

    const handelKeyPress = (event) => {
      switch (event.keyCode) {
        case KeyCodes.ENTER:
          callApi();
          break;
        default:
      }
    };

    document.onkeydown = handelKeyPress;
  }, [searchTerm, setSearchResult]);

  return (
    <InputField
      value={searchTerm}
      onChangeCallback={onChangeHandler}
      className={'oh-custom-search'}
    />
  );
};

export default SearchBar;
