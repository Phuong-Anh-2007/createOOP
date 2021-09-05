class SwitchButton {
    connectToLamp(lamp) {
        if (lamp) {
            document.getElementById('light').innerHTML='<img src="https://www.w3schools.com/js/pic_bulbon.gif">';
        } else {
            document.getElementById('light').innerHTML='<img src="https://www.w3schools.com/js/pic_bulboff.gif">';
        }
    }

    switchOn() {
        lamp.turnOn();
    }

    switchOff() {
        lamp.turnOff();
    }
}

class ElectricLamp {
    turnOn() {
        return this.status=true;
    }

    turnOff() {
        return this.status=false;
    }
}


let lamp = new ElectricLamp();
let light = new SwitchButton();

light.connectToLamp(lamp.turnOff());
