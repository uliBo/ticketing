import { Subjects, Publisher, PaymentCreatedEvent } from '@ulibotickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
