'use client'

import dynamic from 'next/dynamic'

const WorksheetExplorer = dynamic(
  () => import('./WorksheetExplorer'),
  { ssr: false }
)

export default function WorksheetExplorerClient() {
  return <WorksheetExplorer />
}
