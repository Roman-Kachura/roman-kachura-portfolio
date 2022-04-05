import {MouseEvent} from "react";
import axios from "axios";

export const getFile = (url: string, fileName: string) => {
    // запросить файл
        console.log('1');
        axios.get(url,{responseType: 'blob'}).then( ({data}) => {
                const blob = new Blob([data], {type : 'application/pdf'});
                const downloadUrl = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.target = '_blank';
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                link.remove();
                console.log(link);
        })
    // axios.get(url, {responseType: 'blob'}) // !!! responseType: 'blob'
    //     .then(({data}) => {
    //         const blob = new Blob([data], {type : 'application/pdf'});
    //         console.log(blob)
    //
    //         // создать ссылку на файл
    //         const downloadUrl = window.URL.createObjectURL(blob);
    //
    //         // создать тег "ссылка" на наш файл
    //         const link = document.createElement('a');
    //         link.href = downloadUrl;
    //
    //         // добавить атрибуты нашему тегу: загрузочный, имя файла
    //         link.setAttribute('download', fileName);
    //
    //         // добавить тег в документ
    //         document.body.appendChild(link);
    //
    //         // нажать на ссылку
    //         link.click();
    //
    //         // удалить тег из документа
    //         link.remove();
    //     });
};