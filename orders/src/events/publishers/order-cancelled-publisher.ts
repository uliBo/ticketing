import { Subjects, Publisher, OrderCancelledEvent } from '@ulibotickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}