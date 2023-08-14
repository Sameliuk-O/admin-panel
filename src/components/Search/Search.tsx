import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setSearchTemplate } from '../../store/searchSlice';

const Search = () => {
  const previews = useAppSelector((state) => state.template.previews);
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const searchTemplate = (event: React.FormEvent) => {
    event.preventDefault();
    previews &&
      Object.keys(previews).map((key) => {
        const {
          id,
          title,
          feed: { videoURL },
        } = previews[key];
        if (title === inputValue || id.toString() === inputValue) {
          dispatch(setSearchTemplate({ id: id, title: title, videoURL: videoURL }));
          navigate(`/admin/${id}`);
        }
      });
  };

  return (
    <div>
      <form onSubmit={searchTemplate}>
        <input
          className="rounded-2xl py-1.5 pl-5 pr-10 text-button"
          placeholder="Search Template"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="ml-5 rounded-2xl bg-white px-10 py-1.5 text-button hover:bg-button hover:text-white"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default Search;
