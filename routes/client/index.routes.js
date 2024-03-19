const productRoutes = require("./products.routes");
const homeRoutes = require("./home.routes");
module.exports = (app)=>{
    app.get("/",homeRoutes);
     
     app.get("/products",productRoutes);
}