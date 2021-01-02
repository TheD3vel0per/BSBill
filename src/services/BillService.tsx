import firebase from 'firebase/app';
import { app } from './FirebaseService';

import { BehaviorSubject } from 'rxjs';

import Bill from '../model/Bill';


class BillService {
    bills$: BehaviorSubject<Array<Bill>> = new BehaviorSubject<Array<Bill>>([]);
    billsRef: firebase.firestore.CollectionReference;

    constructor() {
        this.billsRef = app.firestore().collection('Bills');
    }

    public async init() {
        this.billsRef.onSnapshot(data => {
            const bills: Array<Bill> = [];
            data.docs.forEach(element => {
                bills.push(element.data() as Bill);
            });

            this.bills$.next(bills);
        });
    }
}

const billService = new BillService();
export default billService;
