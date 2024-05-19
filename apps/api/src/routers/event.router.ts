import { EventController } from "@/controllers/event.controller";
import { ReviewController } from "@/controllers/review.controller";
import { verifyToken } from "@/lib/jwt";
import { uploader } from "@/lib/uploader";
import { Router } from "express";
export class EventRouter {
    private router: Router;
    private eventController: EventController;
    // private reviewController: ReviewController;

    constructor() {
        this.eventController = new EventController();
        // this.reviewController = new ReviewController();
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.post('/', verifyToken, uploader('IMG', '/images').array('thumbnail', 1) ,this.eventController.createEventController);
        // this.router.post('/', this.reviewController.createReviewController);
        this.router.get('/', this.eventController.getEventsController);
        this.router.get('/:id', this.eventController.getEventController);
      }


    getRouter(): Router {
        return this.router;
    }
}