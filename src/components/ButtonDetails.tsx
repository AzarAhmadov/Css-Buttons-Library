import React, { useState } from 'react';
import { buttonsData } from '../data/Data';
import { NavLink, useLocation } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';

const ButtonDetails: React.FC = () => {

    window.scrollTo(0, 0)

    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const lastPathSegment = pathArray[pathArray.length - 1];
    const filteredButton = buttonsData.find(button => button.link === lastPathSegment);

    const [copiedHtml, setCopiedHtml] = useState(false);
    const [copiedCss, setCopiedCss] = useState(false);

    const handleCopyHtml = () => {
        setCopiedHtml(true);
    };

    const handleCopyCss = () => {
        setCopiedCss(true);
    };

    const htmlToCopy = filteredButton?.html || '';
    const cssToCopy = filteredButton?.sourceCode || '';

    let content = null;

    if (filteredButton?.content) {
        const isImage = React.isValidElement(filteredButton.content) && filteredButton.content.type === 'img';
        if (isImage) {
            content = filteredButton.content;
        }
    }

    const handlePreClick = (e: React.MouseEvent<HTMLPreElement>) => {
        e.preventDefault();
    }

    return (
        <main>
            <section id='detail'>
                <h5>{filteredButton?.title}</h5>
                <div className="button-detail-show">
                    {content}
                    <pre onClick={handlePreClick}>{filteredButton?.showDetail}</pre>
                </div>
                <div className="row">
                    <span>Html</span>
                    <CopyToClipboard text={htmlToCopy} onCopy={handleCopyHtml}>
                        <button className='copy-button'>
                            {copiedHtml ? 'Copied!' : 'Copy code '}
                        </button>
                    </CopyToClipboard>
                    <div className="left">
                        <pre>{htmlToCopy}</pre>
                    </div>
                    {
                        filteredButton?.sourceCode &&
                        <div className='row-bottom row'>
                            <span>Css</span>
                            <CopyToClipboard text={cssToCopy} onCopy={handleCopyCss}>
                                <button className='copy-button'>
                                    {copiedCss ? 'Copied!' : 'Copy code '}
                                </button>
                            </CopyToClipboard>
                            <div className="right">
                                <pre>{cssToCopy}</pre>
                            </div>
                        </div>
                    }
                </div>

                <NavLink className='back' to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                        <path
                            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                        />
                    </svg> Go back
                </NavLink>
            </section>
        </main>
    );
}

export default ButtonDetails;
