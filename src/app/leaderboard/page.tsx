import { LeaderboardTable } from "./table";
import { db } from "@/server/db";
import { profiles as profilesTable } from "@/schema";
import { desc } from "drizzle-orm";

export default async function LeaderboardPage() {
  const profiles = await db
    .select()
    .from(profilesTable)
    .orderBy(desc(profilesTable.totalAura))
    .limit(5);

  return (
    <div>
      <h1 className="my-4 text-center text-2xl font-bold">Top 5 Aura</h1>
      <LeaderboardTable profiles={profiles} />
    </div>
  );
}
