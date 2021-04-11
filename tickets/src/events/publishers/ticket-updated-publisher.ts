import { Publisher, Subjects, TicketUpdatedEvent } from '@ulibotickets/common';


export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
