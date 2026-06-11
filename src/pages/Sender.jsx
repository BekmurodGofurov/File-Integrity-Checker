import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import Topbar from '../components/Topbar'
import {
  UploadCloudIcon,
  FileTextIcon,
  CopyIcon,
  CheckIcon,
  ArrowLeftIcon,
  HashIcon,
} from '../components/Icons'

async function sha256(file) {
  const buf = await file.arrayBuffer()
  const hashBuf = await crypto.subtle.digest('SHA-256', buf)
  return Array.from(new Uint8Array(hashBuf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / 1048576).toFixed(2) + ' MB'
}

export default function Sender() {
  const { t } = useLang()
  const s = t.sender

  const [file, setFile]       = useState(null)
  const [hash, setHash]       = useState(null)
  const [hashKey, setHashKey] = useState(0)
  const [loading, setLoading] = useState(false)
  const [glow, setGlow]       = useState(false)
  const [copied, setCopied]   = useState(false)
  const [over, setOver]       = useState(false)
  const inputRef = useRef()

  async function handleFile(f) {
    if (!f) return
    setFile(f)
    setHash(null)
    setLoading(true)
    setGlow(false)

    const h = await sha256(f)
    setHash(h)
    setHashKey(k => k + 1)
    setLoading(false)

    setTimeout(() => {
      setGlow(true)
      setTimeout(() => setGlow(false), 1100)
    }, h.length * 14 + 80)
  }

  async function copyHash() {
    if (!hash) return
    await navigator.clipboard.writeText(hash)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <>
      <Topbar />
      <div className="page">
        <div className="page-inner">
          {/* Back */}
          <Link to="/" className="back-btn">
            <ArrowLeftIcon size={15} /> {s.back}
          </Link>

          {/* Header */}
          <div className="section-header">
            <div className="section-badge tx">{s.badge}</div>
            <div>
              <div className="section-title">{s.pageTitle}</div>
              <div className="section-sub">{s.pageSub}</div>
            </div>
          </div>

          <div className="card">
            {/* Steps */}
            <div className="steps">
              {s.steps.map((step, i) => (
                <div className="step" key={i}>
                  <div className="step-num">{i + 1}</div>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            {/* Drop zone */}
            <div
              className={`drop-zone ${over ? 'over' : ''}`}
              onDragOver={e => { e.preventDefault(); setOver(true) }}
              onDragLeave={() => setOver(false)}
              onDrop={e => { e.preventDefault(); setOver(false); handleFile(e.dataTransfer.files[0]) }}
              onClick={() => inputRef.current.click()}
            >
              <input
                ref={inputRef}
                type="file"
                style={{ display: 'none' }}
                onChange={e => handleFile(e.target.files[0])}
              />
              <div className="drop-zone-icon">
                <UploadCloudIcon size={22} />
              </div>
              <div className="drop-text">
                {file ? file.name : <>{s.dropText} <span>{s.dropSpan}</span></>}
              </div>
            </div>

            {/* File chip */}
            {file && (
              <div className="file-chip">
                <div className="file-chip-icon"><FileTextIcon size={17} /></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="file-chip-name">{file.name}</div>
                  <div className="file-chip-meta">
                    {formatSize(file.size)}
                    {loading && <span className="spinner" style={{ width: 12, height: 12 }} />}
                    {hash && !loading && <span className="meta-ready">✓ {s.hashReady}</span>}
                  </div>
                </div>
              </div>
            )}

            {/* Hash output */}
            <div className={`hash-box ${glow ? 'glow pulse' : ''}`}>
              <div className="hash-label">
                <HashIcon size={13} />
                {s.hashLabel}
              </div>
              <div className="hash-value">
                {loading ? (
                  <><span className="spinner" /><span style={{ color: 'var(--muted)', fontStyle: 'italic' }}>{s.computing}</span></>
                ) : hash ? (
                  <span key={hashKey}>
                    {hash.split('').map((c, i) => (
                      <span key={i} className="hc" style={{ animationDelay: `${i * 14}ms` }}>{c}</span>
                    ))}
                  </span>
                ) : (
                  <span className="hash-placeholder">{s.hashPlaceholder}</span>
                )}
              </div>
            </div>

            {/* Copy button */}
            <button
              className={`btn btn-copy ${copied ? 'copied' : ''}`}
              onClick={copyHash}
              disabled={!hash || loading}
            >
              {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
              {copied ? s.copied : s.copyBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
