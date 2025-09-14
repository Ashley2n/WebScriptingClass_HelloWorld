import React from 'react'

export default function Box({index, color}:{index: number, color:string}) {
  return (
    <div
    style={{backgroundColor: color}}
    className={`border-1 border-b-neutral-600  px-24 py-20 text-center rounded-lg`}>
        Box {index}
    </div>
  )
}
