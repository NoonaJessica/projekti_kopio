import {Link} from 'react-router-dom';
import {MediaItemWithOwner} from '../types/DBTypes';
import {useUpdateContext, useUserContext} from '../hooks/ContextHooks';
import {useMedia} from '../hooks/graphQLHooks';
import Likes from './Likes';


const MediaRow = (props: {item: MediaItemWithOwner}) => {
  const {item} = props;
  const {user} = useUserContext();
  const {deleteMedia} = useMedia();
  const {update, setUpdate} = useUpdateContext();

  const deleteHandler = async () => {
    const cnf = confirm('Are you sure you want to delete this media?');
    if (!cnf) {
      return;
    }
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      const result = await deleteMedia(item.media_id, token);
      alert(result.message);
      setUpdate(!update);
    } catch (e) {
      console.error('delete failed', (e as Error).message);
    }
  };

  return (
    <tr className="*:p-4">
      <td className="flex items-center justify-center ">
        <img
          className="h-60 w-72 object-cover"
          src={item.thumbnail}
          alt={item.title}
        />
      </td>

      <td className="">
        <div className="flex flex-col">
          <Link
            className="bg-sky-700 p-2 text-center hover:bg-sky-600 view-button"
            to="/single"
            state={item}
          >
            View
          </Link>
          {user &&
            (user.user_id === item.user_id || user.level_name === 'Admin') && (
              <>
                <button
                  className="bg-green-700 p-2 hover:bg-green-600"
                  onClick={() => console.log('modify', item)}
                >
                  Modify
                </button>
                <button
                  className="bg-rose-500 p-2 hover:bg-rose-400"
                  onClick={deleteHandler}
                >
                  Delete
                </button>
              </>
            )}
        </div>
        <Likes item={item} />
        <p>Comments: {item.comments_count}</p>



      </td>
    </tr>
  );
};

export default MediaRow;
