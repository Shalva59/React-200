import React from "react";
import { Button } from 'react-bootstrap';

const DataList = ({ data, title }) => {
  return (
    <div className="dataList">
      <h4>{title}</h4>
      <div className="miniCont">
        {data.map((data, index) => (
          <div key={index} className="flex personInfo">
            <h5>{data.name}</h5>
            <h5>{data.sales}</h5>
            <h5>{data.revenue}</h5>
          
          </div>
        ))}
          <Button variant="success" className="view_all_artistBTN">View all artists</Button>{' '}
      </div>
    </div>
  );
};

export default DataList;
