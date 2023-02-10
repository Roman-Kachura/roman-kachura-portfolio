import React from "react";
import {Home} from "./m1-homepage/Home";
import {Skills} from "./m2-skillspage/Skills";
import {Works} from "./m3-workspage/Works";
import {Remote} from "./m4-remote/Remote";
import {Contacts} from "./m5-contacts/Contacts";
import {About} from "./m7-about/About";

export const Main = () => {
    return (
        <main>
            <Home/>
            <About/>
            <Skills/>
            <Works/>
            {/*<Remote/>*/}
            <Contacts/>
        </main>
    )
}