import {useQuery} from 'react-query';
import {UserType} from "../Models";

async function getUsers() {
    return Promise.resolve([
        { name: 'Sam', img: 'https://i.pravatar.cc/150?img=10' },
        { name: 'Bob', img: 'https://i.pravatar.cc/150?img=11' },
        { name: 'Joe', img: 'https://i.pravatar.cc/150?img=12' },
        { name: 'Mary', img: 'https://i.pravatar.cc/150?img=13' },
        { name: 'Jon', img: 'https://i.pravatar.cc/150?img=1' },
    ]);
}

const useGetUsers = () => {
    return useQuery<UserType[], Error>('users', getUsers)
}

export const UserService = {
    useGetUsers,
}