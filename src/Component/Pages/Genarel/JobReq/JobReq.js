import React from 'react';
import './JobReq.css'

const JobReq = () => {
    return (
        <div className='container my-4 d-flex flex-column align-items-center'>
            <h1 className='header1 my-4'>Available Jobs</h1>
            <div className='job-container'>
                <h3 className='sub-header'>Job Title: Warehouse worker</h3>
                <p>
                We are looking for an energetic warehouse worker to receive and dispatch merchandise to and from our warehouse. The warehouse worker will load and unload outgoing and incoming delivery vehicles. You will select products from the warehouse, load and secure goods to pallets, move inventory to delivery area, and load merchandise. You will unload stock from delivery vehicles, and transport to and store in designated warehouse positions. You will keep your work environment clean and tidy at all times, and comply with all relevant safety rules, regulations, policies and procedures.
                </p>
                <h3>Warehouse Worker Responsibilities:</h3>
                <ul>
                    <li>Ensuring cleanliness, tidiness and safety of work environment.</li>
                    <li>Loading and unloading delivery vehicles.</li>
                    <li>Accepting delivery of inventory.</li>
                    <li>Counting and confirming inventory.</li>
                    <li>Inspecting inventory for damage and faults.</li>
                    <li>Communicating errors to relevant parties.</li>
                    <li>Marking and labeling stock.</li>
                    <li>Storing inventory in accessible manner.</li>
                    <li>Loading and wrapping stock on pallets.</li>
                    <li>Building loads with forklift and electronic pallet jack.</li>
                </ul>
                <h3>Warehouse Worker Requirements:</h3>
                <ul>
                    <li>18 years of age or older.</li>
                    <li>Work experience as general laborer, preferably in warehouse.</li>
                    <li>Ability to operate forklift proficiently.</li>
                    <li>Completion of background investigation and drug screening.</li>
                    <li>Strong people skills.</li>
                    <li>Good moral character.</li>
                    <li>Physically strong, agile and dexterous, and undeterred by heights and adverse climatic conditions.</li>
                    <li>Positive work history and ability to maintain solid attendance.</li>
                    <li>Available to work extended hours.</li>
                </ul>
            </div>
        </div>
    );
};

export default JobReq;