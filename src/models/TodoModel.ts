class TodoModel {

    rowNumber: number;
    rowDescription: string;
    rowAssigned: string;

    constructor(rowNumber: number,
        rowDescription: string,
        rowAssigned: string) {
        this.rowNumber = rowNumber;
        this.rowAssigned = rowAssigned;
        this.rowDescription = rowDescription;
    };
}