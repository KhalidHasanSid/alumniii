import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
  return (
    <nav className="bg-purple-500 p-2 text-white" >
      <div className="flex flex-wrap items-center justify-start">
        
        <div className="flex gap-4 p-3">
          <a
            href="https://www.linkedin.com/school/ssuetofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com/SSUET_Official"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.facebook.com/sirsyeduniversitykr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/channel/UCi5Z7Pmuio5Vw2978Z7zCkg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaYoutube />
          </a>
        </div>

        
        <ul className="flex gap-4 p-3 flex-wrap">
          <li>
           
          </li>
          <li>
            <a
              href="https://www.ssuet.edu.pk/?s=faq&et_pb_searchform_submit=et_search_proccess&et_pb_include_posts=yes&et_pb_include_pages=yes"
              className="hover:underline"
            >
              FAQ&apos;S
            </a>
          </li>
          <li>
            <a
              href="https://www.ssuet.edu.pk/careers/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Careers
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}