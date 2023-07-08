// Define our routing rules //

import {createRouter, createWebHistory} from "vue-router"
import Home from "../views/Home.vue"
import Question from "../views/Question.vue"
import NotFoundView from "../views/404View.vue"

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/question/:id",
            name: "question",
            component: Question
        },
        {
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: NotFoundView
        }
    ]
})

export default router
