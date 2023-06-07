import { Footer } from 'flowbite-react';

const FooterWrap = (props: { className?: string }) => (
    <Footer
        container={true}
        className={`container mx-auto mt-5 shadow-inherit ${props.className}`}>
        <Footer.Copyright
            href='#'
            by='Behood™'
            year={2022}
            className='mb-2 sm:!text-left'
        />
        <Footer.LinkGroup className='mb-2'>
            <Footer.Link href='#' className='mr-3'>
                About
            </Footer.Link>
            <Footer.Link href='#' className='mr-3'>
                Privacy Policy
            </Footer.Link>
            <Footer.Link href='#' className='mr-3'>
                Licensing
            </Footer.Link>
            <Footer.Link href='#' className='mr-3'>
                Contact
            </Footer.Link>
        </Footer.LinkGroup>
    </Footer>
);

export { FooterWrap as Footer };
