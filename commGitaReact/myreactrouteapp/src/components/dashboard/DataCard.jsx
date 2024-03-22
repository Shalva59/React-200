import React from 'react'


const DummyData =
  [
    {
      label: "Art sales",
      count: "30 000"
    },

    {
      label: "New artists",
      count: "250"
    },

    {
      label: "Revenue generated",
      count: "400 000"
    },



  ];

const DataCard = () => {
  return (
    <div className='flex gap-20'>
      {DummyData.map((data, index) =>
      (
        <div key={index} className='data_card'>
          
          <h1>{data.count}</h1>
          <h4>{data.label}</h4>
        </div>
      ))}
    </div>
  )
}

export default DataCard
