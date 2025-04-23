import { NextRequest, NextResponse } from 'next/server'
import { authenticate, criarCotacao } from '@/services/avlaService'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const token = await authenticate()
    const resposta = await criarCotacao(token, body)
    return NextResponse.json(resposta)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
