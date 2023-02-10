import jsImg from './icons/js.png';
import tsImg from './icons/typescript.png';
import cssImg from './icons/css-3.png';
import reduxImg from './icons/redux.png';
import htmlImg from './icons/html-5.png';
import reactImg from './icons/react.png';
import muiImg from './icons/MUI.png';
import antdImg from './icons/ANTD.png';
import gitImg from './icons/git.png';
import axiosImg from './icons/AXIOS.png';
import restApiImg from './icons/restAPI.png';
import nodeJsImage from './icons/node-js.png';
import mySqlImage from './icons/mysql.png';
import mongoDBImage from './icons/mongodb.png';
import expressImage from './icons/express.png';

export const skills: Array<skillType> = [
    {src: jsImg, name: 'JavaScript'},
    {src: tsImg, name: 'TypeScript'},
    {src: reactImg, name: 'React'},
    {src: reduxImg, name: 'Redux'},
    {src: htmlImg, name: 'HTML'},
    {src: cssImg, name: 'CSS'},
    {src: muiImg, name: 'Material-UI'},
    {src: antdImg, name: 'ANT-Design'},
    {src: gitImg, name: 'GIT'},
    {src: axiosImg, name: 'AXIOS'},
    {src: restApiImg, name: 'restAPI'},
    {src: nodeJsImage, name: 'NodeJS'},
    {src: mySqlImage, name: 'MySQL'},
    {src: mongoDBImage, name: 'MongoDB'},
    {src: expressImage, name: 'Express'},
];

type skillType = {
    src: string
    name: string
}