import { axiosInstance } from "./axios";

export const getUserList = () => {
    return axiosInstance.get("/user");
};

export const getTreeList = () => {
    return axiosInstance.get("/tree/admin");
};

export const getEmotionList = () => {
    return axiosInstance.get("/tree/admin/emotion");
};

export const getChatRoomList = () => {
    return axiosInstance.get("/chat/admin");
};

export const adminToUser = (id: string) => {
    const requestData = {
        is_superuser: "False",
    };
    return axiosInstance.put(`/user/${id}`, requestData);
};
export const userToAdmin = (id: string) => {
    const requestData = {
        is_superuser: "True",
    };
    return axiosInstance.put(`/user/${id}`, requestData);
};
