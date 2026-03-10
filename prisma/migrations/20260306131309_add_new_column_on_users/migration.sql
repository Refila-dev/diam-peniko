/*
  Warnings:

  - Added the required column `place_of_birth` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profession` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "place_of_birth" TEXT NOT NULL,
ADD COLUMN     "profession" TEXT NOT NULL;
