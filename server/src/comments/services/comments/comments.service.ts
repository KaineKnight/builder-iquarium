import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CommentEntity, TaskEntity, UserEntity } from "../../../entities";
import { Repository } from "typeorm";
import { CreateCommentDto } from "../../dto/CreateComment.dto";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentEntity) private readonly commentRepository: Repository<CommentEntity>,
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(TaskEntity) private readonly taskRepository: Repository<TaskEntity>,
  ) {
  }

  async getCommentsByUserId(id: number) {
    return await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect("user.comments", "comments")
      .where("comments.id = :id", {id: id})
      .getMany();
  }

  async getCommentsByTaskId(id: number) {
    return await this.taskRepository
      .createQueryBuilder('task')
      .leftJoinAndSelect("task.comments", "comments")
      .where("task.id = :id", {id: id})
      .getMany();
  }


  async createComment(userId: number, taskId: number, createCommentDto: CreateCommentDto) {
    const user: UserEntity = await this.userRepository.findOneById(userId);
    if(user == null) throw new HttpException("no such user", HttpStatus.BAD_REQUEST);
    const task: TaskEntity = await this.taskRepository.findOneById(taskId);
    if(task == null) throw new HttpException("no such task", HttpStatus.BAD_REQUEST);

    //return await this.userRepository
    //  .createQueryBuilder('user')
    //  .leftJoinAndSelect("user.comments", "comments")
    //  .where("user.id = :id", {id: userId})
    //  .getSql();
    const userComments: CommentEntity[] = await this.userRepository.manager.query('' +
      'SELECT "comments"."id" AS "id", "comments"."text" AS "text", "comments"."isSolved" AS "isSolved",\n' +
      '"comments"."taskId" AS "taskId", "comments"."userId" AS "userId" FROM "users" "user" LEFT JOIN\n' +
      '"comments" "comments" ON "comments"."userId"="user"."id" WHERE "user"."id" = ' + `${userId}`)
    if (userComments[0].id != null) {
      user.addComments(userComments);
    }
    user.addComment(await this.commentRepository.save(createCommentDto))
    await this.userRepository.save(user);

    //return await this.taskRepository
    //  .createQueryBuilder('task')
    //  .leftJoinAndSelect("task.comments", "comments")
    //  .where("task.id = :id", {id: taskId})
    //  .getSql();

    const taskComments: CommentEntity[] = await this.commentRepository.manager.query('' +
      'SELECT "comments"."id" AS "id","comments"."text" AS "text", "comments"."isSolved" AS "isSolved", \n' +
      '"comments"."taskId" AS "taskId", "comments"."userId" AS "userId" FROM "tasks" "task" LEFT JOIN "comments" "comments" ON\n' +
      '"comments"."taskId"="task"."id" WHERE "task"."id" = ' + `${taskId}`);
    if (taskComments[0].id != null) {
      task.addComments(taskComments);
    }
    task.addComment(await this.commentRepository.save(createCommentDto))
    return await this.taskRepository.save(task);




  }

}
