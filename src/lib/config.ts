import { dev } from '$app/environment';

export const title = 'miklosdaniel.hu';
export const description = `Fullstack Developer with a passion for web technologies.`;
export const url = dev ? 'http://localhost:5173' : 'https://miklosdaniel.hu';
export const urlShort = url.replace('https://', '').replace('http://', '');
export const image = `${url}/preview.png`;
