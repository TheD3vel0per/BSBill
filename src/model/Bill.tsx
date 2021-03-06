export default class Document {
    _id: string;
    billName: string;
    billNumber: string;
    billUrl: string;
    info: {
        dates: Array<Date>,
        money: Array<Number>;
        percentages: Array<string>,
        ratios: Array<string>,
        companies: Array<string>,
        courts: Array<string>,
        cusip: Array<string>,
        regulations: Array<string>
    };
    billVotes: {
        bs: number,
        notbs: number
    };

    constructor() {
        this._id = "";
        this.billName = "";
        this.billNumber = "";
        this.billUrl = "";
        this.info = {
            dates: [],
            money: [],
            percentages: [],
            ratios: [],
            companies: [],
            courts: [],
            cusip: [],
            regulations: []
        };
        this.billVotes = {
            bs: 0,
            notbs: 0,
        };
    }

    fromJSON(json: JSON) {

    }
}