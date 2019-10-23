var whoWouldWin = (mon1, mon2) => {
  mon1.defaultHP = mon1.hitpoints
  mon2.defaultHP = mon2.hitpoints
  var defaultHP, attack, health, i = 0, killed
//   var attack, health
  var attack_one_to_two = (att, def) => {
    
    i++
    
    if (i % 2 == 1) {
      defaultHP = mon2.defaultHP
    } else {
      defaultHP = mon1.defaultHP
    }
//     attack = att.number * att.damage
//     killed = Math.floor(attack/def.hitpoints)
//     health = def.number * def.hitpoints
//     def.number - Math.floor(att.number * att.damage / def.hitpoints) // how much of deff numbers should stay alive
//     def.hitpoints - (att.number * att.damage - (Math.floor(att.number * att.damage/def.hitpoints) * def.hitpoints)) // how much HP will be left for the deff side 
        
    if (att.number * att.damage >= def.hitpoints && 
    att.number * att.damage < def.number * (def.hitpoints + (def.number - 1) * def.defaultHP)) { //error in the condition (end of it)
      console.log(att, def)
      def.number -= Math.floor(att.number * att.damage / defaultHP)
      def.hitpoints -= (att.number * att.damage - (Math.floor(att.number * att.damage/defaultHP) * defaultHP))
      console.log(att, def)
    } else if (att.number * att.damage >= def.number * def.hitpoints) { //error in the condition
      return `${att.number} ${att.type}(s) won`
    } else if (att.number * att.damage < def.hitpoints) {
      def.hitpoints -= att.number * att.damage
    }
    
//     return attack_one_to_two(def, att)
  }
  return attack_one_to_two(mon1, mon2)
}