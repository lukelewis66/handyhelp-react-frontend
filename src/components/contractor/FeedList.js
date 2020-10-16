import React from "react";
import FeedItem from "./FeedItem";

const FeedList = () => {
    const fakeFeedItems = [
        { id: 1, description: "description 1", image: "image 1", skilltags: "fake skilltags 1" },
        { id: 2, description: "description 2", image: "image 2", skilltags: "fake skilltags 2" },
        { id: 3, description: "description 3", image: "image 3", skilltags: "fake skilltags 3" },
        { id: 4, description: "description 4", image: "image 4", skilltags: "fake skilltags 4" },
    ];

    return (
        <div className="component-border">
            <h1>FeedList component</h1>
            <div className="flex-list">
                {fakeFeedItems.map((item) => (
                    <FeedItem key={item.id} props={item} />
                ))}
            </div>
        </div>
    );
}

export default FeedList;