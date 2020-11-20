import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { SKILLTAGS } from "../../constants/skilltags";
import GeoSearchBar from "./GeoSearchBar";

const SearchFilter = ({ handleFilters }) => {
    const [filters, setFilters] = useState({
        location: [],
        distance: 25,
        skilltags: [],
    });

    const doFilter = () => {
        console.log("tag filters: ", filters.skilltags);
    }

    const showTags = () => {
        return SKILLTAGS.map((tag) => (
            <Form.Check type="checkbox" label={tag.label} value={tag.label} onChange={(e) => handleSkillTagSelection(e)} />
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
        setFilters((prevState) => ({
            ...prevState,
            location: [lat, lng]
        }))
    }

    return (
        <div className="search-filter">
            <h3>Filter Your Search</h3>
            <Form>
                <GeoSearchBar handleCoordinates={handleCoordinates} prevLocationSelected={false} />
                <Form.Label>Filter by Skill Tags</Form.Label>
                {showTags()}
                <Button onClick={() => doFilter()}>Filter</Button>
            </Form>
        </div>
    )
}

export default SearchFilter;