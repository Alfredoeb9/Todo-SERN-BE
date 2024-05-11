CREATE TABLE `todo_todos` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`email` text NOT NULL,
	`task` text NOT NULL,
	`priority` text NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `todo_users` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `titleTodoIdx` ON `todo_todos` (`title`);--> statement-breakpoint
CREATE UNIQUE INDEX `emailIdx` ON `todo_users` (`email`);