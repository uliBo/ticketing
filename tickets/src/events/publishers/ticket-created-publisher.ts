import { Publisher, Subjects, TicketCreatedEvent } from '@ulibotickets/common';


export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
