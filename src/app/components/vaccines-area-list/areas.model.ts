export class Areas {
  public vaccLocation: string;
  public vaccAvailable: string;

  constructor(location: string, vaccine: string) {
    this.vaccLocation = location;
    this.vaccAvailable = vaccine;
  }
}
