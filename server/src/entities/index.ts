import { TaskEntity } from "./task.entity";
import { EpochEntity } from "./epoch.entity";
import { ProjectEntity } from "./project.entity";
import { RoleEntity } from "./role.entity";
import { TeamEntity } from "./team.entity";
import { UserEntity } from "./user.entity";
import { CommentEntity } from "./comment.entity";
import { DocumentEntity } from "./document.entity";
import { TagEntity } from "./tag.entity";
import { ItemEntity } from "./item.entity";

const entities = [
  EpochEntity, ProjectEntity, RoleEntity,
  TaskEntity, TeamEntity, UserEntity, CommentEntity,
  DocumentEntity, TagEntity, ItemEntity,
];

export {
  EpochEntity, ProjectEntity, RoleEntity,
  TaskEntity, TeamEntity, UserEntity, CommentEntity,
  DocumentEntity, TagEntity, ItemEntity
};

export default entities;