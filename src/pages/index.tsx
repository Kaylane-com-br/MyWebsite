import * as React from 'react'
import {Helmet} from 'react-helmet';
import {Profile} from '../templates/profile/profile';
import configuration from '../data/Data';
import imgFavicon from '../images/favicon.png';
import imgOpenGraph from '../images/opengraph.png';
import imgProfilePrimary from '../images/profile-primary.jpg';
import imgProfileSecondary from '../images/profile-secondary.jpg';

const regexMultipleSlash = /(?<!:)\/+/g;

const Page = () => {
  return (
    <main>
      <Helmet>
        <title>{ configuration.profile.title }</title>

        <meta charSet="UTF-8" />

        <meta property="og:locale" content={ configuration.settings.locale } />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ configuration.profile.name } />
        <meta property="og:description" content={ configuration.profile.description } />
        <meta property="og:url" content={ configuration.profile.url } />
        <meta property="og:site_name" content={ configuration.profile.title } />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content={ `${configuration.profile.url}/${imgOpenGraph}`.replace(regexMultipleSlash, '/') } />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={ configuration.profile.name } />
        <meta name="twitter:description" content={ configuration.profile.description } />

        <link rel="shortcut icon" href={imgFavicon} />

      </Helmet>
      <Profile 
        name={configuration.profile.name} 
        description={configuration.profile.description}
        imageWidthAndHeight="10em"
        imageCycleInSeconds={configuration.settings.cycleInSeconds}
        imagePrimary={imgProfilePrimary}
        imageSecondary={imgProfileSecondary}
        maxWidth={configuration.settings.width}
        maxHeight={configuration.settings.height}
        sections={configuration.profile.sections}
      />
    </main>
  )
}

export default Page
