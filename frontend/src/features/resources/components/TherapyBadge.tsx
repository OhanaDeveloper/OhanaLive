import type { TherapeuticFramework } from '../data/types'
import { FRAMEWORK_LABELS, FRAMEWORK_COLORS } from '../data/categories'

interface Props {
  framework: TherapeuticFramework
  size?: 'sm' | 'xs'
}

export default function TherapyBadge({ framework, size = 'xs' }: Props) {
  const label = FRAMEWORK_LABELS[framework] ?? framework
  const color = FRAMEWORK_COLORS[framework] ?? 'bg-gray-500/15 text-gray-300 border-gray-500/20'
  const textSize = size === 'xs' ? 'text-[10px]' : 'text-xs'

  return (
    <span
      className={`inline-flex items-center rounded-full border px-1.5 py-0.5 font-mono ${textSize} ${color}`}
      title={label}
    >
      {framework}
    </span>
  )
}
