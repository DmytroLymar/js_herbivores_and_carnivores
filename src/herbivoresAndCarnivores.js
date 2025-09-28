'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static removeIfDead(animal) {
    if (animal.health <= 0) {
      const i = Animal.alive.indexOf(animal);

      if (i !== -1) {
        Animal.alive.splice(i, 1);
      }
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!(target instanceof Herbivore)) {
      return;
    }

    if (target.hidden) {
      return;
    }

    target.health -= 50;
    Animal.removeIfDead(target);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
