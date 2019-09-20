// Write your JS here
const hero = {
    name: 'Shela',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'sword',
        damage: 2
    }
}
const dagger = {
    type: 'dagger',
    damage: 2,
}
function rest(hero) {
    if (hero.health === 10){
        alert('Full Health Already!')
    }
    hero.health = 10
    
    return hero
}
function pickUpItem(hero,weapon) {
    hero.inventory.push(weapon)
}
function equipWeapon(hero) {

    if (hero.inventory.length !== 0){
        hero.weapon = hero.inventory.pop()
    }
}