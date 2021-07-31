const sampleData = [
  {
    id: 1,
    name: "BFF Veg Sub Combo (15cm , 6 inch)",
    description: "Buy any two 6' veg sub & get 2 cookie free",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ieqpaerjsv5zwbm2uxks",
    basePrice: 200,
    addOns: [
      {
        name: "Choice of Beverages",
        multipleSelect: true,
        required: false,
        limit: 0,
        options: [
          { name: "Pepsi (500 ml) Pet Bottle", cost: 48 },
          { name: "Mirinda (500 ml) Pet Bottle", cost: 52 },
          { name: "Lipton Ice Tea (250 ml) Pet Bottle", cost: 36 },
          { name: "Mirinda (330 ml ) Can", cost: 30 },
        ],
      },
      {
        name: "Choice of Bread",
        multipleSelect: false,
        required: true,
        limit: 0,
        options: [
          { name: "Multigrain Bread", cost: 0 },
          { name: "Multigrain Honey Oats Bread", cost: 0 },
          { name: "Italian Bread", cost: 0 },
        ],
      },
      {
        name: "Choice of Vegetables",
        multipleSelect: true,
        required: true,
        limit: 0,
        options: [
          { name: "Lettuce", cost: 0 },
          { name: "Tomato", cost: 0 },
          { name: "Cucumber", cost: 0 },
          { name: "Pickle", cost: 0 },
        ],
      },
      {
        name: "Choice of Sauce",
        multipleSelect: true,
        required: false,
        limit: 3,
        options: [
          { name: "Mayonnaise", cost: 0 },
          { name: "Chipotle South West", cost: 0 },
          { name: "Red Chilli", cost: 0 },
          { name: "Marinara", cost: 0 },
          { name: "Sweet Onion", cost: 0 },
        ],
      },
      {
        name: "Choice of Free Cookie",
        multipleSelect: false,
        required: true,
        limit: 0,
        options: [
          { name: " Double Dark Chunk Chocolate Cookie", cost: 0 },
          { name: "Oatmeal Raisin Cookie", cost: 0 },
          { name: "Dark Chunk Chocolate Cookie", cost: 0 },
        ],
      },
    ],
  },
];

export default sampleData;
