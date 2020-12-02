import React, { useState, useRef } from "react";

import { Form, Button } from "react-bootstrap";
import { SKILLTAGS, SKILLTAG_PILLS } from "../../constants/skilltags";
import GeoSearchBar from "./GeoSearchBar";

const SearchFilter = ({ handleFilters, handleClearFilters }) => {
    const [filters, setFilters] = useState({
        location: [],
        distance: 50,
        skilltags: [],
    });

    const distanceRef = useRef();

    function doFilter() {
        console.log("doFilter called with filters:", filters);
        handleFilters(filters);
    }

    const clearFilters = () => {
        handleClearFilters();
    }

    const showTags = () => {
        return SKILLTAGS.map((tag) => (
            <label>
                <input type="checkbox" style={{ marginRight: "10px" }} value={tag.label} onChange={(e) => handleSkillTagSelection(e)} />
                {SKILLTAG_PILLS[tag.label]}
            </label>
        ));
    }

    const handleSkillTagSelection = (e) => {
        let val = [...filters.skilltags];
        const curTag = e.target.value;
        if (val.some((tag) => tag === curTag)) {
            val.splice(val.indexOf(curTag), 1);
        }
        else {
            val.push(e.target.value);
        }
        setFilters((prevState) => ({
            ...prevState,
            skilltags: val
        }))
    }

    function handleCoordinates(lat, lng) {
        if (!lat || !lng) {
            setFilters((prevState) => ({
                ...prevState,
                location: []
            }))
        }
        else {
            setFilters((prevState) => ({
                ...prevState,
                location: [lat, lng]
            }))
        }
    }

    function changeDistance() {
        setFilters((prevState) => ({
            ...prevState,
            distance: distanceRef.current.value,
        }));
    }
    return (
        <div className="search-filter">
            <h3>Filter Your Search</h3>
            <Form>
                <div className="filter-div">
                    <Form.Label><b>Filter by Location</b></Form.Label>
                    <GeoSearchBar handleCoordinates={handleCoordinates} prevLocationSelected={false} />
                    <Form.Label style={{ marginTop: "1rem" }}>Distance: {filters.distance} miles</Form.Label>
                    <input ref={distanceRef} style={{ width: "100%" }} type="range" id="search-range" name="search-range" min="25" max="75" value={filters.distance} onInput={() => changeDistance()} />
                </div>
                <div className="filter-div">
                    <Form.Label><b>Filter by Skill Tags</b></Form.Label>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {showTags()}
                    </div>
                </div>
                <Button onClick={() => doFilter()} style={{ marginRight: "10px" }}>Filter</Button>
                <Button onClick={() => clearFilters()}>Clear Filters</Button>
            </Form>
        </div>
    )
}

export default SearchFilter;