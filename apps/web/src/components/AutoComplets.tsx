'use client';

import useGetEvents from '@/hooks/api/event/useGetEvents';
import { appConfig } from '@/utils/config';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { debounce } from 'lodash';



interface EventOption {
  value: number;
  label: string;
}

const Autocomplete = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  const { data, isLoading } = useGetEvents({ search });
  const loadOptions = (
    inputValue: string,
    callback: (options: EventOption[]) => void,
  ) => {
    try {
      const options = data.map((event) => {
        return {
          label: event.title,
          value: event.id,
        };
      });
      callback(options);
      setSearch(inputValue);
    } catch (error) {
      callback([]);
    }
  };
  const debouncedLoadOptions = debounce(loadOptions, 750);
  return (
    <AsyncSelect
      placeholder="search for articles"
      className="mx-auto my-4 max-w-[650px] text-black"
      loadOptions={debouncedLoadOptions}
      isLoading={isLoading}
      onChange={(event) => {
        router.push(appConfig.baseUrlNext + `/${event?.value}`);
      }}
    />
  );
};

export default Autocomplete;
