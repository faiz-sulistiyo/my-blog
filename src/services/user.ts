import { IPagination } from '@/types/common';
import { IUser, IUserPayload } from '@/types/user';
import axiosInstance from '@/utils/axiosInstance';

const API_BASE_URL = process.env.NEXT_PUBLIC_GO_REST_API;

export const fetchUsers = async ({page,per_page,search,searchField}:IPagination): Promise<IUser[]> => {
    try {
        const response = await axiosInstance.get(`${API_BASE_URL}/users`,{
            params:{
                page,
                per_page,
                [searchField??""]: search,
            },
            headers:{
                "Cache-Control":"no-store",
                'Pragma': 'no-cache'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const fetchUserById = async (id: string): Promise<IUser> => {
    try {
        const response = await axiosInstance.get(`${API_BASE_URL}/users/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching user with id ${id}:`, error);
        throw error;
    }
};

export const createUser = async (user: Partial<IUserPayload>): Promise<IUser> => {
    try {
        const response = await axiosInstance.post(`${API_BASE_URL}/users`, user);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const updateUser = async (id: number, user: Partial<IUserPayload>): Promise<IUser> => {
    try {
        const response = await axiosInstance.put(`${API_BASE_URL}/users/${id}`, user);
        return response.data;
    } catch (error) {
        // console.error(`Error updating user with id ${id}:`, error);
        // throw error;
        throw "Error";
    }
};

export const deleteUser = async (id: number): Promise<void> => {
    try {
        await axiosInstance.delete(`${API_BASE_URL}/users/${id}`);
    } catch (error) {
        console.error(`Error deleting user with id ${id}:`, error);
        throw error;
    }
};