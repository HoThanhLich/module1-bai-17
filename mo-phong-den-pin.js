class Battery {
    _energy;

    constructor(energy) {
        this._energy = energy;
    }

    getEnergy() {
        return this._energy;
    }

    setEnergy(energy) {
        this._energy = energy;
    }

    getDecreaseEnergy() {
        if (this._energy > 0) {
            this._energy--;
        }
    }
}

class FlashLamp {
    battery;
    batteryInfo;

    constructor(battery, batteryInfo) {
        this.battery = battery;
        this.batteryInfo = batteryInfo;
    }

    setBattery(battery) {
        this.battery = battery;
    }

    getBatteryInfo() {
        return this.battery.getEnergy();
    }

    getLight() {
        if (this.status) {
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    }

    getTurnOn() {
        this.status = true;
    }

    getTurnOff() {
        this.status = false;
    }
}