import React from "react"; 
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRightToBracket } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 px-4 sm:px-8 bg-[#6022ac] py-4">
      {/* Social Media Icons */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-white mb-4 sm:mb-0">
        <a
          href="https://www.linkedin.com/school/ssuetofficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://twitter.com/SSUET_Official"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.facebook.com/sirsyeduniversitykr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.youtube.com/channel/UCi5Z7Pmuio5Vw2978Z7zCkg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Links and Navigation */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-white text-center sm:text-left w-full sm:w-auto">
        <a href="https://edusmartz.ssuet.edu.pk/AdmissionPortal/login" target="_blank" rel="noopener noreferrer">
          My SSUET Online Log-in
        </a>

        <a href="https://www.ssuet.edu.pk/?s=faq&et_pb_searchform_submit=et_search_proccess&et_pb_include_posts=yes&et_pb_include_pages=yes">
          FAQ'S
        </a>
        <a
          href="https://www.ssuet.edu.pk/careers/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Careers
        </a>
        <div className="flex justify-center sm:justify-start items-center mt-2 sm:mt-0">
          <FaArrowRightToBracket />
        </div>
      </div>
    </div>
  );
}
