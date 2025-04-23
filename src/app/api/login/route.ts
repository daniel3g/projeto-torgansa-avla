import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST() {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_AVLA_API}/login`,
      {
        username: process.env.AVLA_USERNAME,
        password: process.env.AVLA_PASSWORD,
        organizationUnitName: process.env.AVLA_ORG_UNIT,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const accessToken = res.data?.accessToken
    if (!accessToken) throw new Error('Token não encontrado')

    return NextResponse.json({ accessToken })
  } catch (err: any) {
    console.error('❌ Erro ao autenticar na AVLA:', err.response?.data || err.message)
    return NextResponse.json(
      { error: 'Falha na autenticação com a AVLA.' },
      { status: 500 }
    )
  }
}
