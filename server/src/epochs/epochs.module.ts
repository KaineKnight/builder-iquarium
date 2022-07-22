import { Module } from '@nestjs/common';
import { EpochsController } from './controllers/epochs/epochs.controller';
import { EpochsService } from './services/epochs/epochs.service';

@Module({
  controllers: [EpochsController],
  providers: [EpochsService]
})
export class EpochsModule {}
