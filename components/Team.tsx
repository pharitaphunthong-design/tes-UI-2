'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import teamData from "@/data/Team.json";
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  btnIcon: string;
  description: string;
}
interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
  return (
    <div
      className="bg-white border border-black rounded-[45px] p-[35px] shadow-[0_5px_0_0_#191A23] flex flex-col justify-between relative transition-transform hover:-translate-y-1"
    >
      <div>
        <div className="flex items-end justify-between border-b border-black pb-7 mb-7 relative">
          <div className="flex items-end gap-5">
            <div className="relative w-[100px] h-[100px] flex-shrink-0">
              <Image
                src={member.avatar}
                alt={member.name}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-black leading-tight">
                {member.name}
              </h3>
              <p className="text-base text-black mt-1 font-normal">
                {member.role}
              </p>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-[34px] h-[34px] flex items-center justify-center">
            <Image
              src={member.btnIcon}
              alt="icon"
              width={34}
              height={34}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <p className="text-base text-black font-normal leading-relaxed">
          {member.description}
        </p>
      </div>
    </div>
  );
}

export default function Team() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    setMembers(teamData as TeamMember[]);
  }, []);

  const displayedMembers = showAll ? members : members.slice(0, 6);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10 mb-10 sm:mb-20">
        <h2 className="bg-[#B9FF66] text-black text-3xl sm:text-4xl font-bold px-2 py-0.5 rounded-md">
          Team
        </h2>
        <p className="text-base sm:text-lg text-black max-w-xl">
          Meet the skilled and experienced team behind our <br></br>successful digital marketing strategies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>

      <div className="flex justify-end mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full sm:w-auto bg-[#191A23] hover:bg-black text-white font-normal text-lg px-9 py-5 rounded-[14px] transition-colors shadow-md"
        >
          {showAll ? "Show less" : "See all team"}
        </button>
      </div>
    </section>
  );
}