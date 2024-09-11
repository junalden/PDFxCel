import React from "react";

export const AboutCard = () => {
  return (
    <div className="about-page p-6 py-20">
      <h1 className="text-3xl font-bold mb-4">About Our Project</h1>
      <p className="mb-6">
        This project began as a school assignment at KodeGo but quickly evolved
        into a real-world solution for a consultancy gig. The consultancy work
        involved the tedious task of manually encoding data from PDFs—a process
        that was inefficient and prone to human error. By combining academic
        objectives with business needs, we developed an automated system that
        transformed a challenge into an opportunity for improvement.
      </p>
      <p className="mb-6">
        Central to this project is the use of AI-powered technologies to address
        inefficiencies in traditional business workflows. Manual data entry is
        slow, repetitive, and often inconsistent, making it a perfect candidate
        for automation. By leveraging Artificial Intelligence, we’ve built a
        system that not only automates data extraction but also intelligently
        organizes and cleans the data to meet business requirements. This has
        significantly reduced errors, sped up processes, and allowed businesses
        to focus on more important tasks rather than manual data entry.
      </p>
    </div>
  );
};
