export class GameSession {
  constructor(charactersData) {
    this.allCharacters = new Map();
    this.displayNames = new Map();

    const characterArray = charactersData.characters;

    for (let i = 0; i < characterArray.length; i++) {
      const charName = characterArray[i].keys[0];
      this.allCharacters.set(charName, characterArray[i]);
      this.displayNames.set(charName, characterArray[i].DN);
    }

    this.propertyNames = charactersData.propertynames;
  }

  static async create() {
    const response = await fetch('../../data/characters.json');
    const data = await response.json();
    return new GameSession(data);
  }
}