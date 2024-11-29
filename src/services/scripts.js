/* eslint-disable */
export default function bytesToSize(bytes) {
    bytes = Number(bytes)
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 B';
    let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i == 0) return bytes + ' ' + sizes[i];
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}
