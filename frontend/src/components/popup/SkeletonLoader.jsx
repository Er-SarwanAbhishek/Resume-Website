import React from "react";
import "./SkeletonLoader.css";

export const SkeletonLoader = () => {
  return (
    <>
       <div className="skeleton">
        <div className="sks-list">
      <div class="sk-p skeleton-content-a"></div>
       <div class="sk-p skp-2 skeleton-content-b"></div> 
       <div class="sk-p skeleton-content-c"></div>
       </div>
       <div className="separator"></div>
       <div className="sks-list">
      <div class="sk-p skeleton-content-a"></div>
       <div class="sk-p skp-2 skeleton-content-b"></div> 
       <div class="sk-p skeleton-content-c"></div>
       </div>
       <div className="separator"></div>
       <div className="sks-list">
      <div class="sk-p skeleton-content-a"></div>
       <div class="sk-p skp-2 skeleton-content-b"></div> 
       <div class="sk-p skeleton-content-c"></div>
       </div>
       </div>
    </>
  );
};
