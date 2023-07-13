import React, { useState } from "react";
import TimePeriod from "../components/ui/filters/TimePeriod";

type FiltersContextObj = {
  geographicResolution: string,
  geographicFilter: string,
  temporalResolution: string,
  timePeriod: string
}

const defaultContextValue: FiltersContextObj = {
  geographicResolution: '',
  geographicFilter: '',
  temporalResolution: '',
  timePeriod: ''
};

export const FiltersContext = React.createContext<FiltersContextObj>(defaultContextValue);

const FiltersContextProvider: React.FC = (props) => {

  const [geographicResolution, setGeographicResolution] = useState<string>('');
  const [geographicFilter, setGeographicFilter] = useState<string>('');

  const contextValue: FiltersContextObj = {
    geographicResolution,
    geographicFilter,
    temporalResolution: '',
    timePeriod: ''
  };

  return (
    <FiltersContext.Provider value={contextValue}>
      {props.children}
    </FiltersContext.Provider>
  );
}

export default FiltersContextProvider;
