export interface Icourse {
    id: number;
    description: string;
    imageUrl: string;
    lessonsCount: number;
    longDescription: string;
    category: CategoryType;   
}

export enum CategoryType{
        beginners = 'beginners',
        intermediate = 'intermediate',
        advanced = 'advanced'
    }