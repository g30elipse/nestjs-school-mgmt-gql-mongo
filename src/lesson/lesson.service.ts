import { Injectable } from '@nestjs/common';
import { Lesson } from './lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson)
        private readonly lessonRepository: Repository<Lesson>,
    ) { }

    async findAll(): Promise<Lesson[]> {
        return await this.lessonRepository.find();
    }

    async findOne(id: string): Promise<Lesson> {
        return await this.lessonRepository.findOne({ id });
    }

    async create(name: string, startDate: string, endDate: string): Promise<Lesson> {
        return await this.lessonRepository.save({
            endDate,
            name,
            startDate,
            id: uuid(),
        });
    }

}
