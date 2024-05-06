import Jobs from "@/components/Jobs";
import { db } from "../../../../prisma/db";
import React from "react";
import JobEntries from "@/components/Jobs";

type Props = {
    params: {
        tag: string;
    };
};
const getTags = async (tag: string) => {
    const res: any = await db.jobPost.findMany({
        where: {
            tags: { has: tag }
        },
    });

    return res;
};
  
  export default async function page({ params }: Props) {
    const tags = await getTags(params.tag);
    console.log(tags)
return (
    <div>
        {tags.map((tag: any) =>  {
              return (
                <React.Fragment key={tag.id}>
                    <JobEntries
                      url={'/companies/' + tag.slug}
                      type={tag.type}
                      salary={tag.salary}
                      location={tag.location}
                      company={tag.company_name}
                      position={tag.position}
                      companyLogo={tag.company_logo}
                      color={tag.color}
                      tags={tag.tags}
                      apply_link={tag.apply_link}
                      id={tag.id}
                      title={tag.title}
                    />
                  
                </React.Fragment>
              );
            }
        )}
    </div>
)
  }