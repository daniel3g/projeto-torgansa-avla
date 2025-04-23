import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_AVLA_API || 'https://pmjh82e4r8.execute-api.us-west-2.amazonaws.com/qa'
const SOURCE_APP = 'AMARUSA1609'


export async function authenticate(): Promise<string> {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      username: process.env.AVLA_USERNAME,
      password: process.env.AVLA_PASSWORD,
      organizationUnitName: process.env.AVLA_ORG_UNIT,
    })

    console.log('🔍 Credenciais usadas para autenticação:', {
      username: process.env.AVLA_USERNAME,
      password: process.env.AVLA_PASSWORD,
      organizationUnitName: process.env.AVLA_ORG_UNIT,
    });
    

    const token: string = response.data?.accessToken
    if (!token) throw new Error('Token de acesso não encontrado na resposta da AVLA.')
    console.log('🟢 RESPOSTA DE LOGIN AVLA:', response.data)
    return token
  } catch (error: any) {
    console.error('❌ Erro ao autenticar na AVLA:', error.response?.data || error.message)
    throw new Error('Falha na autenticação com a AVLA.')
  }
}

export async function criarCotacao(token: string, payload: any) {
  try {
    const url = `${BASE_URL}/cotacao/civil?sourceApp=${SOURCE_APP}`
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }

    console.log('📤 Enviando requisição com headers:', headers)
    const response = await axios.post(url, payload, { headers })
    return response.data
  } catch (error: any) {
    console.error('🔴 Erro detalhado na cotação AVLA:', error.response?.data || error.message)
    throw new Error('Falha ao consultar cotação na AVLA.')
  }
}

export async function logout(token: string): Promise<void> {
  try {
    const BASE_URL = process.env.NEXT_PUBLIC_AVLA_API || 'https://pmjh82e4r8.execute-api.us-west-2.amazonaws.com/qa';
    await axios.post(`${BASE_URL}/logout`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('✅ Logout realizado com sucesso');
  } catch (error: any) {
    console.error('❌ Erro ao realizar logout:', error.response?.data || error.message);
    throw new Error('Falha ao realizar logout na AVLA.');
  }
}

