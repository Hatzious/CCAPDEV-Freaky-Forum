// FOR FRONTEND API CALLS
import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem("authToken");

    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

export const register = (formData) => API.post("/auth/register", formData);
export const login = (formData) => API.post("/auth/login", formData);

export const getPosts = (page = 1) => API.get(`/posts?page=${page}`);
export const createPost = (postData) => API.post("/posts", postData);
export const getPost = (postId) => API.get(`/posts/${postId}`);
export const votePost = (postId, voteValue) => API.post(`/votes`, { postId, voteValue });

export const getUserProfile = (userId) => API.get(`/users/${userId}`);
export const followUser = (userId) => API.post(`/users/${userId}/follow`);
export const unfollowUser = (userId) => API.post(`/users/${userId}/unfollow`);
export const getFollowers = (userId) => API.get(`/users/${userId}/followers`);
export const getFollowing = (userId) => API.get(`/users/${userId}/following`);

export default API;