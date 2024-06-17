ALTER TABLE "notesContent" ADD COLUMN "fileId" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "notesContent" ADD CONSTRAINT "notesContent_fileId_files_id_fk" FOREIGN KEY ("fileId") REFERENCES "public"."files"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
