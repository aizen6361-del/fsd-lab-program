export class car {
    model;
    constructor(model) {
        this.model = model;
    }
    show() {
        console.log("Model is " + this.model);
    }
}
const my_car = new car("Toyota");
my_car.show();
