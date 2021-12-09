import React from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const LogContext = createContext(null);

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState(
    Array.from({length: 10})
      .map((_, index) => ({
        id: uuidv4(),
        title: `Log ${index}`,
        body: `Log ${index}`,
        date: new Date().toISOString(),
      }))
      .reverse(),
  );

  const onModify = modified => {
    const nextLogs = logs.map(log => {
      return log.id === modified.id ? modified : log;
    });
    setLogs(nextLogs);
  };

  const onRemove = id => {
    const nextLogs = logs.filter(f => f.id !== id);
    setLogs(nextLogs);
  };

  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
