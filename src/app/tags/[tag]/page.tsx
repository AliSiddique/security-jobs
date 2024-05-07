import Jobs from "@/components/Jobs";
import { db } from "../../../../prisma/db";
import React from "react";
import JobEntries from "@/components/Jobs";
import Hero from "@/components/ui/Hero";

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
        <Hero title={`Find jobs for ${params.tag}`} description={`Search for your next ${params.tag} job from our database of over 1000+ jobs`}  />
    <div className='mx-auto max-w-6xl px-8 py-12 md:px-32'>
        <div className='gird-cols-1 grid gap-2 border-b border-gray-200 pb-5 lg:grid-cols-2'>
          <h3 className='text-lg font-semibold leading-6 text-slate-900 lg:text-xl'>
            Featured Jobs
          </h3>
          <p className='text-sm text-gray-500'>
            Browse through our curated list of featured jobs.
          </p>
        </div>
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
    </div>

)
  }