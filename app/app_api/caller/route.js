export async function GET() {
  console.log('app router: fetching time from another API...');

  const response = await fetch(
    `https://162809-nextjs-api.preview.vercel-support.app/api/time_for_app`
  );
  const data = await response.json();

  console.log('app router: ', data);

  return Response.json({ data });
}
