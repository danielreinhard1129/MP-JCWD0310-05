import { Router } from "express";
import { EventController } from "@/controllers/event.controller";
import { uploader } from "@/lib/uploader";
export class EventRouter {
    private router: Router;
    private eventController: EventController;

    constructor() {
        this.eventController = new EventController();
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.post('/create-event', this.eventController.createEventController)
    }

    getRouter(): Router {
        return this.router;
    }
}