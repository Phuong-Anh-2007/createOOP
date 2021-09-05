class Apple {
    constructor(weight) {
        this.weight = weight;
    }

    giam() {
        if (this.weight > 0) {
            this.weight--;
        }
    }

    getWeight() {
        return this.weight;
    }

    isEmpty() {
        if (this.weight !== 0) {
            return true;
        } else {
            return false;
        }
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    setGender(gender) {
        if (gender == 'male') {
            this.gender = false;
        } else {
            this.gender = true;
        }
    }

    checkApple(apple) {
        return apple.isEmpty();
    }

    eat(apple) {
        if (apple.getWeight()>0) {
            apple.giam();
            this.weight++;
        }
    }

    say(str) {
        console.log(str);
    }

    getName() {
        return this.name
    }

    setName(str) {
        this.name = str;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }
}


let apple_1 = new Apple(10);
let adam = new Human('Adam','male',55);
let eva = new Human('Eva','female',45);

adam.say('Name: Adam, gender: Male, weight: 55');
eva.say('Name: Eva, gender: Female, weight: 45');

while (apple_1.isEmpty()) {
    //Adam
    adam.eat(apple_1);
    document.write(adam.getName() + ' ăn táo: ' +'<br>');
    document.write('-Táo giảm '+apple_1.getWeight()+' đơn vị'+'<br>');
    document.write('-'+adam.getName() + ' tăng '+adam.getWeight()+' đơn vị '+'<br>');
    document.write('<br>');

    //Eva
    eva.eat(apple_1);
    document.write(eva.getName() + ' ăn táo: ' +'<br>');
    document.write('-Táo giảm '+apple_1.getWeight()+' đơn vị'+'<br>');
    document.write('-'+eva.getName() + ' tăng '+eva.getWeight()+' đơn vị '+'<br>');
    document.write('<br>');
}
