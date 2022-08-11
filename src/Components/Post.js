import React, { useState, useEffect, useCallback } from "react";

import "./Post.css";

export default function Post() {
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    
    const [post, setPost] = useState(() => {
        return fetchCurrentPost;
    });

    useEffect(() => {
        fetchCurrentPost();
    }, [])

    function fetchCurrentPost() {
        let index = sessionStorage.getItem("currentPost");
        
        if (index) {
            let info = localStorage.getItem(index);

            if (info) {
                setPost(JSON.parse(info));
                forceUpdate();
            }
        }
    }

    function deletePost() {
        let index = sessionStorage.getItem("currentPost");
        
        if (index) {
            localStorage.removeItem(index);

            window.location.href = "/loopico-prototype-website/#/marketplace"
        }
    }

    return (
        <div id="post" class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="row">
                            <div class="col">
                                <div class="card-body">
                                    <h4 class="card-title">{post.title}</h4>
                                    <h5 class="card-text" id="postPrice">{post.price}</h5>
                                    <div class="card" id="imgSlide">
                                        <div class="row">
                                            <div class="col">
                                                <div id="carouselIndicators" class="carousel carousel-dark" data-bs-ride="carousel" data-bs-interval="false">
                                                    <div class="carousel-indicators">
                                                        {post.imgs !== undefined && post.imgs.map((val, index) => {
                                                            return (
                                                                <div>
                                                                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to={index} class={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : "false"} aria-label={`Slide ${index}`} />
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                    <div class="carousel-inner">
                                                        {post.imgs !== undefined && post.imgs.map((val, index) => {
                                                            return (
                                                                <div class={index === 0 ? "carousel-item active" : "carousel-item"}>
                                                                    <img src={val.data_url} class="d-block" />
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    </button>
                                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <h6 class="card-text"><strong>YouTube Video Link: </strong><a href={post.youtubelink} target="_blank">Link</a></h6>
                                    <h6 class="card-text"><strong>3D Scanned Link: </strong><a href={post.scanlink} target="_blank">Link</a></h6>
                                    <br />
                                    <h5 class="card-text"><strong>Description:</strong></h5>
                                    <h6 class="card-text">{post.description}</h6>
                                    <button type="button" class="mt-5 btn" onClick={() => deletePost()}>Delete Post</button>
                                </div>
                            </div>
                        </div>
                        <div class="row" id="rightSide">
                            <div class="col">
                                <div class="box">
                                    <h4 class="bi bi-geo-alt" />
                                    <h6 class="card-text">{post.address} {post.postalcode}</h6>
                                </div>
                                <textarea class="form-control" rows="6" />
                                <button type="button" class="btn btn-lg" data-bs-toggle="modal" data-bs-target="#popupModal">Contact Seller</button>
                            </div>
                        </div>
                        <div class="modal fade" id="popupModal">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Sellers Information</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h6 class="modal-text"><strong>Email Address:</strong> {post.email}</h6>
                                        <h6 class="modal-text"><strong>Phone Number:</strong> {post.phone}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
