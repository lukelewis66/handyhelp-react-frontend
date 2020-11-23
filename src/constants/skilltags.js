import React from "react";

export const SKILLTAGS = [
    {
        key: "general",
        label: "General",
        description: "",
    },
    {
        key: "basic",
        label: "Basic Construction",
        description: "",
    },
    {
        key: "electric",
        label: "Electric",
        description: "",
    },
    {
        key: "landscaping",
        label: "Landscaping",
        description: "",
    },
    {
        key: "hvac",
        label: "HVAC",
        description: "",
    },
    {
        key: "masonry",
        label: "Masonry",
        description: "",
    },
    {
        key: "pestcontrol",
        label: "Pest Control",
        description: "",
    },
    {
        key: "plumbing",
        label: "Plumbing",
        description: "",
    }
]

export const SKILLTAG_PILLS = {
    "General": <span className="badge badge-pill skill-pill badge-primary">General</span>,
    "Basic Construction": <span className="badge badge-pill skill-pill badge-secondary">Basic Construction</span>,
    "Pest Control": <span className="badge badge-pill skill-pill badge-success">Pest Control</span>,
    "HVAC": <span className="badge badge-pill skill-pill badge-danger">HVAC</span>,
    "Masonry": <span className="badge badge-pill skill-pill badge-dark">Masonry</span>,
    "Landscaping": <span className="badge badge-pill skill-pill badge-success">Landscaping</span>,
    "Electric": <span className="badge badge-pill skill-pill badge-warning">Electric</span>,
    "Plumbing": <span className="badge badge-pill skill-pill badge-info">Plumbing</span>
}