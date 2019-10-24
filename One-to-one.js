class Monster {
  constructor(type, health, damage, number, defaultHealth) {
    this.type = type
    this.health = health < 1 ? 0 : health
    this.defaultHealth = defaultHealth ? defaultHealth < 1 ? 0 : defaultHealth : health
    this.damage = damage < 1 ? 0 : damage
    this.defaultDamage = damage
    this.number = number < 1 ? 0 : number
    this.alive = (this.number < 1 && this.health < 1) ? false : true
    
    if (this.health < 1) {
      if (this.number > 1) {
        if (this.defaultHealth < 1) {
          this.alive = false
        } else {
          this.health = this.defaultHealth
          this.number--
        }
      } else {
        this.alive = false
      }
    } else if (this.number < 1) this.alive = false
    console.log(`${this.type} created: dHP=${this.defaultHealth}, HP=${this.health}, amount=${this.number}, alive=${this.alive}`)
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
var skolopendra = new Monster('Skolopendra', 0, 1, 2)
var bloodsucker = new Monster('Bloodsucker', 0, 1, 1)
var mandem = new Monster('Mandem', -1, 1, 3, 15)
var skeleton = new Monster('Skeleton', 5, 1, 3)
var fam = new Monster('Fam', 15, 1, -2)

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

//Problem explanation below

/*In this problem, two groups of monsters will attack each other, and your job is to find out who wins. 
Each group will have a stat for each of the following: number of units, hitpoints per unit, damage per unit, 
and monster type. If you are not familiar with the game, just think of each group as standing in a line 
so that when they are attacked the unit at the front of the line takes the hit before the others, 
and if he dies the remaining damage will hit the next unit and so on. Therefore multiple units (or even the 
whole group) can die in one attack. Each group takes turns attacking, and does so until only one remains. 
In this problem, the first entry in the input array is the first to attack.The inputs for this game will be 
two dictionaries, each with the stats of each monster. Using these stats, calculate which group wins, and how 
many units in that group stay alive (unless they are undead :P), and return it as a string - formatted as below:

Input:
mon1 = {"type": "Roc",     "hitpoints": 40, "number": 6, "damage" : 8 };
mon2 = {"type": "Unicorn", "hitpoints": 40, "number": 4, "damage" : 13};

Output:
"[NUMBER] [TYPE](s) won"   // in this case "5 Roc(s) won"
The damage of each attack is calculated simply as (number of units) * (damage per unit).

You must also take into account that the first unit in the group may injured BUT he still attacks with full strength.

Fighting mechanics explanation:

mon1 = {"type": "Roc",     "hitpoints": 40, "number": 6, "damage":8 }
mon2 = {"type": "Unicorn", "hitpoints": 40, "number": 4, "damage":13}

1) The Rocs attack the Unicorns for 48 damage (6 * 8),
   killing one and damaging the next - leaving it with 32/40 hitpoints.
2) The remaining 3 Unicorns attack the Rocs for 39 damage (3 * 13),
   killing 0 but leaving the first one with only 1/40 hitpoints.
3) Repeat until one of the groups is left with 0 units in total.

*/

//Tests to check the result:

/*let pairs = [
  [{ "type": "Roc",         "hitpoints": 40, "number": 6, "damage":8 },
   { "type": "Unicorn",     "hitpoints": 40, "number": 4, "damage":13}],
  [{ "type": "Titan",       "hitpoints": 300,"number": 1, "damage":50},
   { "type": "Battle Dwarf","hitpoints": 20, "number": 25,"damage":4}],
  [{ "type": "Paladin",     "hitpoints": 50, "number": 8 , "damage":20},
   { "type": "Skeleton",    "hitpoints": 4 , "number": 100,"damage":3 }],
  [{ "type": "Sucker",     "hitpoints": 50, "number": 12 , "damage":20},
   { "type": "Lover",    "hitpoints": 15 , "number": 1,"damage":3 }]
];
let winners = [
  "5 Roc(s) won",
  "15 Battle Dwarf(s) won",
  "1 Paladin(s) won",
  "12 Sucker(s) won"
];
for (let i = 0; i < winners.length; i++) {
  let mon1 = pairs[i][0], mon2 = pairs[i][1];
  Test.assertEquals(whoWouldWin(mon1, mon2), winners[i]);
}*/