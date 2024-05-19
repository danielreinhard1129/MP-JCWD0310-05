import { createEventService } from '@/services/event/create-event-service';
import { getEventService } from '@/services/event/get-event-service';
import { getEventsService } from '@/services/event/get-events-service';
import { getEventsByOrganizerService } from '@/services/event/get-eventsbyorganizer-service';
import { NextFunction, Request, Response } from 'express';

export class EventController {
  async createEventController(req: Request, res: Response, next: NextFunction) {
    try {
      const files = req.files as Express.Multer.File[];

      if (!files?.length) {
        throw new Error('no file uploaded');
      }

      const result = await createEventService(req.body, files[0]);
      // console.log(result);
      
      return res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getEventController(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const result = await getEventService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  // async getEventsController(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const id = req.query.id;
  //     const result = await getEventsByOrganizerService(String(id));

  //     return res.status(200).send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  async getEventsByOrganizerController(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.query.id;
      const result = await getEventsByOrganizerService(String(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getEventsController(req: Request, res: Response, next: NextFunction) {
    try {
      const query = {
        take: parseInt(req.query.take as string) || 10,
        page: parseInt(req.query.page as string) || 1,
        sortBy: (req.query.sortBy as string) || 'createdAt',
        sortOrder: (req.query.sortOrder as string) || 'desc',
        search: (req.query.search as string) || '',
      };
      const result = await getEventsService(query);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
