class Mouse {
    status;
    sound;
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }

    getStatus() {
        if (this.status) {
            alert('Chuột sống');
        } else {
            alert('Chuột chết');
        }
    }

    noDie() {
        return this.status = true;
    }

    die() {
        return this.status = false;
    }

    actSound(sound) {
        this.sound = sound;
        alert(this.sound);
    }
}

class Cat {
    sound;
    constructor(name, weight, speed, mouse) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.mouse = mouse;
    }

    catchMouse() {
        if (this.mouse.speed < this.speed)  {
            alert('Got you');
        } else {
            alert('Oh no');
        }
    }

    eatMouse() {
        if (this.mouse.status) {
            alert('Eat!');
            this.weight += this.mouse.weight;
            alert(this.name+' đã tăng '+this.weight);
        } else {
            alert('Not eat!');
        }
    }

    getWeight() {
        return this.weight;
    }

    actSound(sound) {
        return this.sound = sound;
    }
}

let Rat = new Mouse('Rat',10,200);
let cat = new Cat('Cat',20,250,Rat);

console.log(Rat.name+', weight: '+Rat.weight);
console.log(cat.name+', weight '+cat.weight);

Rat.noDie();

cat.catchMouse();
cat.eatMouse();
