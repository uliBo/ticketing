import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ulibotickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
