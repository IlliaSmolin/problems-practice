class Monster {
  constructor(type, health, damage, number) {
    this.type = type
    this.health = health
    this.defaultHealth = health
    this.damage = damage
    this.defaultDamage = damage
    this.number = number
    this.alive = true
  }
  
  get totalAttack() {return this.alive ? this.damage * this.number : 0}
  get totalHealth() {return this.alive ? (this.number - 1) * this.defaultHealth + this.health : 0}
  
  die() {
    this.health = 0
    this.number = 0
    this.alive = false
  }
  
  getDamage(dmg) {
    if (!this.alive) {
      return `${this.type} is dead!`
    }
    
    if (dmg > this.totalHealth) {
      this.die()
      return `${this.type} is dead!`
    }

    while (dmg != 0) {
      var difference
      if (dmg > this.health) {
        difference = dmg - this.health
        this.number--
        this.health = this.defaultHealth
        dmg = difference
      } else {
        this.health -= dmg
        dmg = 0
        if (this.health === 0) {
          this.number--
          this.health = this.defaultHealth
        }
      }
    }
  }
  
}
var whoWouldWin = (mon1, mon2) => {

var firstMonster = new Monster(mon1.type, mon1.hitpoints, mon1.damage, mon1.number)
var secondMonster = new Monster(mon2.type, mon2.hitpoints, mon2.damage, mon2.number)

  var attack_one_to_two = (att, def) => {
    console.log(`S: ${att.number} ${att.type}(s) [DMG: ${att.totalAttack}] >> ${def.number} ${def.type}(s) [HP: ${def.totalHealth} (${def.number-1}x${def.defaultHealth}+1x${def.health}]`)
    def.getDamage(att.totalAttack)
    console.log(`E: ${att.number} ${att.type}(s) [DMG: ${att.totalAttack}] >> ${def.number} ${def.type}(s) [HP: ${def.totalHealth} (${def.number-1}x${def.defaultHealth}+1x${def.health}]`)
    return def.alive ? attack_one_to_two(def, att) : `${att.number} ${att.type}(s) won`
  }
   return attack_one_to_two(firstMonster, secondMonster)
}

//try to refactor and optimize the while lopp using the formulas below

//     def.number - Math.floor(att.number * att.damage / def.hitpoints) // how much of deff numbers should stay alive
//     def.hitpoints - (att.number * att.damage - (Math.floor(att.number * att.damage/def.hitpoints) * def.hitpoints)) // how much HP will be left for the deff side 