import { IComment, ICommentPayload, IPost } from "@/types/blog";
import { IPagination } from "@/types/common";
import axiosInstance from "@/utils/axiosInstance";

const API_BASE_URL = process.env.NEXT_PUBLIC_GO_REST_API;

export const fetchPosts = async ({page,per_page}:IPagination): Promise<IPost[]> => {
    try {
        const response = await axiosInstance.get(`${API_BASE_URL}/posts`,{
            params:{
                page,
                per_page
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const fetchPostById = async (id: string): Promise<IPost> => {
    try {
        const response = await axiosInstance.get(`${API_BASE_URL}/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts by id:', error);
        throw new Error("Failed fetch post by id");
    }
};

export const fetchCommentsByPostId = async (postId: number): Promise<IComment[]> => {
    try {
        const response = await axiosInstance.get(`${API_BASE_URL}/posts/${postId}/comments`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching comments for post with id ${postId}:`, error);
        throw error;
    }
};

export const createComment = async (comment: Partial<ICommentPayload>): Promise<IComment> => {
    try {
        const response = await axiosInstance.post(`${API_BASE_URL}/comments`, comment);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error("Failed to post comment");
    }
};
