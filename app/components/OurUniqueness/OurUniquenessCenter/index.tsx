import style from "./OurUniquenessCenter.module.scss";

type OurUniquenessCenterProps = {
  centerDescription: string | null;
};

export default function OurUniquenessCenter({ centerDescription }: OurUniquenessCenterProps) {
  return (
    <section className="section-my">
      <div className="container-s">
        {centerDescription && (
          <div
            className={`${style["center-description"]}`}
            dangerouslySetInnerHTML={{ __html: centerDescription ?? "" }}
          />
        )}
      </div>
    </section>
  );
}
