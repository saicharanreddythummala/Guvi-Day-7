// 4. Write a class to calculate uber price.

class Uber {
  constructor(
    baseFare,
    costPerMile,
    costPerMinute,
    timenRide,
    rideDistance,
    bookingFee
  ) {
    this.baseFare = baseFare;
    this.costPerMile = costPerMile;
    this.costPerMinute = costPerMinute;
    this.timenRide = timenRide;
    this.rideDistance = rideDistance;
    this.bookingFee = bookingFee;
  }

  getFare() {
    console.log(
      `Your fare is: ${
        this.baseFare +
        (this.costPerMinute * this.timenRide +
          this.costPerMile * this.rideDistance) +
        this.bookingFee
      }`
    );
  }
}

let fare = new Uber(25, 10, 3, 40, 30, 300);

fare.getFare();
