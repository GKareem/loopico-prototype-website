import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import "./Marketplace.css";

import { PostData } from "./PostInfo";

const mapContainerStyle = {
    width: "50vw",
    height: "60vh",
}

export default function Marketplace() {
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetchPostData();
    }, [],)

    const [location, setLocation] = useState({
        lat: null,
        lng: null,
    });
    const [markers, setMarkers] = useState([]);

    const { isLoaded, loadError } = useLoadScript({
        // googleMapsApiKey: ,
    });

    if (loadError) return "Errors Loading Maps";
    if (!isLoaded) return "Loading Maps";

    navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        });
    });

    function fetchPostData() {
        if (localStorage.length <= 0) {
            for (let i = 0; i < 3; ++i) {
                localStorage.setItem(i, JSON.stringify(PostData[i]));
                forceUpdate();
            }
        } else {
            for (let j = 0; j <= localStorage.length; ++j) {
                const postInfo = localStorage.getItem(j);
                if (postInfo) {
                    posts.push(JSON.parse(postInfo));
                    forceUpdate();
                }
            }
        }
    }

    function gotoCurrentPost(index) {
        sessionStorage.setItem("currentPost", index);
        window.location.href = "/#/marketplace/post";
        forceUpdate();
    }

    return (
        <div id="marketplace" class="container-fluid">
            <div class="row d-block">
                <div class="searchBarWapper">
                    <i class="bi bi-search fs-4"></i>
                    <input class="form-control ps-5" type="search" placeholder="" onChange={event => setQuery(event.target.value)} />
                </div>
                <div id="posts" class="col">
                    {posts.filter(val => {
                        if (query === "") {
                            return val;
                        }
                        else if (val.title.toLowerCase().includes(query.toLowerCase())) {
                            return val;
                        }
                    }).map((val, index) => {
                        return (
                        <div key={index} class="card my-3" onClick={() => gotoCurrentPost(index)}>
                            <div class="row">
                                <div class="col-md-4 mx-3 my-4">
                                    {val.imgs[0] !== undefined && 
                                        <img src={val.imgs[0].data_url} class="img-fluid" width="175" height="175" />
                                    }
                                </div>
                                <div class="col">
                                    <div class="card-body">
                                        <h5 class="card-title">{val.title}</h5>
                                        <br/>
                                        <h6 class="card-text">{val.address}</h6>
                                        <h6 class="card-text">{val.postalcode}</h6>
                                        <br/>
                                        <h6 class="card-text text-center" id="postPrice">{val.price}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div class="row">
                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={18} center={location}>
                </GoogleMap>    
            </div>
        </div>
    )
}
