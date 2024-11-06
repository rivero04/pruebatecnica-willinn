export type NewUser = {
    name: string;
    email: string;
    password: string;
    isActive: boolean;
};

export type User = NewUser & {
    id: number;
}