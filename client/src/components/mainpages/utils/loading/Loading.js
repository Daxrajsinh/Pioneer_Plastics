import React from 'react';
import './loading.css';

function Loading() {
  return (
    <div className="loading-container">
      <div className="skeleton-static-background">
        <div className="skeleton-background-masker skeleton-btn-divide-left"></div>
      </div>

      <div className="skeleton-animated-background">
        <div className="skeleton-background-masker skeleton-btn-divide-left"></div>
      </div>

      <div className="skeleton-shared-dom">
        <div className="skeleton-sub-rect skeleton-pure-background"></div>
        <div className="skeleton-sub-rect skeleton-pure-background"></div>
        <div className="skeleton-sub-rect skeleton-pure-background"></div>
        <div className="skeleton-sub-rect skeleton-pure-background"></div>
        <div className="skeleton-sub-rect skeleton-pure-background"></div>
        <div className="skeleton-sub-rect skeleton-pure-background"></div>
        <div className="skeleton-sub-rect skeleton-pure-background"></div>
        <div className="skeleton-sub-rect skeleton-pure-background"></div>
      </div>

      <div className="skeleton-css-dom"></div>
    </div>
  );
}

export default Loading;