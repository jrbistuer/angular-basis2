export interface IUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
}

export interface IBook {
    id?: number;
    title: string;
    author: string;
    publishedDate: number;
    isbn: string;
    pages: number;
    language: string;
    publisher: string;
    active: boolean;
}
