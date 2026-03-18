import type { Step } from "./data";

/** Generates the JSX code string for a given step, showing only non-empty classNames */
export function generateCode(step: Step): string {
  const cls = (val: string) => (val ? ` className="${val}"` : "");
  const avatarCls = step.avatar || "w-16 h-16 bg-gray-400";

  const headerOpen = step.header ? `  <div className="${step.header}">` : "  <div>";
  const nameTag = step.name ? `      <h3 className="${step.name}">` : "      <h3>";
  const titleTag = step.title ? `      <p className="${step.title}">` : "      <p>";
  const locTag = step.location ? `      <p className="${step.location}">` : "      <p>";
  const bioTag = step.bio ? `  <p className="${step.bio}">` : "  <p>";
  const skillContainerOpen = step.skillContainer
    ? `  <div className="${step.skillContainer}">`
    : "  <div>";
  const skillTag = step.skill ? `      <span className="${step.skill}">` : "      <span>";
  const btnRowOpen = step.buttonRow ? `  <div className="${step.buttonRow}">` : "  <div>";
  const primaryTag = step.primaryBtn
    ? `    <button className="${step.primaryBtn}">`
    : "    <button>";
  const secondaryTag = step.secondaryBtn
    ? `    <button className="${step.secondaryBtn}">`
    : "    <button>";

  return `<div${cls(step.card)}>
${headerOpen}
    <div className="... ${avatarCls}">WD</div>
    <div>
${nameTag}Wilson Desouza</h3>
${titleTag}Senior Engineer</p>
${locTag}Seattle, WA</p>
    </div>
  </div>

${bioTag}
    Passionate about building tools...
  </p>

${skillContainerOpen}
    {skills.map((skill) => (
${skillTag}
        {skill}
      </span>
    ))}
  </div>

${btnRowOpen}
${primaryTag}Edit Profile</button>
${secondaryTag}Share</button>
  </div>
</div>`;
}
