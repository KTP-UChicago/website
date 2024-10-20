
import { FilterList } from '@mui/icons-material'
import React from 'react'
import YearButton from './YearButton'
import ClassButton from './ClassButton'
import IsPickingUpButton from './IsPickingUpButton'
import './FilterOptions.css'

function MemberFilter(
  {
    onYearSelect,
    onIsPickingUpSelect,
    onClassSelect
  }: {
    onYearSelect: (year: string) => void,
    onIsPickingUpSelect: (option: string) => void,
    onClassSelect: (year: string) => void
  }
) {
  return (
    <div className="filter-bar">
        <FilterList />
        <YearButton onYearSelect={onYearSelect} />
        <IsPickingUpButton onIsPickingUpSelect={onIsPickingUpSelect}/>
        <ClassButton onClassSelect={onClassSelect}/>
      </div>
  )
}

export default MemberFilter