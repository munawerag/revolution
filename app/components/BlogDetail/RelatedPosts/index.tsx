import BlogCard, { BlogCardProps } from "../../common/cards/BlogCard";
import style from "./RelatedPosts.module.scss";

interface RelatedPostsProps {
  relatedPosts: {
    title: string;
    posts: BlogCardProps[];
  };
}

export default function RelatedPosts({ relatedPosts }: RelatedPostsProps) {
  return (
    <section className="section gray2-color-bg">
        <div className="container">
            <h3 className="h3 text-center">{relatedPosts.title}</h3>
            <div className={`${style["main-wrapper"]}`}>
                <div className={`${style["custom-row"]} custom-row`}>
                    {relatedPosts.posts.map((post, index) => (
                        <div className="col_12 col_lg_6" key={index}>
                            <BlogCard
                                img={post?.img}
                                subTitle={post?.subTitle}
                                title={post?.title}
                                ctaTitle={post?.ctaTitle}
                                ctaLink={post?.ctaLink}
                                target={post?.target}
                                customclass={post?.customclass}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
