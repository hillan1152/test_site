import React, { useState, useEffect } from "react";

export const SearchBar = props => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
            <input type="text" placeholder="Search" />
        </div>
    );
};