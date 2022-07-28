import React, { useState, useCallback } from "react";
import ImageUploading from "react-images-uploading";

import "./Create.css"

export default function Create() {
    const categories = ["Concretes", "Doors", "Furnishing", "Metals", "Windows", "Surface finishing", "Wood and Carpentry", "Electrical Systems and Equipment", "Insulators", "Plumbing", "HVAC", "Moisture protection", "Composites", "Bricks and Stones", "Other"]

    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const [images, setImages] = useState([]);
    const [post, setPost] = useState({ title: "", price: "", category: "", description: "", address: "", postalcode: "", email: "", phone: "", youtubelink: "", scanlink: "", imgs: "" });

    const maxNumber = 6;
    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
        setPost(prevState => { return { ...prevState, imgs: imageList }; });
    };

    function postListing() {
        let postNum = localStorage.length;
        localStorage.setItem(postNum, JSON.stringify(post));
        window.location.href = "/loopico-prototype-website/#/marketplace";
        forceUpdate();
    }

    return (
        <div id="createPost" class="container-fluid">
            <div class="card">
                <div class="row">
                    <div class="col">
                        <div class="card-body">
                            <div class="mb-3">
                                <h5 for="title" class="form-label">Add Title</h5>
                                <input type="text" class="form-control" id="title" value={post.title} onChange={e => { setPost(prevState => { return { ...prevState, title: e.target.value }; }) }} />
                            </div>
                            <div class="mb-3">
                                <h5 for="price" class="form-label">Price</h5>
                                <input type="text" class="form-control" id="price" value={post.price} onChange={e => { setPost(prevState => { return { ...prevState, price: e.target.value }; }); }} />
                            </div>
                            <div class="mb-3">
                                <h5 class="form-label">Choose a Category</h5>
                                <div class="row row-cols-3 ms-4">
                                    {categories.map((val, index) => {
                                        return (
                                        <div key={index} class="form-check">
                                            <input type="radio" class="form-check-input" name="categories" id={val} value={val} onChange={e => { setPost(prevState => { return { ...prevState, category: e.target.value }; }); }} />
                                            <h6 for={val} class="form-check-label">{val}</h6>
                                        </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div class="mb-3">
                                <h5 for="description" class="form-label">Add Description</h5>
                                <input type="text" class="form-control" id="description" value={post.description} onChange={e => { setPost(prevState => { return { ...prevState, description: e.target.value }; }); }} />
                            </div>
                            <div class="mb-3">
                                <h5 for="address" class="form-label">Address</h5>
                                <input type="text" class="form-control" id="address" value={post.address} onChange={e => { setPost(prevState => { return { ...prevState, address: e.target.value }; }); }} />
                            </div>
                            <div class="mb-3">
                                <h5 for="postalCode" class="form-label">Postal Code</h5>
                                <input type="text" class="form-control" id="postalCode" value={post.postalcode} onChange={e => { setPost(prevState => { return { ...prevState, postalcode: e.target.value }; }); }} />
                            </div>
                            <div class="mb-3">
                                <h5 class="form-label">Contact Information</h5>
                                <h6 for="email" class="form-label">Email</h6>
                                <input type="email" class="form-control" id="email" value={post.email} onChange={e => { setPost(prevState => { return { ...prevState, email: e.target.value }; }); }} />
                                <h6 for="phone" class="form-label pt-2"><strong>Phone</strong></h6>
                                <input type="number" class="form-control" id="phone" value={post.phone} onChange={e => { setPost(prevState => { return { ...prevState, phone: e.target.value }; }); }} />
                            </div>
                            <div class="mb-3">
                                <h5 class="form-label">Add Photos <small>(Upload up to 6 photos)</small></h5>
                                <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
                                    {({
                                        imageList,
                                        onImageUpload,
                                        onImageRemoveAll,
                                        onImageUpdate,
                                        onImageRemove,
                                        }) => (
                                        
                                        <div>
                                            <button type="button" class="btn me-4" onClick={onImageUpload}>Upload Image</button>
                                            <button type="button" class="btn" onClick={onImageRemoveAll}>Remove all images</button>
                                            <div class="images-wrapper mt-4">
                                                {imageList.map((image, index) => (
                                                    <div key={index} class="image-item mx-2">
                                                        <img src={image["data_url"]} class="img-fluid"/>
                                                        <div class="btn-wrapper mt-2">
                                                            <button type="button" class="btn me-4" onClick={() => onImageUpdate(index)}>Update</button>
                                                            <button type="button" class="btn" onClick={() => onImageRemove(index)}>Remove</button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}  
                                </ImageUploading>
                            </div>
                            <div class="mb-3">
                                <h6 for="youtubeLink" class="form-label">YouTube Video Link</h6>
                                <input type="text" class="form-control" id="youtubeLink" value={post.youtubelink} onChange={e => { setPost(prevState => { return { ...prevState, youtubelink: e.target.value }; }); }} />
                                <h6 for="scanLink" class="form-label pt-2">3D Scanned Link</h6>
                                <input type="text" class="form-control" id="scanLink" value={post.scanlink} onChange={e => { setPost(prevState => { return { ...prevState, scanlink: e.target.value }; }); }} />
                            </div>
                            <button type="button" class="btn" onClick={() => postListing()}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
