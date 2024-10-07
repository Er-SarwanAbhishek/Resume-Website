import React from "react";
import "./AtsSkeletonLoader.css";

export const AtsSkeletonLoader = () => {
  return (
    <>
      <div className="atsskeleton-circular">
        <div className="ats-list">
          <div className="ATS-sec">
            <div class="sks-circular"></div>
            <div className="ATS-sec-list">
              <div class="sk-p skeleton-content-a"></div>
              <div class="sk-p skp-2 skeleton-content-b"></div>
              <div class="sk-p skeleton-content-c"></div>
            </div>
          </div>
          <div class="sk-p skeleton-content-a"></div>
          <div class="sk-p skp-2 skeleton-content-b"></div>
          <div class="sk-p skeleton-content-c"></div>
        </div>
        <div className="separator"></div>
        <div className="ats-list">
          <div class="sk-p skeleton-content-a"></div>
          <div class="sk-p skp-2 skeleton-content-b"></div>
          <div class="sk-p skeleton-content-c"></div>
        </div>
        <div className="separator"></div>
        <div className="ats-list">
          <div class="sk-p skeleton-content-a"></div>
          <div class="sk-p skp-2 skeleton-content-b"></div>
          <div class="sk-p skeleton-content-c"></div>
        </div>
      </div>
    </>
  );
};
