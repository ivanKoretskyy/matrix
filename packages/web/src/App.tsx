import React from 'react';
import { multiply } from '@ivankoretskyy/matrix-utils'


export const App: React.FC = () => {

  const result = multiply(8)
  return (
    <div>
      result of multiply 8 is {result}
    </div>
  )
}