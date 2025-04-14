import Lofts from "@/app/components/360Tours/Lofts";
import Palms from "@/app/components/360Tours/Palms";
import TreeOfLife from "@/app/components/360Tours/TreeOfLife";
import SectionHeading from "@/app/components/common/SectionHeading";

export default function Tour360({page}: {page: any}) {
  const tour360Data = page?.tour360Data || page;

  return (
    <>
      <SectionHeading
        subTitle={tour360Data?.sectionHeading?.subTitle}
        title={tour360Data?.sectionHeading?.title}
        desc={tour360Data?.sectionHeading?.desc}
        isCenter={true}
      />
      <TreeOfLife data={tour360Data?.treeOfLife} />
      <Palms data={tour360Data?.palms} />
      <Lofts data={tour360Data?.lofts} />
    </>
  );
}
