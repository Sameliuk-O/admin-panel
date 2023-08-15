import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';
import { ITemplate } from '../../interface/ITemplate';
import SearchTemplate from '../SearchTemplate';

const Search = () => {
  const previews = useAppSelector((state) => state.template.previews);
  const [inputValue, setInputValue] = useState<string>('');
  const [searchValue, setSearchValue] = useState<ITemplate[]>([]);
  const pattern = new RegExp(`^${inputValue}`);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const searchResults: ITemplate[] = [];
    Object.keys(previews).forEach((key) => {
      const {
        id,
        title,
        feed: { videoURL },
      } = previews[key];
      if (inputValue.length > 0) {
        if (title.match(pattern) || id.toString().match(pattern)) {
          searchResults.push({ id: id, title: title, videoURL: videoURL });
        }
      }
    });
    setSearchValue(searchResults);
  }, [inputValue]);

  const handleClick = () => {
    setInputValue('');
    setSearchValue([]);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          className={`${
            searchValue.length > 0 ? 'rounded-t-2xl' : 'rounded-2xl'
          } w-96 py-1.5 pl-5 pr-14 text-button`}
          placeholder="Search Template"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
      <div>
        <ul className="absolute max-h-96 overflow-y-auto rounded-b-2xl bg-gray-400">
          {searchValue.length > 0
            ? searchValue.map((el) => (
                <li className="w-96 border text-white last:rounded-b-2xl" key={el.id}>
                  <Link to={`/admin/${el.id}`} onClick={handleClick}>
                    <SearchTemplate id={el.id} title={el.title} videoURL={el.videoURL} />
                  </Link>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};
export default Search;
