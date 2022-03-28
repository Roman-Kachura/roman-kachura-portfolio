import React from "react";
import {Home} from "./m1-homepage/Home";
import {Skills} from "./m2-skillspage/Skills";
import {Works} from "./m3-workspage/Works";
import {Remote} from "./m4-remote/Remote";
import {Contacts} from "./m5-contacts/Contacts";

export const Main = () => {
    return (
        <main>
            <Home/>
            <Skills/>
            <Works/>
            <Remote/>
            <Contacts/>
        </main>
    )
}