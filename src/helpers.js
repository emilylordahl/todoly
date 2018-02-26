export function getTime(){
  const currentTime = Date.now();
  return currentTime;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getFunItem() {
  const verbs = ["Get", "Pet", "Write", "Create", "Feed", "Run", "Organize", "Play", "Watch", "Draw", "Turn", "Eat", "Read", "Hike", "Walk", "Knit", "Perform", "Bake", "Walk to"];
  const adjectives = ["adorable", "beautiful", "clean", "drab", "elegant", "fancy", "glamorous", "magnificent", "plain", "quaint", "sparkling", "fierce", "grumpy", "helpless", "itchy", "jealous", "lazy", "mysterious", "nervous", "scary", "positive"];
  const nouns = ["dog", "cat", "prose", "tree", "feet", "people", "leaves", "mice", "miles", "geese", "pencils", "cards", "lives", "elves", "loaves", "potatoes", "tomatoes", "cacti", "lamps", "nuclei", "trombones", "cookies", "data"];

  return `${rando(verbs)} ${rando(adjectives)} ${rando(nouns)}.`;
}
