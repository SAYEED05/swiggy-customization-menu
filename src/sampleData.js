const sampleData = [
  {
    id: 1,
    name: "BFF Veg Sub Combo (15cm , 6 inch)",
    description: "Buy any two 6' veg sub & get 2 cookie free",
    isVeg: true,
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
          { name: "Pepsi (500 ml) Pet Bottle", cost: 48, isVeg: true },
          { name: "Mirinda (500 ml) Pet Bottle", cost: 52, isVeg: true },
          { name: "Lipton Ice Tea (250 ml) Pet Bottle", cost: 36, isVeg: true },
          { name: "Mirinda (330 ml ) Can", cost: 30, isVeg: true },
        ],
      },
      {
        name: "Choice of Bread",
        multipleSelect: false,
        required: true,
        limit: 0,
        options: [
          { name: "Multigrain Bread", cost: 0, isVeg: true },
          { name: "Multigrain Honey Oats Bread", cost: 0, isVeg: true },
          { name: "Italian Bread", cost: 0, isVeg: true },
        ],
      },
      {
        name: "Choice of Vegetables",
        multipleSelect: true,
        required: true,
        limit: 0,
        options: [
          { name: "Lettuce", cost: 0, isVeg: true },
          { name: "Tomato", cost: 0, isVeg: true },
          { name: "Cucumber", cost: 0, isVeg: true },
          { name: "Pickle", cost: 0, isVeg: true },
        ],
      },
      {
        name: "Choice of Sauce",
        multipleSelect: true,
        required: false,
        limit: 3,
        options: [
          { name: "Mayonnaise", cost: 0, isVeg: false },
          { name: "Chipotle South West", cost: 0, isVeg: true },
          { name: "Red Chilli", cost: 0, isVeg: true },
          { name: "Marinara", cost: 0, isVeg: true },
          { name: "Sweet Onion", cost: 0, isVeg: true },
        ],
      },
      {
        name: "Choice of Free Cookie",
        multipleSelect: false,
        required: false,
        limit: 0,
        options: [
          { name: " Double Dark Chunk Chocolate Cookie", cost: 0, isVeg: true },
          { name: "Oatmeal Raisin Cookie", cost: 0, isVeg: true },
          { name: "Dark Chunk Chocolate Cookie", cost: 0, isVeg: true },
        ],
      },
    ],
  },
];

export default sampleData;
