import CurrentVacancies from "@/app/components/vacancies/CurrentVacancies";
import vacanciesData from "../../data/vacancies.json";  
import CandidatesPolicies from "@/app/components/vacancies/CandidatesPolicies";

export default function Page() {
  return (
    <main>
        <CurrentVacancies vacancies={vacanciesData.vacancies} />
        <CandidatesPolicies/>
    </main>
  )
}
