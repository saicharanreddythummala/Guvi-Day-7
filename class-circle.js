// 2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        console.log(`Radius of Circle is: ${this.radius}`)
    }

    getColor(){
        console.log(`Color of Cicle is: ${this.color}`)
    }

    getArea(){
        const pi = 3.14;
        console.log(`Area of Circle is: ${pi*(this.radius*this.radius)}`)
    }

    getCircumference(){
        const pi = 3.14;
        console.log(`Circumference of circle is: ${2*pi*this.radius}`)
    }

}

let circle = new Circle(2.0,"black");

circle.getRadius();
circle.getColor();
circle.getArea();
circle.getCircumference();