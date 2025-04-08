import CurrentVacancies from "@/app/components/vacancies/CurrentVacancies";

export default function Vacancies({ page }: { page: any }) {
  const vacanciesData  = page?.vacanciesData || page;

  return (
    <>
      <CurrentVacancies vacancies={vacanciesData?.vacancies} />
    </>
  );
}
