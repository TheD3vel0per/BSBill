export default class Document {
    billName: string;
    billNumber: string;
    billURL: string;
    info: {
        "dates": Array<Date>,
        "money": Array<Number>;
        "percentages": Array<String>,
        "ratios": Array<String>,
        "companies": Array<String>,
        "courts": Array<String>,
        "cusip": Array<String>,
        "regulations": []
    };
    billVotes: {
        bs: number,
        notbs: number
    };

    constructor() {
        // default init. can be removed later?
        this.billName = "";
        this.billNumber = "";
        this.billURL = "";
        this.info = {};
    }

    fromJSON(json: JSON) {
        
    }
}