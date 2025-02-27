'use client';
// import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

type SearchBarProps = {
  onTermChange: (term: string) => Promise<void>;
};

export default function SearchBar({ onTermChange }: SearchBarProps) {
  // const [term, setTerm] = useState('');

  const debounced = useDebouncedCallback((value) => onTermChange(value), 500);

  return (
    <div>
      <input
        className="border rounded-md w-full text-xl p-2"
        type="text"
        // value={term}
        onChange={(e) => {
          // setTerm(e.target.value);
          debounced(e.target.value);
        }}
        placeholder='Search for a video...'
      />
    </div>
  );
}
