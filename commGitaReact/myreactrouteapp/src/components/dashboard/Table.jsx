import React from "react";
import { artistData } from "../../allArtistData/all_Artist_Data";

const Table = () => {


  return (
    <div className="container">
      <table className="rwd-table">
        <tbody>
          <tr>
            <th>Artist</th>
            <th>Status</th>
            <th>Ratings</th>
            <th>Projects sold</th>
            <th>Highest sale</th>
          </tr>



          {artistData.map((item, index) => (

            <tr className="artistRender" key={index}>
              <td data-th="Supplier Code">{item.artistName}</td>
              <td data-th="Supplier Name"
                style={item.statusVerify === "Verified" ? { backgroundColor: "#DEEDE5" } : item.statusVerify === "Pending" ? { backgroundColor: "lightyellow" } : { backgroundColor: "#999999" }}
              className="statusCon"
              >{item.statusVerify}</td>
              <td data-th="Invoice Number">{item.Ratings}</td>
              <td data-th="Invoice Date">{item.projects_Sold}</td>
              <td data-th="Due Date">{item.highest_Sale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
