import { Router } from "express";
import { createCheckoutSession } from "src/controllers/Checkout";

const router = Router();

router.post("/create-checkout-session", createCheckoutSession);
const checkoutRouter = router;

export default checkoutRouter;
