import { profile } from "./data";
import type { Step } from "./data";

function AvatarPlaceholder({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center text-white font-bold text-lg ${className}`}>
      WD
    </div>
  );
}

interface ProfileCardProps {
  step: Step;
}

export function ProfileCard({ step }: ProfileCardProps) {
  return (
    <div className={step.card || undefined}>
      {/* Header: avatar + info */}
      <div className={step.header || undefined}>
        <AvatarPlaceholder className={step.avatar || "w-16 h-16 bg-gray-400"} />
        <div
          className={
            step.header.includes("items-center") && !step.header.includes("md:items-start")
              ? "text-center"
              : ""
          }
        >
          <h3 className={step.name || undefined}>{profile.name}</h3>
          <p className={step.title || undefined}>{profile.title}</p>
          <p className={step.location || undefined}>{profile.location}</p>
        </div>
      </div>

      {/* Bio */}
      <p className={step.bio || undefined}>{profile.bio}</p>

      {/* Skills */}
      <div className={step.skillContainer || undefined}>
        {profile.skills.map((skill) => (
          <span key={skill} className={step.skill || undefined}>
            {skill}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className={step.buttonRow || undefined}>
        <button className={step.primaryBtn || undefined}>Edit Profile</button>
        <button className={step.secondaryBtn || undefined}>Share</button>
      </div>
    </div>
  );
}
