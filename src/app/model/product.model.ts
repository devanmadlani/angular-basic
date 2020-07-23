export interface Product {
    id?: string;
    name: string;
    amount: number;
    date?: Date;
    currency?: 'rupee' | 'euro' | null;
}