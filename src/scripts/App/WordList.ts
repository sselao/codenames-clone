export default class {
  words: string[];
  
  constructor() {
    this.words = [
      'Horse',
      'Car',
      'Life',
      'Spaceship',
      'Banana',
      'Jogging',
      'Gym',
      'Slug',
      'Hockey',
      'Visor',
      'Eye',
      'Head',
      'School',
      'Bus',
      'Janitor',
      'Dinosaur',
      'Montreal',
      'Canada',
      'Europe',
      'Russia',
      'Spoon',
      'Knife',
      'Computer',
      'Post',
      'Page',
      'Letter',
      'Tablet',
      'Phone',
    ];
  }

  getRandomWord() {
    const randomWord = this.words[
      Math.floor(Math.random() * this.words.length)
    ];
    this.words = this.words.filter((word) => word !== randomWord);
    return randomWord;
  }
}
