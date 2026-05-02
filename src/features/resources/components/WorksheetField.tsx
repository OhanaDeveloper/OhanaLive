'use client'

import type { WorksheetField as FieldType } from '../data/types'

const MOOD_OPTIONS = [
  { value: '1', emoji: '😔', label: 'Really struggling' },
  { value: '2', emoji: '😞', label: 'Down' },
  { value: '3', emoji: '😐', label: 'Okay' },
  { value: '4', emoji: '🙂', label: 'Pretty good' },
  { value: '5', emoji: '😊', label: 'Good' },
  { value: '6', emoji: '😄', label: 'Great' },
  { value: '7', emoji: '🌟', label: 'Amazing' },
]

interface Props {
  field: FieldType
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

export default function WorksheetFieldInput({ field, value, onChange, disabled }: Props) {
  const base = 'w-full rounded-xl bg-dark-800 border border-dark-700 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-teal/50 transition-colors disabled:opacity-50'

  if (field.type === 'textarea') {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-gray-300">{field.label}</label>
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={field.placeholder}
          disabled={disabled}
          rows={4}
          className={`${base} px-3 py-2.5 resize-none leading-relaxed`}
        />
      </div>
    )
  }

  if (field.type === 'text') {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-gray-300">{field.label}</label>
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={field.placeholder}
          disabled={disabled}
          className={`${base} px-3 py-2 h-10`}
        />
      </div>
    )
  }

  if (field.type === 'slider') {
    const min = field.min ?? 1
    const max = field.max ?? 10
    const num = value ? parseInt(value) : Math.floor((min + max) / 2)
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-300">{field.label}</label>
          <span className="text-lg font-bold text-teal">{value || '—'}</span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={value || String(Math.floor((min + max) / 2))}
          onChange={e => onChange(e.target.value)}
          disabled={disabled}
          className="w-full h-2 rounded-full accent-teal cursor-pointer disabled:opacity-50"
        />
        <div className="flex justify-between text-xs text-gray-600">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    )
  }

  if (field.type === 'mood-picker') {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">{field.label}</label>
        <div className="flex gap-2 flex-wrap">
          {MOOD_OPTIONS.map(opt => (
            <button
              key={opt.value}
              type="button"
              disabled={disabled}
              onClick={() => onChange(opt.value)}
              title={opt.label}
              className={`flex flex-col items-center gap-0.5 rounded-xl border p-2 transition-all
                          ${value === opt.value
                            ? 'border-teal/50 bg-teal/10'
                            : 'border-dark-700 bg-dark-800 hover:border-dark-600'}`}
            >
              <span className="text-2xl">{opt.emoji}</span>
              <span className="text-[9px] text-gray-500">{opt.value}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (field.type === 'select') {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-gray-300">{field.label}</label>
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          disabled={disabled}
          className={`${base} px-3 py-2 h-10 cursor-pointer`}
        >
          <option value="">Choose one…</option>
          {field.options?.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    )
  }

  if (field.type === 'multi-select') {
    const selected = value ? value.split('|||') : []
    const toggle = (opt: string) => {
      const next = selected.includes(opt)
        ? selected.filter(s => s !== opt)
        : [...selected, opt]
      onChange(next.join('|||'))
    }
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">{field.label}</label>
        <div className="flex flex-wrap gap-2">
          {field.options?.map(opt => (
            <button
              key={opt}
              type="button"
              disabled={disabled}
              onClick={() => toggle(opt)}
              className={`rounded-full border px-3 py-1 text-xs transition-all
                          ${selected.includes(opt)
                            ? 'border-teal/50 bg-teal/15 text-teal'
                            : 'border-dark-700 bg-dark-800 text-gray-400 hover:border-dark-600 hover:text-gray-200'}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (field.type === 'checkbox') {
    const checked = value === 'true'
    return (
      <label className="flex items-start gap-3 cursor-pointer group">
        <div
          className={`mt-0.5 h-5 w-5 flex-shrink-0 rounded-md border transition-all
                      ${checked ? 'bg-teal border-teal' : 'border-dark-600 group-hover:border-teal/50'}`}
          onClick={() => !disabled && onChange(checked ? '' : 'true')}
        >
          {checked && (
            <svg className="w-full h-full p-0.5 text-dark-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <span className="text-sm text-gray-300 leading-snug">{field.label}</span>
      </label>
    )
  }

  if (field.type === 'date') {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-gray-300">{field.label}</label>
        <input
          type="date"
          value={value}
          onChange={e => onChange(e.target.value)}
          disabled={disabled}
          className={`${base} px-3 py-2 h-10`}
        />
      </div>
    )
  }

  if (field.type === 'number') {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-gray-300">{field.label}</label>
        <input
          type="number"
          value={value}
          min={field.min}
          max={field.max}
          onChange={e => onChange(e.target.value)}
          placeholder={field.placeholder}
          disabled={disabled}
          className={`${base} px-3 py-2 h-10`}
        />
      </div>
    )
  }

  return null
}
