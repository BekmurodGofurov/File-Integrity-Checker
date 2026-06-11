import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import Topbar from '../components/Topbar'
import {
  DownloadCloudIcon,
  FileTextIcon,
  ArrowLeftIcon,
  HashIcon,
  BigCheckIcon,
  BigXIcon,
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

function SafeResult({ title, desc }) {
  return (
    <div className="result-wrap safe">
      <div className="result-icon-circle">
        <span className="ripple-ring" />
        <BigCheckIcon />
      </div>
      <div className="result-title">{title}</div>
      <div className="result-desc">{desc}</div>
    </div>
  )
}

function DangerResult({ title, desc }) {
  return (
    <div className="result-wrap danger">
      <div className="result-icon-circle">
        <BigXIcon />
      </div>
      <div className="result-title">{title}</div>
      <div className="result-desc">{desc}</div>
    </div>
  )
}

export default function Receiver() {
  const { t } = useLang()
  const s = t.receiver

  const [file, setFile]         = useState(null)
  const [fileHash, setFileHash] = useState(null)
  const [loading, setLoading]   = useState(false)
  const [inputHash, setInputHash] = useState('')
  const [result, setResult]     = useState(null)
  const [resultKey, setResultKey] = useState(0)
  const [over, setOver]         = useState(false)
  const inputRef = useRef()

  async function handleFile(f) {
    if (!f) return
    setFile(f)
    setFileHash(null)
    setResult(null)
    setLoading(true)
    const h = await sha256(f)
    setFileHash(h)
    setLoading(false)
  }

  function verify() {
    const orig = inputHash.trim().toLowerCase()
    const recv = (fileHash || '').toLowerCase()
    setResult(orig === recv ? 'safe' : 'danger')
    setResultKey(k => k + 1)
  }

  const canVerify = fileHash && inputHash.trim().length > 0 && !loading

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
            <div className="section-badge rx">{s.badge}</div>
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
                <DownloadCloudIcon size={22} />
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
                    {fileHash && !loading && <span className="meta-ready">✓ {s.hashReady}</span>}
                  </div>
                </div>
              </div>
            )}

            {/* Hash input */}
            <div>
              <label className="input-label">
                <HashIcon size={12} style={{ marginRight: 5, verticalAlign: 'middle', color: 'var(--purple)' }} />
                {s.inputLabel}
              </label>
              <textarea
                className="hash-input"
                rows={3}
                placeholder={s.inputPlaceholder}
                value={inputHash}
                onChange={e => { setInputHash(e.target.value); setResult(null) }}
              />
            </div>

            {/* Verify button */}
            <button
              className="btn btn-verify"
              onClick={verify}
              disabled={!canVerify}
            >
              {s.verifyBtn}
            </button>

            {/* Result */}
            {result && (
              <div key={resultKey}>
                {result === 'safe'
                  ? <SafeResult title={s.safeTitle} desc={s.safeDesc} />
                  : <DangerResult title={s.dangerTitle} desc={s.dangerDesc} />
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
