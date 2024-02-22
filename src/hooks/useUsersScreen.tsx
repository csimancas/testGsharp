import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchUsers} from '../../redux/users/thunks';

const useUsersScreen = () => {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return {};
};

export default useUsersScreen;
