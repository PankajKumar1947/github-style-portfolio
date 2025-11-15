import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  try {
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`),
    ]);

    console.log(userResponse, reposResponse);

    if (!userResponse.ok) {
      return NextResponse.json({ error: 'Failed to fetch user data from GitHub' }, { status: userResponse.status });
    }

    if (!reposResponse.ok) {
      return NextResponse.json({ error: 'Failed to fetch repository data from GitHub' }, { status: reposResponse.status });
    }

    const userData = await userResponse.json();
    const reposData = await reposResponse.json();

    const profileData = {
      name: userData.name,
      username: userData.login,
      bio: userData.bio,
      avatar: userData.avatar_url,
      location: userData.location,
      website: userData.blog,
      company: userData.company,
      twitter: userData.twitter_username,
    };

    const repositoriesData = reposData.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      isPrivate: repo.private,
      updatedAt: repo.updated_at,
      url: repo.html_url,
    }));

    return NextResponse.json({
      profile: profileData,
      repositories: repositoriesData,
      overview: {
        pinnedRepositories: repositoriesData.slice(0, 6),
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
