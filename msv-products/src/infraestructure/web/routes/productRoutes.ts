import { Router } from "express";
import { GetProducts } from "../../../usecases/product/GetProducts";


const router = Router();

router.get("/", async (req, res) => {
   let page  = 0;
    try {
        page = Number(req.query.page);
        const getProductsUseCase = new GetProducts();
        res.json(await getProductsUseCase.execute(page));    
    } catch (error) {
        res.status(500).json({
            error: "No fue posíble encontrar los productos"
        });
    }

});

export default router;