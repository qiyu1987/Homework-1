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
    displayStatus(hero)
    
    return hero
}
function pickUpItem(hero,weapon) {
    hero.inventory.push(weapon)
    document.getElementById('dagger').style.display = 'none'
    displayStatus(hero)
}
function equipWeapon(hero) {

    if (hero.inventory.length !== 0){
        hero.weapon = hero.inventory.pop()
        displayStatus(hero)
    }
}
function changeYourHeroName(hero) {
    var name = prompt("Please enter your name", "Berny Sanders");
    if (name != null) {
        hero.name = name
        displayStatus(hero)
    }
  }
function displayStatus(hero) {
    const heroStatus = document.getElementById('heroStatus')
    let inventoryText = ''
    for (let i = 0; i < hero.inventory.length; i++) {
        inventoryText += hero.inventory[i].type + ' '     
    }
    heroStatus.innerHTML = `
    <ul>Hero Status
        <li>Name : ${hero.name}</li>
        <li>Heroic: ${hero.heroic}</li>
        <li>Inventory: ${inventoryText}</li>
        <li>Health: ${hero.health}</li>
        <li>Weapon: ${hero.weapon.type} Damage: ${hero.weapon.damage}</li>
    </ul>`  
}
displayStatus(hero)

// - Implement fighting an enemy. (how you do it is up to you!)
// create an enemy object
const enemy = {
    name: 'rat',
    health: 2,
    attack: 1
}
// create a function fight take hero and enemy as arguments
function fight(hero, enemy) {
    hero.health = hero.health - enemy.attack
    enemy.health = enemy.health - hero.weapon.damage
    const currentEnemy = document.getElementById('enemy')
    if (enemy.health <= 0) {
        currentEnemy.style.display = 'none'
    }
}
// - When an enemy or weapon gets clicked it gets deleted from the page



