const sampleData = [
  {
    name: "",
    description: "",
    image: "",
    basePrice: 200,
    addOns: {
      ChoiceOfBread: {
        name: "Choice Of Bread",
        isRequired: false,
        options: [
          { name: "Multigrain Bread", cost: 0 },
          { name: "Multigrain Honey Oats Bread", cost: 0 },
          { name: "Italian Bread", cost: 0 },
        ],
        limit: 0,
        multipleSelect: false,
      },
      ChoiceOfVegetables: {
        name: "Choice of Vegetables",
        isRequired: false,
        options: [
          { name: "Lettuce", cost: 0 },
          { name: "Tomato", cost: 0 },
          { name: "Cucumber", cost: 0 },
          { name: "Pickle", cost: 0 },
        ],
        limit: 0,
        multipleSelect: false,
      },
      ChoiceOfSauce: {
        name: "Choice of Sauce",
        isRequired: false,
        options: [
          { name: "Mayonnaise", cost: 0 },
          { name: "Chipotle South West", cost: 0 },
          { name: "Red Chilli", cost: 0 },
          { name: "Marinara", cost: 0 },
          { name: "Sweet Onion", cost: 0 },
        ],
        limit: 3,
        multipleSelect: false,
      },
      ChoiceOfFreeCookie: {
        name: "Choice of Free Cookie",
        isRequired: false,
        options: [
          { name: " Double Dark Chunk Chocolate Cookie", cost: 0 },
          { name: "Oatmeal Raisin Cookie", cost: 0 },
          { name: "Dark Chunk Chocolate Cookie", cost: 0 },
        ],
        limit: 0,
        multipleSelect: false,
      },
      ChoiceOfBeverages: {
        name: "Choice of Beverages",
        isRequired: false,
        options: [
          { name: "Pepsi (500 ml) Pet Bottle", cost: 48 },
          { name: "Mirinda (500 ml) Pet Bottle", cost: 52 },
          { name: "Lipton Ice Tea (250 ml) Pet Bottle", cost: 36 },
          { name: "Mirinda (330 ml ) Can", cost: 30 },
        ],
        limit: 0,
        multipleSelect: false,
      },
    },
  },
];

export default sampleData;
