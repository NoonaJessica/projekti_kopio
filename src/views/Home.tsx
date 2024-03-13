import MediaRow from '../components/MediaRow';
import {useMedia} from '../hooks/graphQLHooks';
// import {useMedia} from '../hooks/apiHooks';

//
//<th className="w-1/12 border border-sky-300">Title</th>
//<th className="w-2/12 border border-sky-300">Description</th>
//<th className="w-1/12 border border-sky-300">Created</th>
//<th className="w-1/12 border border-sky-300">Size</th>
//<th className="w-1/12 border border-sky-300">Type</th>
//<th className="w-1/12 border border-sky-300">Owner</th>
//

const Home = () => {
  const {mediaArray} = useMedia();

  return (
    <>
      <table className='blocks'>
        <thead>
          <tr>
          <th className="px-10 ">Image</th>
          <th className="w-1/3">Actions</th>

          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
