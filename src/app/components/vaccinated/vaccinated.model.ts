export class Vaccinated {
  // I will use public so it can be accessible all through out my app if needed
  public firstName: string;
  public lastName: string;
  public age: number;
  public address: string;
  public dateVaccinated: string;
  public vaccineType: string;

  constructor(
    fName: string,
    lName: string,
    age: number,
    address: string,
    dateVaccinated: string,
    vaccType: string
  ) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.address = address;
    this.dateVaccinated = dateVaccinated;
    this.vaccineType = vaccType;
  }
}
