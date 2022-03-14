import React from 'react';
import { combineFuri } from './utils';

export function useFuriPairs(word, reading, furi) {
  return React.useMemo(() => combineFuri(word, reading, furi), [word, reading, furi]);
}
