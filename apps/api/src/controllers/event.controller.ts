import { createEventService } from '@/services/event/create-event.service';
import { Request, Response } from 'express';

export class EventController {
  async createEventController(req: Request, res: Response) {
    const files = req.files as Express.Multer.File[];

    if (!files?.length) {
        throw new Error('no file uploaded');
    }

    const result = await createEventService(req.body, files[0])

    return res.status(201).send(result);
  }
}
