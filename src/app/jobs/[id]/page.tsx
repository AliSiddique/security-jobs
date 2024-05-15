import React from 'react';

import { JobPost } from '@prisma/client';
import { db } from '../../../../prisma/db';
import Markdown from '@/components/ui/Markdown';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Building,
  DollarSign,
  MapIcon,
  StepForward,
  Type,
  TypeIcon,
} from 'lucide-react';

type Props = {
  params: {
    id: string;
  };
};
// const getJob = async (id: string) => {
//   const res: any = await db.jobPost.findUnique({
//     where: {
//       id: parseInt(id),
//     },
//   });

//   return res;
// };

export default async function page({ params }: Props) {
  // const job: JobPost = await getJob(params.id);
  return (
    <div>
     <section>
  <div
    className="items-center w-full px-8 md:px-12 py-12 lg:pt-32 mx-auto 2xl:max-w-7xl">
    <div className="border-t border-zinc-800 pt-2">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0">
        <p className="text-white text-base tracking-wide font-display uppercase">
          Procreate
        </p>
        <div className="text-base tracking-tight text-white">
          <p className="gap-4 inline-flex items-center">
            <span>Remote</span>一
            <span>56 Days ago</span>一
            <span>594 Applicantes</span>
          </p>
        </div>
        <div>
          <ul
            role="list"
            className="flex flex-col divide-y divide-zinc-800 border-zinc-800 border-t lg:border-t-0 border-b text-base tracking-tight text-white w-full">
            <li className="inline-flex items-center justify-between w-full pb-2">
              Apply before <span>Sept 31, 2023</span>
            </li>
            <li className="inline-flex items-center justify-between w-full py-2">
              Job posted on <span>Sept 01, 2023</span>
            </li>
            <li className="inline-flex items-center justify-between w-full py-2">
              Job type <span>Full time</span>
            </li>
            <li className="inline-flex items-center justify-between w-full py-2">
              Salary <span>$80k - $125k</span>
            </li>
          </ul>
        </div>

        <p
          className="text-base uppercase md:text-3xl mt-32 lg:text-6xl font-display tracking-tight text-white col-span-full">
          Motion Graphcis
        </p>
      </div>
    </div>
    <div className="border-t border-zinc-800 pt-2">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0">
        <p className="text-white text-base tracking-wide font-display uppercase">
          Description
        </p>
        <p className="text-base tracking-tight text-white">
          Procreate is actively on the lookout for a talented motion designer to
          become an integral part of their creative team. In this exciting role,
          you'll be at the forefront of transforming static visuals into
          captivating, dynamic animations.
        </p>
      </div>
    </div>
    <div className="border-t border-zinc-800 pt-2 mt-32">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0">
        <p className="text-white text-base tracking-wide font-display uppercase">
          Responsabilities
        </p>
        <ul
          role="list"
          className="text-base tracking-tight text-white list-disc col-span-2">
          <li>
            Animation Creation: Develop captivating animations that enhance
            Procreate's projects, products, and promotional materials.
          </li>
          <li>
            Conceptualization: Brainstorm and ideate animation concepts that
            align with Procreate's brand identity and messaging.
          </li>
          <li>
            Collaboration: Work closely with the design and marketing teams to
            ensure animations are in sync with Procreate's overall creative
            direction.
          </li>
          <li>
            Visual Storytelling: Use motion design to tell engaging visual
            stories that resonate with Procreate's diverse user base.
          </li>
          <li>
            User Engagement: Optimize user engagement through animations,
            finding innovative ways to capture and retain the attention of
            Procreate's online community.
          </li>
          <li>
            Brand Consistency: Maintain brand consistency across all animation
            work, ensuring it aligns with Procreate's visual guidelines.
          </li>
          <li>
            Technical Expertise: Utilize industry-standard software and tools to
            create high-quality animations efficiently.
          </li>
          <li>
            Research and Innovation: Stay up-to-date with industry trends and
            incorporate innovative techniques into animation projects.
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-zinc-800 pt-2 mt-32">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0">
        <p className="text-white text-base tracking-wide font-display uppercase">
          Who you are...
        </p>
        <ul
          role="list"
          className="text-base tracking-tight text-white list-disc col-span-2">
          <li>
            Creative Visionary: You possess a keen eye for design and an innate
            ability to transform static visuals into captivating animations.
          </li>
          <li>
            Motion Design Expert: You are a skilled motion designer with a deep
            understanding of animation techniques and software tools.
          </li>
          <li>
            Collaborative Team Player: You excel at working collaboratively with
            design and marketing teams to bring creative visions to life.
          </li>
          <li>
            Storytelling Enthusiast: You are passionate about using motion
            design to tell compelling visual stories that resonate with diverse
            audiences.
          </li>
          <li>
            User Engagement Specialist: You have a knack for optimizing user
            engagement through innovative animations that capture and retain
            attention.
          </li>
          <li>
            Brand Advocate: You are committed to maintaining brand consistency
            across all animations, ensuring they align with Procreate's visual
            guidelines.
          </li>
          <li>
            Technical Guru: You are proficient in using industry-standard
            software and tools to create high-quality animations efficiently.
          </li>
          <li>
            Innovator: You stay up-to-date with industry trends and are eager to
            incorporate innovative techniques into your animation projects.
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-zinc-800 pt-2 mt-32">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0">
        <p className="text-white text-base tracking-wide font-display uppercase">
          Nice-To-Haves
        </p>
        <ul
          role="list"
          className="text-base tracking-tight text-white list-disc col-span-2">
          <li>
            3D Animation Skills: Proficiency in 3D animation software and the
            ability to create stunning 3D animations.
          </li>
          <li>
            Scripting and Coding Knowledge: Familiarity with scripting and
            coding languages for enhanced animation control.
          </li>
          <li>
            UI/UX Design Experience: Understanding of user interface and user
            experience design principles to create animations that enhance
            usability.
          </li>
          <li>
            VR/AR Animation: Experience in creating animations for virtual
            reality (VR) or augmented reality (AR) applications.
          </li>
          <li>
            Video Editing Skills: Proficiency in video editing software to
            enhance video content with animations.
          </li>
          <li>
            Storyboarding Abilities: Capability to create storyboards to plan
            and visualize animation sequences.
          </li>
          <li>
            Illustration Skills: Proficient illustration skills to complement
            animation projects with original artwork.
          </li>
          <li>
            Project Management: Experience in managing animation projects from
            concept to completion, including timelines and resources.
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-zinc-800 pt-2 mt-32">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0">
        <p className="text-white text-base tracking-wide font-display uppercase">
          Perks and benefits
        </p>
        <div
          className="flex flex-col gap-2 text-base tracking-tight text-white col-span-2">
          <p>Full Healthcare</p>
          <p>Unlimited Vacation</p><p>Skill Development</p><p>Team Summits</p>
          <p>Remote Working</p>
          <p>Commuter Benefits</p>
          <p>We give back.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
