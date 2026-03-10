// API route for generating site
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Implement site generation logic
  return NextResponse.json({ message: 'Site generated' });
}
