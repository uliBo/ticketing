import { Publisher, OrderCreatedEvent, Subjects } from '@ulibotickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}