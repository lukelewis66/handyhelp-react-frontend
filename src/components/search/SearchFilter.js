import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

const SearchFilter = ({ handleFilters }) => {
    const [tagFilters, setTagFilters] = useState([])

    const allSkillTags = ["skilltag 1", "skilltag 2", "skilltag 3", "skilltag 4"];

    //needs work. Should be updating tagFilters
    const handleSkillCheck = (skilltag) => {
        console.log("skilltag: " + skilltag);
        //setTagFilters([...tagFilters, skilltag]);
    }

    //needs work. should be calling handleFilters, which calls function in parent that updates selectedFilters prop for SearchList
    const doFilter = () => {
        console.log("Filter button called");
        //handleFilters(tagFilters);
    }


    return (
        <div className="component-border" style={{ width: "25%" }}>
            <h1>SearchFilter Component</h1>
            <p>tagFilters: {tagFilters}</p>
            <Form>
                {allSkillTags.map((skilltag) => <Form.Check type="checkbox" label={skilltag} onChange={() => handleSkillCheck(skilltag)} />)}
                <Button onClick={() => doFilter()}>Filter</Button>
            </Form>
        </div>
    )
}

export default SearchFilter;