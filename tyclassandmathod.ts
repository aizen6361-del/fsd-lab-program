export
class car {
    model: string;

    constructor(model: string) {
        this.model = model;
    }

    show() {
        console.log("Model is " + this.model);
    }
}

const my_car = new car("Toyota");
my_car.show();