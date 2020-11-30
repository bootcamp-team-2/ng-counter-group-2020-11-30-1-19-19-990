export class Counter {
    public account: number;

    constructor(account: number = 0) {
        this.account = account;
    }

    increase() {
        this.account++;
    }
}
