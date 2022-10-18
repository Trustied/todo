export interface Todo {
    id: number;
    title: string;
    isCompleted: boolean;
    isFavorite: boolean;
    createdAt: Date;
    is_deleted: boolean;
}