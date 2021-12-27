alert('Adam và Eva là những con người đầu tiên, trong vườn địa đàng có một cây táo ra những quả táo chín mọng. Adam và Eva lấy một quả táo và ăn, mỗi người ăn một miếng táo cho đến khi hết');

class Apple {
    _weight;

    constructor(weight) {
        this._weight = weight;
    }

    getWeight() {
        return this._weight;
    }

    setWeight(int) {
        this._weight = int;
    }

    getDecrease() {
        if (this._weight > 0) {
            return this._weight--;
        } else {
            return this._weight = 0;
        }
    }

}

class Human {
    _name;
    _gender;
    _weight;

    constructor(name, gender, weight) {
        this._name = name;
        this._gender = gender;
        this._weight = weight;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    getWeight1() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    setApple(apple) {
        this.apple = apple;
    }

    getCheckApple() {
        return this.apple.getWeight();
    }

    getEat() {
        if (this.status) {
            this._weight++;
            document.write(this._name + '<br>');
        }
    }

    getEated() {
        this.status = true;
        return this.apple.getDecrease();
    }

}