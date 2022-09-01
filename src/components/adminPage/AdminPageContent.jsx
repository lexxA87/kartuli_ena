import React from "react";
import TagsContent from "./tags/TagsContent";
import WordsContent from "./words/WordsContent";

function AdminPageContent() {
  return (
    <div className="d-flex align-items-start">
      <div
        className="nav flex-column nav-pills m-3"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          className="nav-link active"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Words
        </button>
        <button
          className="nav-link"
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Tags
        </button>
      </div>
      <div className="tab-content m-3" id="v-pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
          tabIndex="0"
        >
          <WordsContent />
        </div>
        <div
          className="tab-pane fade"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
          tabIndex="0"
        >
          <TagsContent />
        </div>
      </div>
    </div>
  );
}

export default AdminPageContent;
