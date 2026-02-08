const express = require("express");
const app = express();

app.use(express.json());

// -------------------- DATA --------------------
const fooditem = [
  { id: 1, category: "veg", name: "Paneer Butter Masala", price: 180 },
  { id: 2, category: "veg", name: "Veg Biryani", price: 150 },
  { id: 3, category: "veg", name: "Masala Dosa", price: 90 },
  { id: 4, category: "veg", name: "Aloo Paratha", price: 70 },
  { id: 5, category: "veg", name: "Chole Bhature", price: 120 },
  { id: 6, category: "veg", name: "Veg Fried Rice", price: 130 },
  { id: 7, category: "veg", name: "Paneer Tikka", price: 200 },
  { id: 8, category: "non-veg", name: "Chicken Biryani", price: 220 },
  { id: 9, category: "non-veg", name: "Butter Chicken", price: 240 },
  { id: 10, category: "non-veg", name: "Chicken Curry", price: 190 },
  { id: 11, category: "non-veg", name: "Mutton Curry", price: 280 },
  { id: 12, category: "non-veg", name: "Fish Fry", price: 210 },
  { id: 13, category: "non-veg", name: "Prawn Masala", price: 260 },
  { id: 14, category: "non-veg", name: "Egg Curry", price: 140 },
  { id: 15, category: "veg", name: "Veg Sandwich", price: 60 },
  { id: 16, category: "veg", name: "Tomato Soup", price: 80 },
  { id: 17, category: "non-veg", name: "Chicken Tikka", price: 230 }
];

// -------------------- PUBLIC ROUTE --------------------
app.get("/show", (req, res) => {
  res.status(200).send(fooditem);
});

// -------------------- ADMIN MIDDLEWARE --------------------
app.use("/admin", (req, res, next) => {
  const code = 1; // yahan JWT / auth logic aayega

  if (code === 1) {
    console.log("Admin middleware passed");
    next();
  } else {
    return res.status(401).send("Unauthorized");
  }
});

// -------------------- ADD ITEM --------------------
app.post("/admin", (req, res) => {
    const newItem=req.body;
    fooditem.push(newItem);

  res.status(201).send({
    message: "Item added successfully",
    data: newItem
  });
});

// -------------------- UPDATE ITEM (DYNAMIC PATCH) --------------------
app.patch("/admin", (req, res) => {
  const { id, ...updateData } = req.body;

  if (!id) {
    return res.status(400).send("ID is required");
  }

  if (Object.keys(updateData).length === 0) {
    return res.status(400).send("Nothing to update");
  }

  const index = fooditem.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).send("Food item not found");
  }

  fooditem[index] = {
    ...fooditem[index],
    ...updateData
  };

  res.status(200).send({
    message: "Item updated successfully",
    data: fooditem[index]
  });
});

// -------------------- DELETE ITEM --------------------
app.delete("/admin/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = fooditem.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).send("Food item not found");
  }

  fooditem.splice(index, 1);

  res.status(200).send("Item deleted successfully");
});

// -------------------- SERVER --------------------
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// app.patch("/update", (req, res) => {
//     const code = 1;

//     if (code !== 1) {
//         return res.status(403).send("Not authorized");
//     }

//     const id = req.body.id;

//     const fooddata = fooditem.find(item => item.id === id);

//     if (fooddata) {

//         if (req.body.food) {
//             fooddata.food = req.body.food;
//         }

//         if (req.body.price) {
//             fooddata.price = req.body.price;
//         }

//         if (req.body.category) {
//             fooddata.category = req.body.category;
//         }

//         res.status(200).send({
//             message: "Food updated successfully",
//             data: fooddata
//         });
//     }
//     else {
//         res.status(404).send("Food item not found");
//     }
// });

