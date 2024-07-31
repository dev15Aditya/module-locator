import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  const url = `https://api.github.com/search/code?q=${encodeURIComponent(query)}`;
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json({ error: 'GitHub token is not configured' }, { status: 500 });
  }

  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error in GitHub API request:', error);
    return NextResponse.json({ error: 'Failed to fetch data from GitHub' }, { status: 500 });
  }
}