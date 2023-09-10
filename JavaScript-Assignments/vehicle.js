class Vehicle
{
    #capacity=0;
    constructor(name,capacity)
    {
        this.name=name;
        this.#capacity=capacity;
    }

    get getCapacity()
    {
        return this.#capacity;
    }

    startEngine()
    {
        console.log(`${this.name} can start and has capacity of ${this.#capacity}`);
    }
    stopEngine()
    {
        console.log(`${this.name} can stop and has capacity of ${this.#capacity}`);
 
    }
    run()
    {
        console.log(`${this.name} can run on manual mode`);
    }
    static brake()
    {
        console.log("We are calling static method");
    }
    callCapacity()
    {
        console.log(`${this.name} has this much ${this.#capacity} capacity`);
    }
}

class TwoWheeler extends Vehicle
{
    constructor(name,capacity,tyre,engine)
    {
        super(name,capacity);
        this.tyre=tyre;
        this.engine=engine;
    }


}

class ThreeWheeler extends Vehicle
{
    constructor(name,capacity,tyre,engine)
    {
        super(name,capacity);
        this.tyre=tyre;
        this.engine=engine;
    }
}

let two=new TwoWheeler("Scooter",4000,2,3000);
let three=new ThreeWheeler("Car",4000,3,6000);

console.log(two.name+" "+two.getCapacity+" "+two.tyre+" "+two.engine);
two.startEngine();
two.stopEngine();
two.run();
Vehicle.brake();
two.callCapacity();
console.log();
console.log();

console.log(three.name+" "+three.getCapacity+" "+three.tyre+" "+three.engine);
three.startEngine();
three.stopEngine();
three.run();
Vehicle.brake();
three.callCapacity();