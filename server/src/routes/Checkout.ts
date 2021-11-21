import { Router } from "express";
import checkoutController, {
  createCheckoutSession,
} from "src/controllers/Checkout";

const router = Router();

router.post("/create-checkout-session", createCheckoutSession);
router.post("/create-payment-intent", checkoutController.createPaymentIntent);
const checkoutRouter = router;

export default checkoutRouter;
