import admin from 'firebase-admin';

import Timestamp = admin.firestore.Timestamp;

export class RamadanService {
    constructor(){ }

    add(ramadan : any) {
        console.log(ramadan);
        console.log("added :"+Timestamp);
    }
    get(ramadan : any) {
        console.log(ramadan);
        console.log("get :"+Timestamp);
    }
}