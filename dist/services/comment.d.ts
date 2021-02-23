export declare class CommentService {
    private connection;
    protected emailService: any;
    constructor(dbConnection: any, emailService: any);
    insert(document: any): Promise<void>;
}
