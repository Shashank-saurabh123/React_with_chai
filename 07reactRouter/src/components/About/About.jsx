import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Passionate React developers are the heartbeat of the web
              development community, infusing their projects with creativity,
              innovation, and an unwavering commitment to excellence. They
              immerse themselves in the intricacies of React, constantly seeking
              out new techniques and best practices to elevate their craft.
              Their dedication extends beyond the confines of their own
              projects, as they actively contribute to the broader React
              ecosystem through open-source contributions, knowledge-sharing in
              forums, and participation in local meetups and conferences. This
              vibrant community of enthusiasts fuels a cycle of continuous
              improvement, where ideas are exchanged, challenges are met
              head-on, and the boundaries of what's possible in web development
              are constantly pushed.
            </p>
            <p className="mt-4 text-gray-600">
              Moreover, these passionate developers thrive on the dynamic nature
              of React, leveraging its flexibility and scalability to tackle
              projects of all sizes and complexities. Whether they're building
              responsive user interfaces for mobile applications or architecting
              data-driven web applications for enterprise clients, React
              developers approach each challenge with a blend of technical
              expertise and creative ingenuity. Their passion for React is
              infectious, inspiring others to join the ranks of dedicated
              developers who are shaping the future of web development one
              component at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}