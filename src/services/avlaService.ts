import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_AVLA_API || 'https://pmjh82e4r8.execute-api.us-west-2.amazonaws.com/qa';
const SOURCE_APP = 'AMARUSA1609';

/**
 * Autentica na API da AVLA e retorna o token de acesso.
 */
export async function authenticate(): Promise<string> {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      username: process.env.AVLA_USERNAME,
      password: process.env.AVLA_PASSWORD,
      organizationUnitName: process.env.AVLA_ORG_UNIT,
    });

    console.log('🔍 Credenciais usadas para autenticação:', {
      username: process.env.AVLA_USERNAME,
      password: process.env.AVLA_PASSWORD,
      organizationUnitName: process.env.AVLA_ORG_UNIT,
    });

    const token: string = response.data?.accessToken;
    if (!token) throw new Error('Token de acesso não encontrado na resposta da AVLA.');

    console.log('🟢 RESPOSTA DE LOGIN AVLA:', response.data);
    return token;
  } catch (error: any) {
    console.error('❌ Erro ao autenticar na AVLA:', error.response?.data || error.message);
    throw new Error('Falha na autenticação com a AVLA.');
  }
}

/**
 * Envia os dados para gerar a cotação de seguro.
 */
export async function criarCotacao(token: string, payload: any) {
  try {
    const url = `${BASE_URL}/cotacao/civil?sourceApp=${SOURCE_APP}`;
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    console.log('📤 Enviando cotação com headers:', headers);
    const response = await axios.post(url, payload, { headers });

    return response.data;
  } catch (error: any) {
    console.error('🔴 Erro detalhado na cotação AVLA:', error.response?.data || error.message);
    throw new Error('Falha ao consultar cotação na AVLA.');
  }
}

/**
 * Emite a apólice com base em uma proposta existente.
 */
export async function emitirApolice(token: string, payload: any) {
  try {
    console.log('📦 Payload enviado:', payload)
    console.log('🪪 Authorization Header:', `Bearer ${token}`)

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }

    const response = await axios.post(
      `${BASE_URL}/emitir/civil?sourceApp=${SOURCE_APP}`,
      payload,
      { headers }
    )

    return response.data
  } catch (error: any) {
    console.error('🔴 Erro ao emitir apólice:', error.response?.data || error.message)
    throw new Error('Falha ao emitir apólice.')
  }
}


/**
 * Realiza logout da sessão atual.
 */
export async function logout(token: string): Promise<void> {
  try {
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
