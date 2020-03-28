export const authHelper = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { Authorization: 'bearer ' + user.token };
    } else {
        return {};
    }
};
