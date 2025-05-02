'use client'

import { useState } from 'react'
import axios from 'axios'

export default function CotacaoAvla() {
  const [form, setForm] = useState({
    nomeTomador: 'AVLA SEGUROS BRASIL S.A.',
    cnpjTomador: '41182665000140',
    nomeReclamante: 'Alexandre Jesus Neves',
    cnpjReclamante: '27326594000181',
    cep: '65631-060',
    logradouro: 'Rua João Lula',
    numero: '1125',
    uf: 'MA',
    cidade: 'Timon',
    bairro: 'Parque Piauí I',
    complemento: 'Of. 2',
    valorPrincipal: '41234.15',
    prazoAnos: '3',
    numeroProcesso: 'J600',
    tribunal: 'Supremo Tribunal Federal (STF)',
    identificador: '1000',
  })

  const [resultado, setResultado] = useState<any | null>(null)
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setLoading(true)
    setErro('')
    setResultado(null)

    try {
      const loginRes = await axios.post('/api/login')
      const token = loginRes.data.accessToken

      const payload = {
        tipo: {
          id_modalidade: 1,
          forma_pagamento: 1,
          identificador_controle_interno: form.identificador,
        },
        informacoes: {
          numero_processo: form.numeroProcesso,
          tribunal: form.tribunal,
        },
        tomador: {
          nome: form.nomeTomador,
          documento: form.cnpjTomador,
          tipo_documento: 'CNPJ',
        },
        reclamante: {
          nome: form.nomeReclamante,
          documento: form.cnpjReclamante,
          tipo_documento: 'CNPJ',
          endereco: {
            cep: form.cep,
            logradouro: form.logradouro,
            numero: form.numero,
            uf: form.uf,
            cidade: form.cidade,
            bairro: form.bairro,
            complemento: form.complemento,
          },
        },
        valores: {
          valor_principal: parseFloat(form.valorPrincipal),
        },
        prazos: {
          prazo_em_anos: parseInt(form.prazoAnos),
        },
      }

      const cotacaoRes = await axios.post('/api/cotacao', payload, {
        headers: { Authorization: `Bearer ${token}` },
      })

      setResultado(cotacaoRes.data)
    } catch (error: any) {
      setErro(
        error.response?.data?.errorMessageTranslated ||
        error.response?.data?.error ||
        error.message
      )
    } finally {
      setLoading(false)
    }
  }

  const renderInput = (label: string, name: string) => (
    <div style={{ marginBottom: 10 }}>
      <label style={{ fontWeight: 600 }}>{label}</label>
      <input
        name={name}
        value={(form as any)[name]}
        onChange={handleChange}
        style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
      />
    </div>
  )

  return (
    <div style={{ padding: 30, maxWidth: 900, margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 30 }}>Simulador de Cotação AVLA</h1>

      <section style={{ marginBottom: 30 }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: 5 }}>Tomador</h2>
        {renderInput('Nome do Tomador', 'nomeTomador')}
        {renderInput('CNPJ do Tomador', 'cnpjTomador')}
        {renderInput('Identificador Interno', 'identificador')}
      </section>

      <section style={{ marginBottom: 30 }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: 5 }}>Reclamante</h2>
        {renderInput('Nome do Reclamante', 'nomeReclamante')}
        {renderInput('CNPJ do Reclamante', 'cnpjReclamante')}
        {renderInput('CEP', 'cep')}
        {renderInput('Logradouro', 'logradouro')}
        {renderInput('Número', 'numero')}
        {renderInput('Complemento', 'complemento')}
        {renderInput('Bairro', 'bairro')}
        {renderInput('Cidade', 'cidade')}
        {renderInput('UF', 'uf')}
      </section>

      <section style={{ marginBottom: 30 }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: 5 }}>Informações do Processo</h2>
        {renderInput('Número do Processo', 'numeroProcesso')}
        {renderInput('Tribunal', 'tribunal')}
      </section>

      <section style={{ marginBottom: 30 }}>
        <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: 5 }}>Valores e Prazos</h2>
        {renderInput('Valor Principal', 'valorPrincipal')}
        {renderInput('Prazo em Anos', 'prazoAnos')}
      </section>

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          padding: '12px 25px',
          background: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          fontSize: 16,
        }}
      >
        {loading ? 'Consultando...' : 'Enviar Cotação'}
      </button>

      {resultado?.id_proposal && (
  <button
    onClick={async () => {
      try {
        const emitirRes = await axios.post('/api/emitir', {
          id_proposta: resultado.id_proposal,
          documento_emitente: form.cnpjTomador, // ou um valor fixo, como "41182665000140"
        })

        alert('✅ Apólice emitida com sucesso!\nID Apólice: ' + emitirRes.data.id_apolice)
      } catch (err: any) {
        alert(
          '❌ Erro ao emitir apólice:\n' +
            (err.response?.data?.error || err.message)
        )
      }
    }}
    style={{
      marginTop: 10,
      padding: '10px 20px',
      background: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: 4,
      cursor: 'pointer',
    }}
  >
    Emitir Apólice
  </button>
)}


      {erro && (
        <div style={{ color: 'red', marginTop: 30 }}>
          <strong>❌ Erro:</strong> {erro}
        </div>
      )}

      {resultado && (
        <div
          style={{
            marginTop: 40,
            padding: 25,
            background: '#f0f4f8',
            border: '1px solid #ccc',
            borderRadius: 8,
          }}
        >
          <h2 style={{ marginBottom: 20 }}>Resultado da Cotação</h2>
          <p><strong>ID Cotação:</strong> {resultado.id_cotacao}</p>
          <p><strong>Valor do Prêmio:</strong> R$ {resultado.valor_premio?.toFixed(2)}</p>
          <p><strong>Taxa ao Ano:</strong> {resultado.taxa_ao_ano} %</p>
          <p><strong>Data de Validade:</strong> {resultado.data_validade_cotacao}</p>
          <p><strong>Existe Minuta:</strong> {resultado.existe_minuta ? 'Sim' : 'Não'}</p>
          <p><strong>Comissão:</strong> R$ {resultado.valor_com?.toFixed(2)} ({resultado.perc_com}%)</p>
          <p><strong>ID Proposta:</strong> {resultado.id_proposal}</p>
        </div>
      )}
    </div>
  )
}
