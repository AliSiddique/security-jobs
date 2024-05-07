import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { db } from '../../../../prisma/db';

export async function GET(req: NextRequest, res: Response) {
  const limit = 20;
  const cursor = req.nextUrl.searchParams.get('cursor') ?? '';

  const cursorObj =
    cursor === '' ? undefined : { id: parseInt(cursor as string, 10) };

  const allposts = await db.jobPost.findMany({
    orderBy: [
      {
        created_at: 'asc',
      },
    ],
  });
  console.log(allposts);
  const posts = await db.jobPost.findMany({
    skip: cursor !== '' ? 1 : 0,
    cursor: cursorObj,
    take: limit,
    where: {
      featured: true,
    },
  });
  return NextResponse.json({
    posts,
    nextId: posts.length === limit ? posts[limit - 1].id : undefined,
  });
}
