import CEO from "@/app/components/OurTeam/CEO";
import TeamMembers from "@/app/components/OurTeam/TeamMembers";

export default function OurTeam({page}: any) {

  const { ceoMessage, teamMembers } = page?.teamMembersData || page;

  return (
    <>
      <CEO data={ceoMessage} />
      <TeamMembers teamMembersData={teamMembers} />
    </>
  );
}
