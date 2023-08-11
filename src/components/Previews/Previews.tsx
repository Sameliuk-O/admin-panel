import { useAppSelector } from '../../hooks/useAppSelector';
import AIR_FEED from '../../images/air_feed.png';
const Previews = () => {
  const previews = useAppSelector((state) => state.template.previews);

  return (
    <div className="grid grid-cols-5 gap-7">
      {Object.keys(previews).map((key) => {
        const {
          id,
          title,
          feed: { imageURL },
        } = previews[key];
        return (
          <div className="rounded-lg border-2 p-5" key={key}>
            <img alt={title} className="rounded" src={AIR_FEED} />
            <div className="flex pt-5">
              <p className="pr-3 font-bold">ID: {id}</p>
              <p className="pl-3 font-bold">Title: {title}</p>
            </div>
            <p className="pt-2"> Image URL: {imageURL}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Previews;
