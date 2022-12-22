export const fetchUser = ()=>{
    const userInfo = "user" in localStorage ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    return userInfo
}