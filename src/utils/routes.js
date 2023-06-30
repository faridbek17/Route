import Page from "../pages/Page";

export const routes = [
    {
        id: 1,
        path: 'about',
        element: <Page className='about'>About</Page>,
    },
    {
        id: 2,
        path: 'service',
        element: <Page className='service'>Service</Page>,
    },
    {
        id: 3,
        path: 'portfolio',
        element: <Page className='portfolio'>Portfolio</Page>,
    },
    {
        id: 4,
        path: 'contact',
        element: <Page className='contact'>Contact</Page>,
    },
    {
        id: 5,
        path: '/',
        element: <Page className='home'>Home</Page>,
    },
    {
        id: 6,
        path: '/blog',
        element: <Page className='blog'>Blog</Page>
    }
]