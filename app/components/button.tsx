'use client';

import { useState } from 'react';

type ButtonProp = {
  defaultText: string;
};

export default function Button({ defaultText }: ButtonProp) {
  const [state, setState] = useState(true);

  const handleState = () => {
    setState((prevState) => !prevState);
  };

  return (
    <button
      onClick={handleState}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {state ? defaultText : defaultText === 'Stop' ? 'Start' : 'Stop'}
    </button>
  );
}
