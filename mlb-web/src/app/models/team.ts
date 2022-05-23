export interface Team {
    id: number;
    nickname: string;
    name: string;
    location: string;
    abbreviation: string;
    logo: string;
    leage: string // this appears to be misspelled when coming down from the api
    division: string;
}