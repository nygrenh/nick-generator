const random = require('random-name')

const adjectives = ['Adorable', 'Amazing', 'Brave', 'Calm', 'Careful', 'Classical', 'Clean', 'Confident', 'Delightful', 'Eager', 'Efficient', 'Electronic', 'Elegant', 'Famous', 'Fancy', 'Fresh', 'Futuristic', 'Gentle', 'Glamorous', 'Handsome', 'Happy', 'Helpful', 'Hungry', 'Impressive', 'Jolly', 'Kind', 'Lively', 'Logical', 'Magnificent', 'Nice', 'Ordinary', 'Perfect', 'Pleasant', 'Practical', 'Pragmatic', 'Proud', 'Rare', 'Reasonable', 'Rich', 'Silly', 'Snowy', 'Sparkling', 'Sunny', 'Suspicious', 'Technical', 'Thankful', 'Unusual', 'Valuable', 'Wicked', 'Witty', 'Wonderful', 'Zealous']
const animals = ['Abyssinian', 'Affenpinscher', 'African Bush Elephant', 'African Civet', 'African Clawed Frog', 'African Forest Elephant', 'African Palm Civet', 'African Penguin', 'African Tree Toad', 'African Wild Dog', 'Albatross', 'Aldabra Giant Tortoise', 'Alligator', 'Angelfish', 'Ant', 'Anteater', 'Antelope', 'Arctic Fox', 'Arctic Hare', 'Arctic Wolf', 'Armadillo', 'Asian Elephant', 'Asian Palm Civet', 'Australian Mist', 'Avocet', 'Axolotl', 'Aye Aye', 'Baboon', 'Bactrian Camel', 'Badger', 'Balinese', 'Banded Palm Civet', 'Bandicoot', 'Barn Owl', 'Barnacle', 'Barracuda', 'Basking Shark', 'Bat', 'Bear', 'Beaver', 'Bengal Tiger', 'Bird', 'Bison', 'Black Bear', 'Black Rhinoceros', 'Bobcat', 'Bornean Orang-utan', 'Borneo Elephant', 'Bottle Nosed Dolphin', 'Brown Bear', 'Budgerigar', 'Buffalo', 'Bumble Bee', 'Burrowing Frog', 'Butterfly', 'Camel', 'Capybara', 'Caracal', 'Cassowary', 'Caterpillar', 'Centipede', 'Chameleon', 'Cheetah', 'Chinchilla', 'Chinook', 'Chinstrap Penguin', 'Chipmunk', 'Cichlid', 'Clouded Leopard', 'Coati', 'Collared Peccary', 'Common Buzzard', 'Common Frog', 'Coral', 'Cougar', 'Cow', 'Coyote', 'Crane', 'Crested Penguin', 'Crocodile', 'Cross River Gorilla', 'Curly Coated Retriever', 'Cuttlefish', 'Dachshund', 'Dalmatian', 'Deer', 'Discus', 'Dolphin', 'Dormouse', 'Dragon', 'Dragonfly', 'Duck', 'Dusky Dolphin', 'Dwarf Fortress', 'Eagle', 'Earwig', 'Echidna', 'Egyptian Mau', 'Electric Eel', 'Elephant', 'Elephant Seal', 'Emperor Penguin', 'Emperor Tamarin', 'Emu', 'Falcon', 'Fennec Fox', 'Flamingo', 'Flying Squirrel', 'Fox', 'Frigatebird', 'Frog', 'Fur Seal', 'Galapagos Penguin', 'Galapagos Tortoise', 'Geoffroys Tamarin', 'Gerbil', 'German Pinscher', 'Giant Clam', 'Gibbon', 'Giraffe', 'Goat', 'Golden Lion Tamarin', 'Goose', 'Gopher', 'Grasshopper', 'Grey Reef Shark', 'Grey Seal', 'Grizzly Bear', 'Guinea Fowl', 'Guinea Pig', 'Guppy', 'Hammerhead Shark', 'Hamster', 'Hare', 'Harrier', 'Havanese', 'Hedgehog', 'Heron', 'Howler Monkey', 'Humboldt Penguin', 'Hummingbird', 'Humpback Whale', 'Hyena', 'Iguana', 'Impala', 'Jackal', 'Jaguar', 'Kakapo', 'Kangaroo', 'King Penguin', 'Kingfisher', 'Kiwi', 'Koala', 'Komodo Dragon', 'Kudu', 'Lemming', 'Leopard', 'Liger', 'Lion', 'Lionfish', 'Little Penguin', 'Lizard', 'Lynx', 'Macaroni Penguin', 'Macaw', 'Magellanic Penguin', 'Magpie', 'Malayan Civet', 'Malayan Tiger', 'Maltese', 'Mandrill', 'Manta Ray', 'Markhor', 'Masked Palm Civet', 'Mastiff', 'Mayfly', 'Meerkat', 'Millipede', 'Monitor Lizard', 'Monte Iberia Eleuth', 'Moorhen', 'Moose', 'Moray Eel', 'Moth', 'Mountain Lion', 'Mouse', 'Newt', 'Nightingale', 'Ocelot', 'Octopus', 'Okapi', 'Opossum', 'Ostrich', 'Otter', 'Oyster', 'Pademelon', 'Panther', 'Parrot', 'Pekingese', 'Pelican', 'Penguin', 'Pheasant', 'Pied Tamarin', 'Piranha', 'Platypus', 'Pointer', 'Polar Bear', 'Pond Skater', 'Poodle', 'Porcupine', 'Possum', 'Prawn', 'Puffer Fish', 'Puffin', 'Pug', 'Puma', 'Purple Emperor', 'Quail', 'Quetzal', 'Quokka', 'Quoll', 'Rabbit', 'Radiated Tortoise', 'Red Panda', 'Red Wolf', 'Red-handed Tamarin', 'Reindeer', 'Rhinoceros', 'River Dolphin', 'River Turtle', 'Rock Hyrax', 'Rockhopper Penguin', 'Roseate Spoonbill', 'Royal Penguin', 'Sabre-Toothed Tiger', 'Saint Bernard', 'Salamander', 'Sand Lizard', 'Saola', 'Sea Dragon', 'Sea Otter', 'Sea Slug', 'Sea Squirt', 'Sea Turtle', 'Seahorse', 'Seal', 'Serval', 'Sheep', 'Shrimp', 'Siberian Tiger', 'Silver Dollar', 'Sloth', 'Slow Worm', 'Snapping Turtle', 'Snowshoe', 'Snowy Owl', 'Sparrow', 'Spectacled Bear', 'Sponge', 'Squid', 'Squirrel', 'Stellers Sea Cow', 'Stick Insect', 'Stoat', 'Striped Rocket Frog', 'Sun Bear', 'Swan', 'Tapir', 'Tarsier', 'Tasmanian Devil', 'Tawny Owl', 'Tetra', 'Thorny Devil', 'Tibetan Mastiff', 'Tiffany', 'Tiger', 'Tiger Salamander', 'Tortoise', 'Toucan', 'Tropicbird', 'Tuatara', 'Uakari', 'Uguisu', 'Umbrellabird', 'Vampire Bat', 'Vulture', 'Wallaby', 'Walrus', 'Warthog', 'Water Buffalo', 'Water Dragon', Corgi', Rhinoceros', 'White Tiger', 'Wildebeest', 'Wolf', 'Woodlouse', 'Woodpecker', 'Wrasse', 'X-Ray Tetra', 'Yak', 'Yellow-Eyed Penguin', 'Yorkshire Terrier', 'Zebra', 'Zebu', 'Zonkey', 'Zorse']

const allowedFields = new Set(['animals', 'humans'])

module.exports = exports.default = function generateNick({
    fields = ['animals']
  } = {}) {

  function humans() {
    const humans = [
      random.first(),
      random.middle(),
      random.last()]
    return humans
  }

  function get(field) {
    let obj = this[field]
    if (obj === void 0) {
      obj = eval(field)
    }
    if (typeof obj === 'function') {
      obj = obj()
    }
    if (Array.isArray(obj)) {
      return obj[Math.floor(Math.random() * obj.length)]
    }
    throw new Error('Unknown field: ' + field)
  }

  function words() {
    const okFields = [...fields].filter(x => allowedFields.has(x))
    return Array.from(okFields).map(field => {
      return get(field)
    }).filter(Boolean)
  }

  function randomName() {
    const names = words()
    return names[Math.floor(Math.random() * names.length)]
  }

  return `${get('adjectives')} ${randomName()}`
}
