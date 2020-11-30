export class Counter {
  public account: number;
  constructor(account: number = 0){
    this.account = account;
  }
  public Increase(): void {
    this.account ++;
  }
  public Decrease(): void {
    this.account --;
  }
  public Reset(): void{
    this.account = 0;
  }
}
