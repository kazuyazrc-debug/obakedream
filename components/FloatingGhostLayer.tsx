import Image from "next/image";

const floatingGhosts = [
  {
    className: "floating-ghost floating-ghost--a",
    src: "/assets/ghost/ghost_up_left_96.png",
  },
  {
    className: "floating-ghost floating-ghost--b",
    src: "/assets/ghost/ghost_right_96.png",
  },
  {
    className: "floating-ghost floating-ghost--c",
    src: "/assets/ghost/ghost_down_right_96.png",
  },
] as const;

export function FloatingGhostLayer() {
  return (
    <div className="floating-ghost-layer" aria-hidden="true">
      {floatingGhosts.map((ghost) => (
        <span className={ghost.className} key={ghost.src}>
          <Image
            className="floating-ghost__image"
            src={ghost.src}
            alt=""
            width={96}
            height={96}
            draggable={false}
            unoptimized
          />
        </span>
      ))}
    </div>
  );
}
