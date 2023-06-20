import { useQuery } from '@tanstack/react-query';
import { getInfo } from 'apis';

export const useInfo = () => useQuery(['getInfo'], getInfo);
