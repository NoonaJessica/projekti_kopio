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
            className=" button view-button p-1"
            to="/single"
            state={item}
          >
            View
          </Link>
          {user &&
            (user.user_id === item.user_id || user.level_name === 'Admin') && (
              <>
                <button
                  className="button mody-button p-1"
                  onClick={() => console.log('modify', item)}
                >
                  Modify
                </button>
                <button
                  className="button delete-button p-1"
                  onClick={deleteHandler}
                >
                  Delete
                </button>
              </>
            )}
        </div>
        <Likes item={item} />
        <p>Comments: {item.comments_count}</p>
        <p className=""> Posted by: {item.owner.username}</p>



      </td>
    </tr>
  );
};

export default MediaRow;
