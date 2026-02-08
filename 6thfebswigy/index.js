const express=require("express");
const app=express();
app.use(express.json());
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
app.get("/show",(req,res)=>{
    res.status(200).send(fooditem);
    console.log("show success");
})

app.post("/admin",(req,res)=>{
    //authenrication done 
    const code=1;
    if(code==1){
        fooditem.push(req.body);
        res.status(201).send("add item successfully")
    }
    else{
        res.status(202).send("items not added");
    }
})

app.delete("/admin/:id",(req,res)=>{
     const code=1;
     if(code==1){
        const id=parseInt(req.params.id);
        const index=fooditem.findIndex(info=>info.id===id);
        if ( index=== -1) {
            return res.status(404).send("Food item not found");
        }
        fooditem.splice(index,1);
        res.status(200).send("data delete success");
     }
     else{
         res.status(403).send("data not delete success");
     }
})
app.listen(3000,()=>{
    console.log("listen at port 3000");
})
