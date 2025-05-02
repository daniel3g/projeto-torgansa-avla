import 'dotenv/config';
import { authenticate, emitirApolice } from './src/services/avlaService';

async function testarEmissao() {
  try {
    console.log('🔐 Autenticando...');
    const token = await authenticate();
    console.log('🟢 Token recebido:', token);

    const payload = {
      id_proposta: 'P020712025000107750117078',
      documento_emitente: '41182665000140',
    };

    console.log('📦 Enviando emissão...');
    const resposta = await emitirApolice(token, payload);
    console.log('✅ Apólice emitida:', resposta);
  } catch (err) {
    console.error('❌ Erro durante a requisição:', err);
  }
}

testarEmissao();
