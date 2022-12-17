import React from "react";
import { Route, Routes } from "react-router-dom";
import './Content.css'

import About from '../../views/examples/About'
import Params from '../../views/examples/Params'
import Home from '../../views/examples/Home'
import NotFound from "../../views/examples/NotFound";

export default function Content(props) {
    return (
        <main className="Content">
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/params/:id" element={<Params />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}