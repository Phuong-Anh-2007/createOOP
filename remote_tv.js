class Remote {
    channel;
    volume;
    constructor(number) {
        this.number = number;
    }

    changeChannel(channel) {
        this.channel = channel;
        console.log('Kênh hiện tại là: '+this.channel);
    }

    changevolume(volume) {
        this.volume = volume;
        // console.log(this.volume);
    }

    getChannel() {
        console.log(this.number);
    }
}

class Tivi {
    status;
    constructor(channelNow,volumeNow,remote) {
        this.channelNow = channelNow;
        this.volumeNow = volumeNow;
        this.remote = remote;
    }

    turnOn() {
        return this.status = true;
    }
    turnOff() {
        return this.status = false;
    }

    getOnOff() {
        if (this.status) {
            console.log('Tivi đang bật');
        } else {
            console.log('Tivi đã tắt');
        }
    }

    changeChannel(number) {
         return remote.changeChannel(number);
    }

    changeVolume(number) {
       this.volumeNow += number;
       console.log('Âm lượng hiện tại là: '+this.volumeNow);
    }
}

let remote = new Remote(1);
let tv = new Tivi(1,10,remote);

tv.turnOn();
tv.getOnOff();
tv.changeChannel(7);
remote.changeChannel(3);
tv.changeVolume(2);
tv.turnOff();
tv.getOnOff();