import { Router } from "express";
import { GetProductsWithOutStock } from "../../../usecases/product/GetProductsWithOutStock";


const router = Router();

router.get("/", async (req, res) => {
    try {
        const getProductsWithOutStockUseCase = new GetProductsWithOutStock();
        res.json(await getProductsWithOutStockUseCase.execute());    
    } catch (error) {
        res.status(500).json({
            error: "No fue posíble encontrar los productos"
        });
    }

});

export default router;