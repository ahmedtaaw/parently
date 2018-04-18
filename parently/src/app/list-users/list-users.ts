export interface IPages {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: [IUsers]

}
export interface IUsers{
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}