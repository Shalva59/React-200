import React from "react";
import DataCard from "../../components/dashboard/DataCard";
import Table from "../../components/dashboard/Table";
import DataList from "../../components/dashboard/DataList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const artist = [
  {
    name: "Flotsam",
    sales: "40k+ sales",
    revenue: "$1.4m revenue",
  },
  {
    name: "Siuuuuu",
    sales: "40k+ sales",
    revenue: "$1.4m revenue",
  },
  {
    name: "Flotsam",
    sales: "40k+ sales",
    revenue: "$1.4m revenue",
  },
];
const projects = [
  {
    name: "Flotsam",
    sales: "40k+ sales",
    revenue: "$1.4m revenue",
  },
  {
    name: "Astrom",
    sales: "10k+ sales",
    revenue: "$1.4m revenue",
  },
  {
    name: "$Moon",
    sales: "10k+ sales",
    revenue: "$1.4m revenue",
  },
];

const index = () => {
  return (
    <div className="flex">
      <div className="flex-col mb-auto">
        <div >
          <h3 className="ml-21 last30Days">In the last 30 days</h3>
          <DataCard />
        </div>
        <div className="tableContainer">
          
          <div className="all_artists_container flex">

            <div className="all_artist_miniContainer">
              <h4 className="all_artists_color">All Artists</h4>
              <h5>Monitor artist sales, reviews, etc.</h5>
            </div>


            <div className='search searchFilter'>
              <input type="text" className='searchBar miniSearch' placeholder='Search' />
              <Button variant="primary" className="filterBTN">Filter</Button>{' '}
            </div>
          </div>

          <Table />
        </div>
      </div>
      <div className="flex-col">
        <div>
          <DataList title="Best-selling artists" data={artist} />
        </div>
        <div>
          <DataList title="Best-selling projects" data={projects} />
        </div>
      </div>
    </div>
  );
};

export default index;
