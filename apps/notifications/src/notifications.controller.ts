import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NotifyEmailDto } from './dto/notifyEmail.dto';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
  @UsePipes(new ValidationPipe())
  @EventPattern('notify_email')
  async notify_email(@Payload() data: NotifyEmailDto) {
    this.notificationsService.notfyEmail(data);
  }
}
