import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import { events, profiles } from "@/schema";
import { desc, eq } from "drizzle-orm";

export async function getMyEvents() {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");

  return db
    .select()
    .from(events)
    .where(eq(events.userId, userId))
    .orderBy(desc(events.createdAt));
}

export async function getMyProfile() {
  const { userId } = auth();
  const [profile] = await db
    .select()
    .from(profiles)
    .where(eq(profiles.userId, userId!));

  return profile;
}

export async function getProfileByUsername(username: string) {
  const [profile] = await db
    .select()
    .from(profiles)
    .where(eq(profiles.username, username));

  return profile;
}

export async function getLeaderboard() {
  return db.select().from(profiles).orderBy(desc(profiles.totalAura));
}
