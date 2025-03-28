import Image from "next/image";
import style from "./TeamMembers.module.scss";

interface TeamMembersProps {
    teamMembersData?: {
        id?: number;
        name?: string;
        position?: string;
        image?: string;
    }[];
}

export default function TeamMembers({ teamMembersData = [] }: TeamMembersProps) {
  return (
    <section className="section">
      <div className="container-s">
        <div className="custom-row">
          {teamMembersData?.map((member) => (
            <div key={member.id} className="col_12 col_md_4 col_lg_3">
              <div className={`${style["team-card"]}`}>
                <div className={`${style["team-card__figure"]}`}>
                  <Image
                    className="img-hack"
                    src={member?.image ? member?.image : ""}
                    alt={`${member?.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h4 className="h4">{member?.name}</h4>
                <p className="p">{member?.position}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`${style["data-loading"]}`}>
          <span className={`${style["loading-icon"]}`}>
            <Image src="/assets/svgs/loading.svg" alt="loading" width={20} height={20} />
          </span>
          <span>Loading More</span>
        </div>
      </div>
    </section>
  );
}
