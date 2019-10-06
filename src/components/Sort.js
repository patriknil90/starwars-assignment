import React from 'react'
import { SORT_VALUES } from 'utils/constants'

const Sort = () => {
  return (
    <div id="Sort">
      <select>
        <option>Sort by...</option>
        <option value={SORT_VALUES.EPISODE}>Episode</option>
        <option value={SORT_VALUES.YEAR}>Year</option>
      </select>
    </div>
  )
}

export default Sort
