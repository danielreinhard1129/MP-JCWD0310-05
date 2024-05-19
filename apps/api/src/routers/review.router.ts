import { EventController } from "@/controllers/event.controller";
import { ReviewController } from "@/controllers/review.controller";
import { verifyToken } from "@/lib/jwt";
import { uploader } from "@/lib/uploader";
import { Router } from "express";
export class ReviewRouter {
    private router: Router;
    private reviewController: ReviewController;

    constructor() {
        this.reviewController = new ReviewController();
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.post('/',verifyToken,this.reviewController.createReviewController);
        this.router.get('/:id', this.reviewController.getReviewController);
        // this.router.get('/:id', this.eventController.getEventController);
      }


    getRouter(): Router {
        return this.router;
    }
}