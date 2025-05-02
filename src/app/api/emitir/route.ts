import { NextRequest, NextResponse } from 'next/server'
import { authenticate, emitirApolice } from '@/services/avlaService'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const token = await authenticate()

    console.log('📦 Payload recebido:', body)
    console.log('🪪 Token gerado:', token)

    const resultado = await emitirApolice(token, body)
    return NextResponse.json(resultado)
  } catch (error: any) {
    console.error('🔴 Erro na emissão:', error.response?.data || error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
