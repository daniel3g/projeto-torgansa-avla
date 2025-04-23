import { NextResponse } from 'next/server'
import axios from 'axios'

const LOGOUT_URL = 'https://pmjh82e4r8.execute-api.us-west-2.amazonaws.com/qa/logout'

export async function POST() {
  try {
    const token = process.env.AVLA_ACCESS_TOKEN
    if (!token) throw new Error('Token não encontrado no ambiente.')

    const response = await axios.post(LOGOUT_URL, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    return NextResponse.json({ status: 'Logout realizado com sucesso', data: response.data })
  } catch (error: any) {
    console.error('🔴 Erro ao fazer logout da AVLA:', error.response?.data || error.message)
    return NextResponse.json({ error: 'Falha ao realizar logout da AVLA' }, { status: 500 })
  }
}
