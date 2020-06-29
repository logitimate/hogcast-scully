export interface Episode {
    id: number;
    name: string;
    description: string;
    link: string;
    summary: string;
    publishDate: Date;
    duration: string;
    keywords: string;
    imageLink: string;
    timeStamps?: Array<string>
}