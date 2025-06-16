<template>

  <div class="rpg-game">
       <button @click="$router.back()" class="back-button">← Back</button>
    <h1>Simple RPG</h1>
    <p>💖 Player HP: {{ playerHealth }}</p>
    <p>💀 Monster HP: {{ monsterHealth }}</p>
    <p>💰 Gold: {{ gold }}</p>
    <p>🗡️ Weapon: {{ weapon.name }} (Damage: {{ weapon.min }} - {{ weapon.max }})</p>

    <div class="buttons">
      <button @click="attack">Attack</button>
      <button @click="specialAttack">Special Attack (-10 gold)</button>
      <button @click="heal">Heal (-5 gold)</button>
      <button @click="resetGame">Reset Game</button>
    </div>

    <h3>🛒 Shop</h3>
    <ul>
      <li v-for="(item, index) in shop" :key="index">
        {{ item.name }} - {{ item.price }} gold
        <button @click="buyWeapon(item)" :disabled="gold < item.price">Buy</button>
      </li>
    </ul>

    <h3>📜 Combat Log</h3>
    <ul>
      <li v-for="(log, index) in logs" :key="index">{{ log }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Rpg',
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      gold: 20,
      logs: [],
      weapon: { name: "Stick", min: 5, max: 10 },
      shop: [
        { name: "Sword", min: 10, max: 20, price: 20 },
        { name: "Axe", min: 15, max: 25, price: 30 },
        { name: "Magic Wand", min: 20, max: 30, price: 40 },
      ],
    };
  },
  methods: {
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    attack() {
      const damage = this.getRandom(this.weapon.min, this.weapon.max);
      const monsterDamage = this.getRandom(5, 12);
      this.monsterHealth -= damage;
      this.playerHealth -= monsterDamage;
      this.gold += 5;
      this.logs.unshift(`🗡️ You attacked for ${damage} damage`);
      this.logs.unshift(`💥 Monster hit you for ${monsterDamage}`);
      this.checkEndGame();
    },
    specialAttack() {
      if (this.gold < 10) {
        this.logs.unshift("⚠️ Not enough gold for special attack!");
        return;
      }
      const damage = this.getRandom(this.weapon.min + 5, this.weapon.max + 10);
      const monsterDamage = this.getRandom(7, 14);
      this.monsterHealth -= damage;
      this.playerHealth -= monsterDamage;
      this.gold -= 10;
      this.logs.unshift(`🔥 You used special attack for ${damage}`);
      this.logs.unshift(`💥 Monster hit you for ${monsterDamage}`);
      this.checkEndGame();
    },
    heal() {
      if (this.gold < 5) {
        this.logs.unshift("⚠️ Not enough gold to heal!");
        return;
      }
      const healValue = this.getRandom(10, 20);
      const monsterDamage = this.getRandom(7, 12);
      this.playerHealth += healValue;
      if (this.playerHealth > 100) this.playerHealth = 100;
      this.playerHealth -= monsterDamage;
      this.gold -= 5;
      this.logs.unshift(`💊 You healed for ${healValue}`);
      this.logs.unshift(`💥 Monster hit you for ${monsterDamage}`);
      this.checkEndGame();
    },
    buyWeapon(item) {
      if (this.gold >= item.price) {
        this.weapon = { name: item.name, min: item.min, max: item.max };
        this.gold -= item.price;
        this.logs.unshift(`🛍️ You bought ${item.name}`);
      } else {
        this.logs.unshift(`⚠️ Not enough gold to buy ${item.name}`);
      }
    },
    resetGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gold = 20;
      this.weapon = { name: "Stick", min: 5, max: 10 };
      this.logs = [];
    },
    checkEndGame() {
      if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
        alert("⚔️ It's a draw!");
        this.resetGame();
      } else if (this.playerHealth <= 0) {
        alert("💀 You lost!");
        this.resetGame();
      } else if (this.monsterHealth <= 0) {
        alert("🏆 You won!");
        this.resetGame();
      }
    },
  },
};
</script>

<style scoped>
.rpg-game {
  max-width: 600px;
  margin: auto;
  font-family: 'Segoe UI', sans-serif;
  padding: 20px;
  text-align: center;
  color: aliceblue;
}
.buttons button {
  margin: 5px;
}
ul {
  list-style: none;
  padding: 0;
}
</style>
