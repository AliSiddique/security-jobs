import React from 'react'

type Props = {}

let featured = [
    {
        title: 'Software Engineer',
        description: 'We are looking for a software engineer to join our team.',
        company: 'Google',
        place: 'Mountain View, CA',
        time: '1 day',
        applicants: 10,
        url: 'https://google.com',
    },
    {
        title: 'Software Engineer',
        description: 'We are looking for a software engineer to join our team.',
        company: 'Facebook',
        place: 'Menlo Park, CA',
        time: '2 days',
        applicants: 20,
        url: 'https://facebook.com',
    },
    {
        title: 'Software Engineer',
        description: 'We are looking for a software engineer to join our team.',
        company: 'Amazon',
        place: 'Seattle, WA',
        time: '3 days',
        applicants: 30,
        url: 'https://amazon.com',
    },
    {
        title: 'Software Engineer',
        description: 'We are looking for a software engineer to join our team.',
        company: 'Microsoft',
        place: 'Redmond, WA',
        time: '4 days',
        applicants: 40,
        url: 'https://microsoft.com',
    },
    {
        title: 'Software Engineer',
        description: 'We are looking for a software engineer to join our team.',
        company: 'Apple',
        place: 'Cupertino, CA',
        time: '5 days',
        applicants: 50,
        url: 'https://apple.com',
    },
    ]

export default function FeaturedJobs({}: Props) {
  return (
    <div>
        <section>
  <div
    className="items-center w-full px-8 md:px-12 py-12 lg:pt-32 mx-auto 2xl:max-w-7xl">
    <div className="border-t border-zinc-800 pt-2">
      <div className="flex flex-col gap-8 lg:gap-0">
        <p className="text-white text-base tracking-wide font-display uppercase">
          Featured positions
        </p>
        <div>
          <p
            className="text-base uppercase md:text-3xl mt-32 lg:text-6xl font-display tracking-tight text-white">
            Discover a wide range of thrilling job opportunities that align with
            your interests and chosen field of study.
          </p>
          <p className="mt-32">
            <a
              href="/board/all-jobs"
              className="text-white text-xs tracking-wide hover:text-zinc-500 uppercase font-display"
              >See all jobs</a
            >
          </p>
        </div>
        <ul
          className="flex flex-col mt-12 col-span-full divide-y border-y divide-zinc-800 border-zinc-800"
          role="list">
          {
            featured.slice(0, 5).map((template) => (
              <>
                <li className="w-full py-2">
                  <a
                    href={template.url}
                    title={template.title}
                    className="flex flex-col gap-8 lg:gap-0 w-full  text-white hover:text-zinc-500 duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:items-end lg:gap-0 mt-32">
                      <div className="flex-shrink-0 block ">
                        <div className="flex items-center">
                          <div className=" font-display  tracking-wide">
                            <p className="text-base  tracking-wide">
                              {template.description}
                            </p>
                            <div className="inline-flex items-center gap-2 mt-12 w-full text-xs">
                              <span>{template.company}</span>一
                              <span>{template.place}</span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-2 text-xs ">
                          <span>{template.time} ago</span>
                          <span> &bull;</span>
                          <span>{template.applicants} Applicants</span>
                        </div>
                      </div>
                      <p className=" text-base uppercase md:text-3xl  md:ml-auto lg:text-6xl font-display tracking-tight  lg:col-span-2">
                        {template.title}
                      </p>
                    </div>
                  </a>
                </li>
              </>
            ))
          }
        </ul>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}