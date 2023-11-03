export default async (req, res) => {
  console.log('page router: fetching time from another API...');

  const response = await fetch(
    `https://162809-nextjs-api.preview.vercel-support.app/api/time_for_page`
  );
  const data = await response.json();

  console.log('page router: ', data);

  res.json({ data });
};
