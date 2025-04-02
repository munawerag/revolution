import CurrentVacancies from "@/app/components/vacancies/CurrentVacancies";
import vacanciesData from "../../data/vacancies.json";  

export default function Page() {
  return (
    <main>
        <CurrentVacancies vacancies={vacanciesData.vacancies} />
    </main>
  )
}
