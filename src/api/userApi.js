import axios from 'axios';
const searchUser = (data) => {
    if (!data.q.trim()) {
        return;
    }
    return axios.get(
        `https://tiktok.fullstack.edu.vn/api/users/search?q=${data.q}&type=${data.type}`,
    );
};
export { searchUser };
