import React from "react";
import { Helmet } from "react-helmet";


export const SEO: React.FC<{
    PageTitle?: string;
    PageDescr?: string;
    Canonical?: string;
}> = ({
    PageTitle, PageDescr, Canonical
}) => {
    return (
        <Helmet htmlAttributes={{lang: `ru`}}>
			<title>{PageTitle}</title>
            <meta charSet="utf-8" />
			<meta name='description' content={PageDescr} />
			<meta name='og:title' content={PageTitle} />
			<meta name='og:description' content={PageDescr} />
			<link rel='canonical' href={Canonical} />
		</Helmet>
    );
};