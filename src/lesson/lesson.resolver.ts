import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

@Resolver(() => LessonType)
export class LessonResolver {
    constructor(private lessonService: LessonService) { }

    @Query(() => LessonType)
    lesson(@Args('id') id: string) {
        return this.lessonService.findOne(id)
    }

    @Query(() => [LessonType])
    lessons() {
        return this.lessonService.findAll()
    }


    @Mutation(() => LessonType)
    createLesson(
        @Args('name') name: string,
        @Args('startDate') startDate: string,
        @Args('endDate') endDate: string,
    ) {
        return this.lessonService.create(name, startDate, endDate);
    }
}