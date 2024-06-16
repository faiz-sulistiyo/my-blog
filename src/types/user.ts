export interface IUser {
    id: number;
    name: string;
    email: string;
    gender: 'male' | 'female';
    status: 'active' | 'inactive';
}

export interface IUserPayload {
    id?:number;
    name: string;
    gender: "male" | "female" | null;
    email: string;
    status: "active" | "inactive" | null;
}