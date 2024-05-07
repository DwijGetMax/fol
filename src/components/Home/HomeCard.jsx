import React from "react";
import { Link } from "react-router-dom";
import TransitionMicrosoft365ModernWorkplace from "../../assets/TransitionMicrosoft 365'sModernWorkplace.jpg";
import MigrationMicrosoftAzureCloudServices from "../../assets/MigrationMicrosoftAzureCloudServices.jpg";
import Microsoft365DynamicsBusinessOperations from "../../assets/Microsoft365DynamicsBusinessOperations.jpg";
import DeploymentMicrosoftModernWorkplace from "../../assets/DeploymentMicrosoftModernWorkplace.jpg";

import DeploymentMicrosoft365TeamsTelephony from "../../assets/DeploymentMicrosoft365TeamsTelephony.png";
import AccelerateMicrosoft365SecurityDeployment from "../../assets/AccelerateMicrosoft365SecurityDeployment.png";
import DevelopmentHosingMigrationWebsites from "../../assets/DevelopmentHosingMigrationWebsites.png";
import SetupIntegrationHardware from "../../assets/SetupIntegrationHardware.jpg";
import ITsupportservicesbothremotesite from "../../assets/ITsupportservicesbothremotesite.jpg";

import { Button } from "@material-tailwind/react";

const HomeCard = () => {
  return (
    <>
      <div className="text-center mb-8 pt-8 ">
        <h1 className="text-4xl font-semibold text-[#1b1c44] mb-4">
          Our Solutions &{" "}
          <span className="text-orange-600 font-bold">Offerings</span>
        </h1>
      </div>
      <div className="flex justify-center space-x-20 py-4">
        {/* Card 1 */}
        <div className="block rounded-lg bg-white shadow-md dark:bg-surface-dark w-80">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat h-[50%]"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              className="rounded-t-lg "
              src={TransitionMicrosoft365ModernWorkplace}
              alt="Transition to Microsoft 365's Modern Workplace"
            />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="px-6  text-surface dark:text-white">
            <h5 className="mb-2 text-lg font-semibold leading-tight text-black">
              Transition to Microsoft 365's Modern Workplace
            </h5>
            <p className="mb-4 text-sm">
              Effortlessly shift from outdated workspace systems to the
              integrated Microsoft 365 suite. Streamline operations, foster
              collaboration, and elevate productivity through seamless
              migration.
            </p>
            <Link href="#" className="inline-block">
              <button
                variant="text"
                className="flex items-center gap-2 text-[#1b1c44] text-sm font-medium "
                // style={{ textTransform: "capitalize" }}
              >
                Talk to an expert
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="block rounded-lg bg-white shadow-md dark:bg-surface-dark w-80">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat h-[50%]"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              className="rounded-t-lg"
              src={MigrationMicrosoftAzureCloudServices}
              alt="MigrationMicrosoftAzureCloudServices"
            />
            <Link href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </Link>
          </div>
          <div className="px-6  text-surface dark:text-white">
            <h5 className="mb-2 text-lg font-semibold leading-tight text-black">
              Migration to Microsoft Azure Cloud Services
            </h5>
            <p className="mb-4 text-sm">
              Advance your business with a seamless migration to Microsoft Azure
              Cloud Services. Leverage scalable infrastructure, advanced
              security, and unmatched flexibility for exponential growth.
            </p>
            <Link href="#" className="inline-block">
              <button
                variant="text"
                className="flex items-center gap-2 text-[#1b1c44] text-sm font-medium "
                // style={{ textTransform: "capitalize" }}
              >
                Talk to an expert
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="block rounded-lg bg-white shadow-md dark:bg-surface-dark w-80">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              className="rounded-t-lg"
              src={Microsoft365DynamicsBusinessOperations}
              alt="Microsoft 365DynamicsBusinessOperations"
            />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="px-6 py-6 text-surface dark:text-white">
            <h5 className="mb-2 text-lg font-semibold leading-tight text-black">
              Microsoft 365 Dynamics for Business Operations
            </h5>
            <p className="mb-4 text-sm text-start">
              Effortlessly embrace Microsoft 365 Dynamics to revolutionize
              business operations. Seamlessly integrate powerful CRM and ERP
              solutions for unparalleled efficiency and streamlined workflows.
            </p>
            <Link href="#" className="inline-block">
              <button
                variant="text"
                className="flex items-center gap-2 text-[#1b1c44] text-sm font-medium "
                // style={{ textTransform: "capitalize" }}
              >
                Talk to an expert
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-20 py-4">
        {/* Card 4 */}
        <div className="block rounded-lg bg-white shadow-md dark:bg-surface-dark w-80">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              className="rounded-t-lg"
              src={DeploymentMicrosoftModernWorkplace}
              alt="DeploymentMicrosoftModernWorkplace"
            />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-6 text-surface dark:text-white">
            <h5 className="mb-2 text-lg font-semibold leading-tight text-black">
              Deployment of Microsoft 365 Modern Workplace
            </h5>
            <p className="mb-4 text-sm">
              Embrace the future of work with Microsoft 365 Modern Workplace.
              Revolutionize productivity and collaboration using tools like
              Microsoft Teams and Power, enhancing success with streamlined
              workflows.
            </p>
            <Link href="#" className="inline-block">
              <button
                variant="text"
                className="flex items-center gap-2 text-[#1b1c44] text-sm font-medium "
                // style={{ textTransform: "capitalize" }}
              >
                Talk to an expert
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        {/* Card 5 */}
        <div className="block rounded-lg bg-white shadow-md dark:bg-surface-dark w-80">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              className="rounded-t-lg"
              src={DeploymentMicrosoft365TeamsTelephony}
              alt="DeploymentMicrosoft365TeamsTelephony"
            />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-6 text-surface dark:text-white">
            <h5 className="mb-2 text-lg font-semibold leading-tight text-black">
              Deployment of Microsoft 365 Teams Telephony
            </h5>
            <p className="mb-4 text-sm">
              Enhance communication with Microsoft 365 Teams Telephony.
              Seamlessly integrate voice services for efficient calling and
              collaboration, boosting productivity and connectivity within your
              platform.
            </p>
            <Link href="#" className="inline-block">
              <button
                variant="text"
                className="flex items-center gap-2 text-[#1b1c44] text-sm font-medium "
                // style={{ textTransform: "capitalize" }}
              >
                Talk to an expert
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Card 6 */}
        <div className="block rounded-lg bg-white shadow-md dark:bg-surface-dark w-80">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              className="rounded-t-lg"
              src={AccelerateMicrosoft365SecurityDeployment}
              alt="AccelerateMicrosoft365SecurityDeployment"
            />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-6 text-surface dark:text-white">
            <h5 className="mb-2 text-lg font-semibold leading-tight text-black">
              Accelerate Microsoft 365 Security Deployment
            </h5>
            <p className="mb-4 text-sm">
              Enhance security with Microsoft 365. Protect your organization
              against evolving threats and ensure peace of mind with advanced
              threat protection and identity management features in security
              deployment.
            </p>
            <Link href="#" className="inline-block">
              <button
                variant="text"
                className="flex items-center gap-2 text-[#1b1c44] text-sm font-medium "
                // style={{ textTransform: "capitalize" }}
              >
                Talk to an expert
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-20 py-4">
        {/* Card 7 */}
        <div className="block rounded-lg bg-white shadow-md dark:bg-surface-dark w-80">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              className="rounded-t-lg"
              src={DevelopmentHosingMigrationWebsites}
              alt="DevelopmentHosingMigrationWebsites"
            />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-6 text-surface dark:text-white">
            <h5 className="mb-2 text-lg font-semibold leading-tight text-black">
              Development, Hosting, and Migration of Websites
            </h5>
            <p className="mb-4 text-sm">
              Elevate your online presence effortlessly. We offer complete
              solutions from captivating designs to reliable hosting and
              seamless migration, ensuring a smooth journey.
            </p>
            <Link href="#" className="inline-block">
              <button
                variant="text"
                className="flex items-center gap-2 text-[#1b1c44] text-sm font-medium "
                // style={{ textTransform: "capitalize" }}
              >
                Talk to an expert
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        {/* Card 8 */}
        <div className="block rounded-lg bg-white shadow-md dark:bg-surface-dark w-80">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              className="rounded-t-lg"
              src={SetupIntegrationHardware}
              alt="SetupIntegrationHardware"
            />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-6 text-surface dark:text-white">
            <h5 className="mb-2 text-lg font-semibold leading-tight text-black">
              Setup and Integration of IT Hardware
            </h5>
            <p className="mb-4 text-sm">
              Optimize IT infrastructure seamlessly. Integrate hardware for peak
              performance. Our services configure your setup expertly, ensuring
              smooth operations and streamlined efficiency.
            </p>
            <Link href="#" className="inline-block">
              <button
                variant="text"
                className="flex items-center gap-2 text-[#1b1c44] text-sm font-medium "
                // style={{ textTransform: "capitalize" }}
              >
                Talk to an expert
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        {/* Card 9 */}
        <div className="block rounded-lg bg-white shadow-md dark:bg-surface-dark w-80">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              className="rounded-t-lg"
              src={ITsupportservicesbothremotesite}
              alt="SetupIntegrationHardware"
            />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <div className="p-6 text-surface dark:text-white">
            <h5 className="mb-2 text-lg font-semibold leading-tight text-black">
              IT support services, both remotely and on-site
            </h5>
            <p className="mb-4 text-sm space-y-4">
              We provide IT support services both remotely and on-site, offering
              efficient troubleshooting, software installations, hardware
              repairs, and network setups tailored to your needs.
            </p>
            <Link href="#" className="inline-block">
              <button
                variant="text"
                className="flex items-center gap-2 text-[#1b1c44] text-sm font-medium "
                // style={{ textTransform: "capitalize" }}
              >
                Talk to an expert
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
