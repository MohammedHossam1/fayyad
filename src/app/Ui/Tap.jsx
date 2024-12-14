'use client'
import Image from "next/image";
import React, { useState } from "react";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react"; // Import Lucide icons
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function Tap() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseModal = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="bg-mainLight shadow-lg text-white fixed top-5 bottom-5 space-y-5">
      {/* Top photo and job */}
      <div className="bg-light py-5 flex flex-col px-16 gap-2 items-center justify-center relative">
        {/* Image with availability dot */}
        <div className="relative">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              {/* Image with available dot */}
              <div className="relative cursor-pointer">
                <Image
                  src={"/mohammedhossam.jpg"}
                  width={300}
                  height={300}
                  alt="mohammedhossam pic"
                  className="rounded-full size-32 object-cover"
                />
                {/* Available Dot */}
                <div className="absolute bottom-2 right-3 w-4 h-4 rounded-full bg-green-500 ">
                  <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 animate-ping" />
                </div>
              </div>
            </DialogTrigger>

            <DialogContent className="bg-transparent border-none text">
                <DialogTitle className="hidden  ">No </DialogTitle>
              {/* Motion div to animate the modal content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center py-5"
              >
                <Image
                  src={"/mohammedhossam.jpg"}
                  width={700}
                  height={700}
                  alt="Preview Image"
                  className=""
                />
              </motion.div>
        
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center flex-col mt-3 gap-1">
          <h1 className="text-white font-bold">Mohammed Hossam</h1>
          <h1 className="text-text text-sm">Frontend Developer</h1>
          <h1 className="text-text text-sm">React & Next.js</h1>
        </div>
      </div>
      <div className="space-y-5 overflow-y-auto h-[55%] scroll-hide pb-10">
        {/* Info */}
        <div className="flex w-full gap-2 flex-col px-5">
          <div className="flex justify-between w-full text-sm">
            <h3>City: </h3>
            <span className="text-text">Egypt, Mansoura</span>
          </div>
          <div className="flex justify-between w-full text-sm">
            <h3>Age: </h3>
            <span className="text-text">27</span>
          </div>
        </div>
        {/* Divider */}
        <div className="w-[90%] h-[1px] bg-text m-auto"></div>

        {/* Skill bars */}
        <div className="px-5">
          <div className="flex flex-col gap-4">
            {/* Skill bar for HTML */}
            <div>
              <label className="text-white text-sm font-medium">HTML</label>
              <div className="w-full h-1 bg-gray-200 mt-1">
                <div
                  className="h-1 bg-secondary"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            {/* Skill bar for CSS */}
            <div>
              <label className="text-white text-sm font-medium">CSS</label>
              <div className="w-full h-1 bg-gray-200 mt-1">
                <div
                  className="h-1 bg-secondary"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            {/* Skill bar for JavaScript */}
            <div>
              <label className="text-white text-sm font-medium">
                JavaScript
              </label>
              <div className="w-full h-1 bg-gray-200 mt-1">
                <div
                  className="h-1 bg-secondary"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            {/* Skill bar for React */}
            <div>
              <label className="text-white text-sm font-medium">React</label>
              <div className="w-full h-1 bg-gray-200 mt-1">
                <div
                  className="h-1 bg-secondary"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            {/* Skill bar for Next.js */}
            <div>
              <label className="text-white text-sm font-medium">Next.js</label>
              <div className="w-full h-1 bg-gray-200 mt-1">
                <div
                  className="h-1 bg-secondary"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[1px] bg-text m-auto"></div>

        {/* Language circles */}
        <div className="px-5">
          <div className="flex gap-8 justify-center">
            {/* English Circle */}
            <div className="flex flex-col items-center">
              <svg className="w-20 h-20">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  className="stroke-gray-200 fill-none stroke-[4]"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  className="stroke-secondary fill-none stroke-[4] stroke-dasharray-[226] stroke-dashoffset-[22.6]"
                  style={{
                    transformOrigin: "center",
                    transform: "rotate(-90deg)",
                  }}
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-white font-bold text-sm"
                >
                  90%
                </text>
              </svg>
              <p className="text-white mt-3 font-medium text-sm">English</p>
            </div>

            {/* Arabic Circle */}
            <div className="flex flex-col items-center">
              <svg className="w-20 h-20">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  className="stroke-gray-200 fill-none stroke-[4]"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  className="stroke-secondary fill-none stroke-[4] stroke-dasharray-[226] stroke-dashoffset-[0]"
                  style={{
                    transformOrigin: "center",
                    transform: "rotate(-90deg)",
                  }}
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-white font-bold text-sm"
                >
                  100%
                </text>
              </svg>
              <p className="text-white mt-3 font-medium text-sm">Arabic</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-light py-5 flex justify-center gap-6 absolute bottom-0 start-0 end-0">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text hover:text-white duration-100 transition-all text-2xl"
        >
          <Facebook size={18} />
        </a>
        {/* Twitter */}
        <a
          href="https://www.twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text hover:text-white duration-100 transition-all text-md"
        >
          <Twitter size={18} />
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text hover:text-white duration-100 transition-all text-2xl"
        >
          <Linkedin size={18} />

          {/* LinkedIn icon here */}
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text hover:text-white duration-100 transition-all text-2xl"
        >
          {/* GitHub icon here */}
          <Github size={18}/>
        </a>
      </div>
    </div>
  );
}