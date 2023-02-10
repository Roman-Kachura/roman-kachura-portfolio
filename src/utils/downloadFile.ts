import {instance} from '../components/c2-main/m5-contacts/contactApi';

export const getFile = () => {
    instance.get('/download', {responseType: 'blob'})
        .then(({data}) => {
            const blob = new Blob([data], {type: 'application/pdf'});
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.target = '_blank';
            link.setAttribute('download', 'Roman-Kachura-CV');
            document.body.appendChild(link);
            link.click();
            link.remove();
        })
};