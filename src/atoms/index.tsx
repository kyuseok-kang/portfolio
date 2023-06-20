import { atomFamily, useRecoilState, useResetRecoilState } from 'recoil';

export interface IValue {
  id: string;
  value: string | number | null;
}

export const valueState = atomFamily<IValue, string>({
  key: 'key',
  default: (id) => ({ id, value: null })
});

export const useValueState = (id: string) => {
  const [value, setValue] = useRecoilState(valueState(id));
  const reset = useResetRecoilState(valueState(id));

  return { value: value.value, setValue, reset };
};
