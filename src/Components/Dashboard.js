import React from "react";

import "./Dashboard.css";

import mat_market_img from "../Images/Dashboard/material_marketplace.png";
import inv_analysis_img from "../Images/Dashboard/inventory_analysis.png";
import build_evaluation_img from "../Images/Dashboard/building_evaluation.png";
import demo_planning_img from "../Images/Dashboard/demolition_planning.png";

export default function Dashboard() {
    return (
        <div id="dashboard" class="container-fluid justify-content-center">
            <div class="row row-cols-2 gy-5">
                <div class="col text-center">
                    <img class="img-fluid" src={mat_market_img} width="100" height="100" /> 
                    <br />
                    <button type="button" class="btn btn-lg my-3" onClick={() => { window.location.href = "/loopico-prototype-website/#/marketplace" }}>Material Marketplace</button>
                </div>
                <div class="col text-center">
                    <img class="img-fluid" src={inv_analysis_img} width="100" height="100" /> 
                    <br />
                    <button disabled type="button" class="btn btn-lg my-3" onClick={() => { window.location.href = "/loopico-prototype-website/#/inventory" }}>Inventory Analysis</button>
                </div>
                <div class="col text-center">
                    <img class="img-fluid" src={build_evaluation_img} width="100" height="100" /> 
                    <br />
                    <button disabled type="button" class="btn btn-lg my-3" onClick={() => { window.location.href = "/loopico-prototype-website/#/building" }}>Building Evaluation</button>
                </div>
                <div class="col text-center">
                    <img class="img-fluid" src={demo_planning_img} width="100" height="100" /> 
                    <br />
                    <button disabled type="button" class="btn btn-lg my-3" onClick={() => { window.location.href = "/loopico-prototype-website/#/demolition" }}>Demolition Planning</button>
                </div>
            </div>
        </div>
    )
}
