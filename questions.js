 //driving
 const questions = [
  {
    question: " አንድ  ሰው  ያለውን  ሀሳብ  ለሌሎች  ከማካፈሉ  በፊት  ማድረግ  ያለበት ",
    answer: [
      { text: " ዋና  ዋና  ነጥቦችን መዝግቦ መያዝ      ", correct: false },
      { text: " የግንኙነት  መዘዞችን መረዳት", correct: false },
      { text: " ሰዎች እንዲያምኑህ ማድረግ", correct: false },
      { text: "ሁሉም", correct: true },
    ],
  },
  {
    question: " አንድ  በትራንስፖርት  ዘርፍ  የተሰማራ  ግለሰብ  ከቦታ  ወደ  ቦታ  በሚንቀሳቀስበት ጊዜ የአከባቢውን ህብረተሰብ       ጠንቅቆ  መረዳት  ሊገጥመው  የሚችለውን  ችግር  ያቃልላል፡፡ ",
    answer: [
      { text: "ቋንቋ ", correct: false },
      { text: " ሀይማኖት ", correct: false },
      { text: ". ባህል ", correct: false },
      { text: "ሁሉም መልስ ነው", correct: true },
    ],
  },
  {
    question: " በሁለት  አካላት  መካከል  የሚፈጠርን  ግጭት  ለማብረድ  መውሰድ ያለበት እርምጃ ያልሆነው የቱ ነው?  ",
    answer: [
      { text: " ሊያበሳጩ  የሚችሉ  ቃላትን  ከመሰንዘር  መቆጠብ ", correct: false },
      { text: "  እራስን መቆጣጠር  ", correct: false },
      { text: ". ከአካባቢው በመራቅ ", correct: false },
      { text: "ሁሉም መልስ ነው", correct: true },
    ],
  },
  {
    question: " አንድ  በትራንስፖርት  ዘርፍ  የተሰማራ  ግለሰብ  ከቦታ  ወደ  ቦታ  በሚንቀሳቀስበት ጊዜ የአከባቢውን ህብረተሰብ       ጠንቅቆ  መረዳት  ሊገጥመው  የሚችለውን  ችግር  ያቃልላል፡፡ ",
    answer: [
      { text: "ቋንቋ ", correct: false },
      { text: " ሀይማኖት ", correct: false },
      { text: ". ባህል ", correct: false },
      { text: "ሁሉም መልስ ነው", correct: true },
    ],
  },
  {
    question: " አንድ  በትራንስፖርት  ዘርፍ  የተሰማራ  ግለሰብ  ከቦታ  ወደ  ቦታ  በሚንቀሳቀስበት ጊዜ የአከባቢውን ህብረተሰብ       ጠንቅቆ  መረዳት  ሊገጥመው  የሚችለውን  ችግር  ያቃልላል፡፡ ",
    answer: [
      { text: "ቋንቋ ", correct: false },
      { text: " ሀይማኖት ", correct: false },
      { text: ". ባህል ", correct: false },
      { text: "ሁሉም መልስ ነው", correct: true },
    ],
  },
  {
    question: " አንድ  በትራንስፖርት  ዘርፍ  የተሰማራ  ግለሰብ  ከቦታ  ወደ  ቦታ  በሚንቀሳቀስበት ጊዜ የአከባቢውን ህብረተሰብ       ጠንቅቆ  መረዳት  ሊገጥመው  የሚችለውን  ችግር  ያቃልላል፡፡ ",
    answer: [
      { text: "ቋንቋ ", correct: false },
      { text: " ሀይማኖት ", correct: false },
      { text: ". ባህል ", correct: false },
      { text: "ሁሉም መልስ ነው", correct: true },
    ],
  },
  {
    question: " አንድ  በትራንስፖርት  ዘርፍ  የተሰማራ  ግለሰብ  ከቦታ  ወደ  ቦታ  በሚንቀሳቀስበት ጊዜ የአከባቢውን ህብረተሰብ       ጠንቅቆ  መረዳት  ሊገጥመው  የሚችለውን  ችግር  ያቃልላል፡፡ ",
    answer: [
      { text: "ቋንቋ ", correct: false },
      { text: " ሀይማኖት ", correct: false },
      { text: ". ባህል ", correct: false },
      { text: "ሁሉም መልስ ነው", correct: true },
    ],
  },
  {
    question: " አንድ  በትራንስፖርት  ዘርፍ  የተሰማራ  ግለሰብ  ከቦታ  ወደ  ቦታ  በሚንቀሳቀስበት ጊዜ የአከባቢውን ህብረተሰብ       ጠንቅቆ  መረዳት  ሊገጥመው  የሚችለውን  ችግር  ያቃልላል፡፡ ",
    answer: [
      { text: "ቋንቋ ", correct: false },
      { text: " ሀይማኖት ", correct: false },
      { text: ". ባህል ", correct: false },
      { text: "ሁሉም መልስ ነው", correct: true },
    ],
  },
  {
    question: " አንድ  በትራንስፖርት  ዘርፍ  የተሰማራ  ግለሰብ  ከቦታ  ወደ  ቦታ  በሚንቀሳቀስበት ጊዜ የአከባቢውን ህብረተሰብ       ጠንቅቆ  መረዳት  ሊገጥመው  የሚችለውን  ችግር  ያቃልላል፡፡ ",
    answer: [
      { text: "ቋንቋ ", correct: false },
      { text: " ሀይማኖት ", correct: false },
      { text: ". ባህል ", correct: false },
      { text: "ሁሉም መልስ ነው", correct: true },
    ],
  },
  {
    question: " አንድ  በትራንስፖርት  ዘርፍ  የተሰማራ  ግለሰብ  ከቦታ  ወደ  ቦታ  በሚንቀሳቀስበት ጊዜ የአከባቢውን ህብረተሰብ       ጠንቅቆ  መረዳት  ሊገጥመው  የሚችለውን  ችግር  ያቃልላል፡፡ ",
    answer: [
      { text: "ቋንቋ ", correct: false },
      { text: " ሀይማኖት ", correct: false },
      { text: ". ባህል ", correct: false },
      { text: "ሁሉም መልስ ነው", correct: true },
    ],
  },
  {
    question: " አንድ  በትራንስፖርት  ዘርፍ  የተሰማራ  ግለሰብ  ከቦታ  ወደ  ቦታ  በሚንቀሳቀስበት ጊዜ የአከባቢውን ህብረተሰብ       ጠንቅቆ  መረዳት  ሊገጥመው  የሚችለውን  ችግር  ያቃልላል፡፡ ",
    answer: [
      { text: "ቋንቋ ", correct: false },
      { text: " ሀይማኖት ", correct: false },
      { text: ". ባህል ", correct: false },
      { text: "ሁሉም መልስ ነው", correct: true },
    ],
  },
  {
    question: " አንድ  በትራንስፖርት  ዘርፍ  የተሰማራ  ግለሰብ  ከቦታ  ወደ  ቦታ  በሚንቀሳቀስበት ጊዜ የአከባቢውን ህብረተሰብ       ጠንቅቆ  መረዳት  ሊገጥመው  የሚችለውን  ችግር  ያቃልላል፡፡ ",
    answer: [
      { text: "ቋንቋ ", correct: false },
      { text: " ሀይማኖት ", correct: false },
      { text: ". ባህል ", correct: false },
      { text: "ሁሉም መልስ ነው", correct: true },
    ],
  },
  {
    question: " አንድ  በትራንስፖርት  ዘርፍ  የተሰማራ  ግለሰብ  ከቦታ  ወደ  ቦታ  በሚንቀሳቀስበት ጊዜ የአከባቢውን ህብረተሰብ       ጠንቅቆ  መረዳት  ሊገጥመው  የሚችለውን  ችግር  ያቃልላል፡፡ ",
    answer: [
      { text: "ቋንቋ ", correct: false },
      { text: " ሀይማኖት ", correct: false },
      { text: ". ባህል ", correct: false },
      { text: "ሁሉም መልስ ነው", correct: true },
    ],
  },
  {
    question: " አንድ  በትራንስፖርት  ዘርፍ  የተሰማራ  ግለሰብ  ከቦታ  ወደ  ቦታ  በሚንቀሳቀስበት ጊዜ የአከባቢውን ህብረተሰብ       ጠንቅቆ  መረዳት  ሊገጥመው  የሚችለውን  ችግር  ያቃልላል፡፡ ",
    answer: [
      { text: "ቋንቋ ", correct: false },
      { text: " ሀይማኖት ", correct: false },
      { text: ". ባህል ", correct: false },
      { text: "ሁሉም መልስ ነው", correct: true },
    ],
  },
  {
    question: " አንድ  በትራንስፖርት  ዘርፍ  የተሰማራ  ግለሰብ  ከቦታ  ወደ  ቦታ  በሚንቀሳቀስበት ጊዜ የአከባቢውን ህብረተሰብ       ጠንቅቆ  መረዳት  ሊገጥመው  የሚችለውን  ችግር  ያቃልላል፡፡ ",
    answer: [
      { text: "ቋንቋ ", correct: false },
      { text: " ሀይማኖት ", correct: false },
      { text: ". ባህል ", correct: false },
      { text: "ሁሉም መልስ ነው", correct: true },
    ],
  },
 
 

  //general
  {
    question: "What is the capital of France?",
    answer: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answer: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the smallest unit of life?",
    answer: [
      { text: "Atom", correct: false },
      { text: "Cell", correct: true },
      { text: "Molecule", correct: false },
      { text: "Organ", correct: false },
    ],
  },
  {
    question: "How many continents are there on Earth?",
    answer: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Claude Monet", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answer: [
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "NaCl", correct: false },
      { text: "O2", correct: false },
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    answer: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false },
    ],
  },
  {
    question: "What is the fastest land animal?",
    answer: [
      { text: "Cheetah", correct: true },
      { text: "Lion", correct: false },
      { text: "Horse", correct: false },
      { text: "Leopard", correct: false },
    ],
  },
  {
    question: "Which gas do plants primarily use for photosynthesis?",
    answer: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answer: [
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "South Korea", correct: false },
      { text: "Thailand", correct: false },
    ],
  },
  {
    question: "What is the square root of 64?",
    answer: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "10", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "Who was the first President of the United States?",
    answer: [
      { text: "Abraham Lincoln", correct: false },
      { text: "George Washington", correct: true },
      { text: "Thomas Jefferson", correct: false },
      { text: "John Adams", correct: false },
    ],
  },
  {
    question: "What is the primary ingredient in sushi?",
    answer: [
      { text: "Rice", correct: true },
      { text: "Bread", correct: false },
      { text: "Pasta", correct: false },
      { text: "Potato", correct: false },
    ],
  },
  {
    question: "What is the boiling point of water at sea level?",
    answer: [
      { text: "90°C", correct: false },
      { text: "100°C", correct: true },
      { text: "110°C", correct: false },
      { text: "120°C", correct: false },
    ],
  },
  //Riddles
  {
    question:
      "I have cities, but no houses; forests, but no trees; and water, but no fish. What am I?",
    answer: [

{ text: "A map", correct: true },
      { text: "A dream", correct: false },
      { text: "A painting", correct: false },
      { text: "A book", correct: false },
    ],
  },
  {
    question:
      "I have no voice, but I can speak to you. I have no life, but I can flourish. What am I?",
    answer: [
      { text: "A book", correct: true },
      { text: "A painting", correct: false },
      { text: "A song", correct: false },
      { text: "A movie", correct: false },
    ],
  },
  {
    question: "I always come, but never arrive. What am I?",
    answer: [
      { text: "Tomorrow", correct: true },
      { text: "Yesterday", correct: false },
      { text: "Today", correct: false },
      { text: "The future", correct: false },
    ],
  },
  {
    question:
      "I have cities, but no houses; forests, but no trees; and water, but no fish. What am I?",
    answer: [
      { text: "A map", correct: true },
      { text: "A dream", correct: false },
      { text: "A painting", correct: false },
      { text: "A book", correct: false },
    ],
  },
  {
    question:
      "I have no voice, but I can speak to you. I have no life, but I can flourish. What am I?",
    answer: [
      { text: "A book", correct: true },
      { text: "A painting", correct: false },
      { text: "A song", correct: false },
      { text: "A movie", correct: false },
    ],
  },
  {
    question: "I always come, but never arrive. What am I?",
    answer: [
      { text: "Tomorrow", correct: true },
      { text: "Yesterday", correct: false },
      { text: "Today", correct: false },
      { text: "The future", correct: false },
    ],
  },
  {
    question:
      "I have no voice, but I can speak to you. I have no life, but I can flourish. What am I?",
    answer: [
      { text: "A book", correct: true },
      { text: "A painting", correct: false },
      { text: "A song", correct: false },
      { text: "A movie", correct: false },
    ],
  },
  {
    question:
      "I have no life, but I can grow. I have no voice, but I can roar. What am I?",
    answer: [
      { text: "A fire", correct: true },
      { text: "A storm", correct: false },
      { text: "A river", correct: false },
      { text: "A mountain", correct: false },
    ],
  },
  {
    question:
      "I have cities, but no houses; forests, but no trees; and water, but no fish. What am I?",
    answer: [
      { text: "A map", correct: true },
      { text: "A dream", correct: false },
      { text: "A painting", correct: false },
      { text: "A book", correct: false },
    ],
  },
  {
    question: "I am tall when I am young, and short when I am old. What am I?",
    answer: [
      { text: "A candle", correct: true },
      { text: "A tree", correct: false },
      { text: "A building", correct: false },
      { text: "A person", correct: false },
    ],
  },
  {
    question:
      "I have no voice, but I can speak to you. I have no life, but I can flourish. What am I?",
    answer: [
      { text: "A book", correct: true },
      { text: "A painting", correct: false },
      { text: "A song", correct: false },
      { text: "A movie", correct: false },
    ],
  },
  {
    question: "I am always coming, but never arrive. What am I?",
    answer: [
      { text: "Tomorrow", correct: true },
      { text: "Yesterday", correct: false },
      { text: "Today", correct: false },
      { text: "The future", correct: false },
    ],
  },
  {
    question:
      "I have cities, but no houses; forests, but no trees; and water, but no fish. What am I?",
    answer: [
      { text: "A map", correct: true },
      { text: "A dream", correct: false },
      { text: "A painting", correct: false },
      { text: "A book", correct: false },
    ],
  },
  {
    question:
      "I have no voice, but I can speak to you. I have no life, but I can flourish. What am I?",
    answer: [
      { text: "A book", correct: true },
      { text: "A painting", correct: false },
      { text: "A song", correct: false },
      { text: "A movie", correct: false },
    ],
  },
  {

question: "I always come, but never arrive. What am I?",
    answer: [
      { text: "Tomorrow", correct: true },
      { text: "Yesterday", correct: false },
      { text: "Today", correct: false },
      { text: "The future", correct: false },
    ],
  },
  //Science

  {
    question: "What is the smallest unit of matter?",
    answer: [
      { text: "Atom", correct: true },
      { text: "Molecule", correct: false },
      { text: "Cell", correct: false },
      { text: "Element", correct: false },
    ],
  },
  {
    question: "Which process do plants use to convert sunlight into energy?",
    answer: [
      { text: "Respiration", correct: false },
      { text: "Photosynthesis", correct: true },
      { text: "Transpiration", correct: false },
      { text: "Fermentation", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answer: [
      { text: "Ag", correct: false },
      { text: "Au", correct: true },
      { text: "Fe", correct: false },
      { text: "Cu", correct: false },
    ],
  },
  {
    question: "What are the building blocks of proteins?",
    answer: [
      { text: "Nucleotides", correct: false },
      { text: "Lipids", correct: false },
      { text: "Carbohydrates", correct: false },
      { text: "Amino acids", correct: true },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: [
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Mercury", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "What is the force that pulls objects towards the Earth?",
    answer: [
      { text: "Friction", correct: false },
      { text: "Gravity", correct: true },
      { text: "Magnetism", correct: false },
      { text: "Buoyancy", correct: false },
    ],
  },
  {
    question: "What is the largest organ in the human body?",
    answer: [
      { text: "Heart", correct: false },
      { text: "Liver", correct: false },
      { text: "Brain", correct: false },
      { text: "Skin", correct: true },
    ],
  },
  {
    question: "What is the process of water changing from a liquid to a gas?",
    answer: [
      { text: "Condensation", correct: false },
      { text: "Evaporation", correct: true },
      { text: "Sublimation", correct: false },
      { text: "Freezing", correct: false },
    ],
  },
  {
    question: "What is the basic unit of heredity?",
    answer: [
      { text: "Gene", correct: true },
      { text: "Chromosome", correct: false },
      { text: "DNA", correct: false },
      { text: "Protein", correct: false },
    ],
  },
  {
    question: "What is the name of the positively charged particle in an atom?",
    answer: [
      { text: "Electron", correct: false },
      { text: "Neutron", correct: false },
      { text: "Proton", correct: true },
      { text: "Ion", correct: false },
    ],
  },
  {
    question: "What is the most abundant element in the Earth's atmosphere?",
    answer: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Argon", correct: false },
    ],
  },
  {
    question:
      "What is the process of breaking down food into smaller molecules?",
    answer: [
      { text: "Photosynthesis", correct: false },
      { text: "Respiration", correct: false },
      { text: "Digestion", correct: true },
      { text: "Excretion", correct: false },
    ],
  },
  {
    question: "What is the unit of measurement for electric current?",
    answer: [
      { text: "Volt", correct: false },
      { text: "Watt", correct: false },
      { text: "Ampere", correct: true },
      { text: "Ohm", correct: false },
    ],
  },
  {
    question:
      "What is the name of the layer of the Earth's atmosphere closest to the surface?",
    answer: [
      { text: "Stratosphere", correct: false },
      { text: "Mesosphere", correct: false },
      { text: "Thermosphere", correct: false },

{ text: "Troposphere", correct: true },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answer: [
      { text: "CO2", correct: false },
      { text: "H2O", correct: true },
      { text: "NaCl", correct: false },
      { text: "O2", correct: false },
    ],
  },

  //fun

  {
    question: "What color is the sky on a clear day?",
    answer: [
      { text: "Green", correct: false },
      { text: "Blue", correct: true },
      { text: "Red", correct: false },
      { text: "Yellow", correct: false },
    ],
  },
  {
    question: "What sound does a cat make?",
    answer: [
      { text: "Woof", correct: false },
      { text: "Meow", correct: true },
      { text: "Moo", correct: false },
      { text: "Quack", correct: false },
    ],
  },
  {
    question: "Which fruit is known for having a crown?",
    answer: [
      { text: "Apple", correct: false },
      { text: "Pineapple", correct: true },
      { text: "Orange", correct: false },
      { text: "Banana", correct: false },
    ],
  },
  {
    question: "What do bees produce?",
    answer: [
      { text: "Honey", correct: true },
      { text: "Milk", correct: false },
      { text: "Cheese", correct: false },
      { text: "Butter", correct: false },
    ],
  },
  {
    question: "What is 2 + 2?",
    answer: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    question: "What is the main ingredient in a salad?",
    answer: [
      { text: "Lettuce", correct: true },
      { text: "Rice", correct: false },
      { text: "Bread", correct: false },
      { text: "Potato", correct: false },
    ],
  },
  {
    question: "What is the name of Mickey Mouse's girlfriend?",
    answer: [
      { text: "Daisy", correct: false },
      { text: "Minnie", correct: true },
      { text: "Goofy", correct: false },
      { text: "Pluto", correct: false },
    ],
  },
  {
    question: "What is the tallest animal in the world?",
    answer: [
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: true },
      { text: "Lion", correct: false },
      { text: "Kangaroo", correct: false },
    ],
  },
  {
    question: "Which of these is a primary color?",
    answer: [
      { text: "Green", correct: false },
      { text: "Red", correct: true },
      { text: "Purple", correct: false },
      { text: "Pink", correct: false },
    ],
  },
  {
    question: "What shape is a basketball?",
    answer: [
      { text: "Square", correct: false },
      { text: "Round", correct: true },
      { text: "Triangle", correct: false },
      { text: "Hexagon", correct: false },
    ],
  },
  {
    question: "What is the name of the fairy in Peter Pan?",
    answer: [
      { text: "Tinker Bell", correct: true },
      { text: "Cinderella", correct: false },
      { text: "Snow White", correct: false },
      { text: "Belle", correct: false },
    ],
  },
  {
    question: "What is the fastest way to travel?",
    answer: [
      { text: "Car", correct: false },
      { text: "Airplane", correct: true },
      { text: "Bicycle", correct: false },
      { text: "Boat", correct: false },
    ],
  },
  {
    question: "Which animal is known as man's best friend?",
    answer: [
      { text: "Cat", correct: false },
      { text: "Dog", correct: true },
      { text: "Horse", correct: false },
      { text: "Parrot", correct: false },
    ],
  },
  {
    question: "Which month comes after December?",
    answer: [
      { text: "November", correct: false },
      { text: "January", correct: true },
      { text: "February", correct: false },
      { text: "October", correct: false },
    ],
  },
  {
    question: "What is the name of the toy cowboy in Toy Story?",
    answer: [
      { text: "Buzz", correct: false },
      { text: "Woody", correct: true },
      { text: "Rex", correct: false },
      { text: "Slinky", correct: false },
    ],
  },
];