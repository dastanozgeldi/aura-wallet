import { Brain, User } from "lucide-react";
import { getMyEvents, getMyProfile } from "@/server/queries";
import { AuraCard } from "@/components/aura-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AddEventModal } from "./add-event-modal";

export default async function WalletPage() {
  const events = await getMyEvents();
  const profile = await getMyProfile();

  return (
    <div className="h-full">
      <div className="mt-4 space-y-3">
        <Tabs defaultValue="profile_total">
          <TabsList>
            <TabsTrigger value="from_events">From Events</TabsTrigger>
            <TabsTrigger value="profile_total">Profile Total</TabsTrigger>
          </TabsList>
          <TabsContent value="from_events">
            <AuraCard
              aura={events.reduce((acc, event) => acc + event.aura, 0)}
              title="From Events"
              description={`you got ${events[0].aura > 0 && "+"}${events[0].aura} aura from last time.`}
              icon={<Brain className="h-4 w-4 text-muted-foreground" />}
            />
          </TabsContent>
          <TabsContent value="profile_total">
            <AuraCard
              aura={profile.totalAura!}
              title="Profile Total"
              description="your profile aura may be different from events because you made a donation"
              icon={<User className="h-4 w-4 text-muted-foreground" />}
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="my-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold">events</h1>
          <div>{events.length} in total</div>
        </div>
        <div className="mt-3 h-[300px] space-y-3 overflow-auto">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event.id} className="rounded-lg border p-4">
                <div className="mb-2 flex items-center justify-between font-bold">
                  <h2 className="text-xl">{event.title}</h2>
                  <span>
                    {event.aura > 0 && "+"}
                    {event.aura}
                  </span>
                </div>
                <p className="text-muted-foreground">{event.explanation}</p>
              </div>
            ))
          ) : (
            <div className="flex h-full items-center justify-center rounded-lg border text-center text-muted-foreground">
              your events will be displayed here.
            </div>
          )}
        </div>
      </div>

      <AddEventModal />
    </div>
  );
}
