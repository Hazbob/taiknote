ALTER TABLE "notesContent" DROP CONSTRAINT "notesContent_fileId_files_id_fk";
--> statement-breakpoint
ALTER TABLE "notesContent" DROP COLUMN IF EXISTS "fileId";