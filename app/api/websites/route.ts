// API route for websites
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // Implement websites fetching logic
  return NextResponse.json({ websites: [] });
}
