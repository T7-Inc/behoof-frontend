import { Footer } from 'flowbite-react';

const FooterWrap = () => (
    <Footer container={true} className='container mx-auto mt-5 shadow-inherit'>
        <Footer.Copyright href='#' by='Behood™' year={2022} />
        <Footer.LinkGroup>
            <Footer.Link href='#'>About</Footer.Link>
            <Footer.Link href='#'>Privacy Policy</Footer.Link>
            <Footer.Link href='#'>Licensing</Footer.Link>
            <Footer.Link href='#'>Contact</Footer.Link>
        </Footer.LinkGroup>
    </Footer>
);

export { FooterWrap as Footer };
