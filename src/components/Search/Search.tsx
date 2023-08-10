import { useState } from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';

const Search = () => {
  const previews = useAppSelector((state) => state.template.previews);
  const [inputValue, setInputValue] = useState<string>('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  console.log(previews);

  console.log(inputValue);
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
};
export default Search;
