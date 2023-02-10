import todolistImage from './images/todolist.jpeg';
import questionImage from './images/question-mark.jpg';
import reviewsImage from './images/reviews.png';
import waxomImage from './images/waxom.png';
import corpImage from './images/corp.png';
import bouncyImage from './images/bouncy.png';

export type ProjectType = {
    link: string
    github: string
    title: string
    img: string
}

export const projects: ProjectType[] = [
    {
        img: reviewsImage,
        title: 'Reviews app',
        link: 'https://roman-kachura.github.io/course_project/',
        github: 'https://github.com/Roman-Kachura/course_project'
    },
    {
        img: questionImage,
        title: 'card-training',
        link: 'https://roman-kachura.github.io/card-training',
        github: 'https://github.com/Roman-Kachura/card-training'
    },
    {
        img: todolistImage,
        title: 'todolist',
        link: 'https://roman-kachura.github.io/TodoList',
        github: 'https://github.com/Roman-Kachura/TodoList'
    },
    {
        img: waxomImage,
        title: 'waxom layout',
        link: 'https://roman-kachura.github.io/roman-kachura-waxom/',
        github: 'https://github.com/Roman-Kachura/roman-kachura-waxom/'
    },
    {
        img: bouncyImage,
        title: 'bouncy layout',
        link: 'https://roman-kachura.github.io/roman-kachura.github.io-bouncy/',
        github: 'https://github.com/Roman-Kachura/roman-kachura.github.io-bouncy'
    },
    {
        img: corpImage,
        title: 'corp layout',
        link: 'https://roman-kachura.github.io/corp_site1/',
        github: 'https://github.com/Roman-Kachura/corp_site1/'
    },
]