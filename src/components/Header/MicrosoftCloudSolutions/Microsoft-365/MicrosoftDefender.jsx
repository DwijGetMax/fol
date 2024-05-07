import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Microsoft360sharePoint from "../../../../assets/Microsoft365sharepoint.mp4";
import SharepointCard from "./SharepointCard";
import SharepointColaboration from "./SharepointColaboration";
import Onedrive from "./Onedrive";
import SharepointFAQ from "./SharePointFAQ";
import DefenderImg from "../../../../assets/defenderImage.png";

const MicrosoftDefender = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Enhance Security with Microsoft 365 Defender | Getmax.ae</title>
        {/* Description */}
        <meta
          name="description"
          content="Protect your organization with Microsoft 365 Defender. Explore advanced threat protection, security management, and endpoint security solutions tailored to safeguard your business. Partner with Getmax.ae for expert support and implementation."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="http://localhost:5173/microsoft-365/microsoft-365-defender"
        />

        {/* Open Graph (OG) tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Enhance Security with Microsoft 365 Defender | Getmax.ae"
        />
        <meta
          property="og:description"
          content="Protect your organization with Microsoft 365 Defender. Explore advanced threat protection, security management, and endpoint security solutions tailored to safeguard your business. Partner with Getmax.ae for expert support and implementation."
        />
        <meta
          property="og:url"
          content="http://localhost:5173/microsoft-365-defender"
        />
        <meta
          property="og:site_name"
          content="GetMax.Ae Microsoft 365 Managed Services"
        />
        <meta property="article:publisher" content="" />
        <meta property="article:published_time" content="" />
        <meta property="article:modified_time" content="" />
        <meta property="og:image" content="microsoft-365/power-application" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="629" />

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Pankaj Jain" />
        <meta name="twitter:label2" content="Est. reading time" />
        <meta name="twitter:data2" content="3 minutes" />

        {/* Facebook tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="YOUR_WEBSITE_URL" />
        <meta property="og:title" content="c" />
        <meta
          property="og:description"
          content="Empower your business with Microsoft 365 Power Applications. Explore custom app development, workflow automation, and data analysis solutions tailored to optimize your operations. Partner with Getmax.ae for expert support and implementation"
        />
        <meta property="og:image" content="" />

        {/* LinkedIn tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.linkedin.com/company/getmax/"
        />
        <meta
          property="og:title"
          content="Unlock Efficiency with Microsoft 365 Power Applications | Getmax.ae"
        />
        <meta
          property="og:description"
          content="Empower your business with Microsoft 365 Power Applications. Explore custom app development, workflow automation, and data analysis solutions tailored to optimize your operations. Partner with Getmax.ae for expert support and implementation"
        />
        <meta
          property="og:image"
          content="microsoft-365/solutions-and-offerings"
        />
        <meta property="og:site_name" content="YOUR_WEBSITE_NAME" />

        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Unlock Efficiency with Microsoft 365 Power Applications | Getmax.ae",
      "author": {
        "@type": "Person",
        "name": "Pankaj Jain"
      },
      "datePublished": "",
      "dateModified": "",
      "image": {
        "@type": "ImageObject",
        "url": "",
        "width": 1200,
        "height": 629
      },
      "publisher": {
        "@type": "Organization",
        "name": "GetMax.Ae",
        "logo": {
          "@type": "ImageObject",
          "url": "",
          "width": 1854,
          "height": 503
        }
      },
      "mainEntityOfPage": "",
      "url": "",
      "description": "Empower your business with Microsoft 365 Power Applications. Explore custom app development, workflow automation, and data analysis solutions tailored to optimize your operations. Partner with Getmax.ae for expert support and implementation"
    }
    `}
        </script>
      </Helmet>
      <div className="bg-gradient-to-l from-gray-100 to-blue-300 ">
        <main class="relative h-screen overflow-hidden bg-gradient-to-l from-gray-100 to-blue-300 dark:bg-gray-800">
          <div class="container mx-auto flex items-center justify-between ">
            <div class="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
              <h1 class="text-4xl md:text-6xl lg:text-6xl font-bold text-[#1b1c44] leading-tight mb-4 mt-12">
                Everyday online security with
                <br class="hidden lg:inline" /> Microsoft Defender
              </h1>
              <p class="text-lg text-[#1b1c44] mb-6 leading-relaxed">
                Secure App for Individuals & Families, Protecting Online
                Identities, Data & Devices. Exclusive with Microsoft 365.
              </p>
              <div class="flex mt-8">
                <Link
                  href="#"
                  class="px-4 py-2 mr-4 text-black uppercase bg-gradient-to-r from-orange-500 to-pink-500 border-2 border-transparent rounded-lg text-md hover:text-white"
                >
                  Get started
                </Link>
                <Link
                  href="#"
                  class="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </Link>
              </div>
              <div className="text-start mt-4">
                <button
                  onClick={handlePopupOpen}
                  className="text-sm text-blue-700 hover:underline focus:outline-none"
                >
                  Watch the video
                </button>
              </div>
            </div>
            <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5 py-0 pl-[100px]   ">
              <img
                // src={HeroImage}
                src={DefenderImg}
                class="max-w-3xs m-auto md:max-w-3xl h-[500px] "
              />
            </div>
          </div>
        </main>
        <section>
          <div className="p-6 pt-0 mt-0 mb-8 items-center text-center bg-gradient-to-l from-gray-100 to-blue-300">
            <h2 className="text-2xl font-semibold text-[#1b1c44] mb-2 mt-4">
              Empower your team with seamless collaboration, efficient content
              management and easy access to knowledge and applications.
            </h2>
            <p className="text-lg text-[#1b1c44] mb-0">
              Share and manage content effortlessly, enabling swift information
              retrieval and fostering collaboration across your organization.
            </p>
          </div>
          {showPopup && (
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-80 z-50">
              <div className="bg-white p-4 rounded-lg shadow-2xl relative">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                  onClick={handlePopupClose}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="aspect-w-16 aspect-h-9">
                  <ReactPlayer
                    url={Microsoft360sharePoint}
                    controls
                    playing
                    config={{
                      file: {
                        attributes: {
                          muted: true,
                        },
                      },
                    }}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          )}
        </section>
        <section>
          <SharepointCard />
          <SharepointColaboration />
          {/* OneDrive Section */}
          <Onedrive />
          <SharepointFAQ />
        </section>
      </div>
    </>
  );
};

export default MicrosoftDefender;
