import CEO from "@/app/components/OurTeam/CEO";
import TeamMembers from "@/app/components/OurTeam/TeamMembers";
import teamMembersData from "@/app/data/team-members.json";
import ceoData from "@/app/data/ceo-message.json";

export default function Page() {
  return (
    <main>
      <CEO data={ceoData} />
      <TeamMembers teamMembersData={teamMembersData}/>
    </main>
  );
}
