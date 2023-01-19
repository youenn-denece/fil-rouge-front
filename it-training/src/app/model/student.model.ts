export class Student {
    public id: number; 
    public firstname: string;
    public lastname: string;
    public email: string;
    public password: string;
    public company: string;
    public authorities: string[];
    public sessionList: string[];

    constructor(id?: number, firstname?: string, lastname?: string, email?: string, password?: string, company?: string, authorities?: string[], sessionList?: string[]){
        this.id = id || 0;
        this.firstname = firstname || '';
        this.lastname = lastname || '';
        this.email = email || '';
        this.password = password || '';
        this.company = company || '';
        this.authorities = authorities || [];
        this.sessionList = sessionList || [];

    }
}