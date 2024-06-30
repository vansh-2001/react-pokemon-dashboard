import React from "react";

const { useState } = React;
const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
        onSearch(
        );
    }
    
  };

  const onClick = async (e) => {
    onSearch(search);
  };
  //  refreshPage  function
  function refreshPage() {
    window.location.reload(false);
   }
  return (
    <div className="searchbar-container d-flex justify-content-center my-4">
    <div className="go_back"><button class="btn btn-link " onClick={refreshPage}><i class="fa fa-angle-double-left"></i></button></div>
      <div className="searchbar">
      <input className="form-control" type="text" placeholder="Search Pokemon..." readonly onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button className="btn btn-light" onClick={onClick}><i className="fa fa-search" aria-hidden="true"></i></button>
      </div>
    </div>
  );
};

export default Searchbar;
