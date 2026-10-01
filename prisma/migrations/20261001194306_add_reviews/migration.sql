-- This is an empty migration.

ALTER TABLE "Review" ADD CONSTRAINT "rating_between_1_and_5" CHECK ("rating" BETWEEN 1 AND 5);