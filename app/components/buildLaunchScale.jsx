'use client';

import { useEffect, useRef } from "react";
import "./buildLaunchScale.css";

export default function BuildLaunchScale() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cube = root.querySelector("#cube");
    const bulb = root.querySelector("#bulb");

    const rocketWrap = root.querySelector("#rocketWrap");
    const rocketInner = root.querySelector("#rocketInner");
    const flame = root.querySelector("#flamePath");

    const camera = root.querySelector("#camera");
    const stars = root.querySelector("#stars");

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const anim = (el, kf, opts) => el.animate(kf, opts);

    function setBase(el, { opacity = 0, scale = 1, rotate = 0, y = 0 } = {}) {
      el.style.opacity = opacity;
      el.style.transform = `translateY(${y}px) scale(${scale}) rotate(${rotate}deg)`;
    }

    // Inner-only rumble (does NOT fight launch transforms)
    const rumbleOnce = () =>
      anim(
        rocketInner,
        [
          { transform: "translate(0px, 0px) rotate(0deg)" },
          { transform: "translate(-2.3px, 2.3px) rotate(-0.3deg)" },
          { transform: "translate(2.3px, -2.3px) rotate(0.3deg)" },
          { transform: "translate(-2.3px, 1.7px) rotate(-0.2deg)" },
          { transform: "translate(2.3px, 2.3px) rotate(0.25deg)" },
          { transform: "translate(0px, -2.3px) rotate(-0.15deg)" },
          { transform: "translate(0px, 0px) rotate(0deg)" },
        ],
        {
          duration: 90,
          easing: "linear",
          fill: "forwards",
        }
      );

    let cancelled = false;

    async function run() {
      while (!cancelled) {
        // reset
        camera.style.transform = "translateY(0px)";
        stars.style.transform = "translateY(0px)";

        setBase(cube, { opacity: 1, scale: 0.92, rotate: 0, y: 6 });
        setBase(bulb, { opacity: 0, scale: 0.80, rotate: 0, y: 12 });

        // rocket smaller than cube and stable baseline
        setBase(rocketWrap, { opacity: 0, scale: 0.74, rotate: 0, y: 24 });
        rocketInner.style.transform = "translate(0px, 0px)";
        flame.style.opacity = 0;

        // CUBE: pop-in
        await anim(
          cube,
          [
            { transform: "translateY(10px) scale(0.86)", opacity: 0 },
            { transform: "translateY(6px)  scale(0.94)", opacity: 1, offset: 0.7 },
            { transform: "translateY(4px)  scale(0.98)", opacity: 1 },
          ],
          { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
        ).finished;

        // CUBE: breathe
        await anim(
          cube,
          [
            { transform: "translateY(4px) scale(0.98)" },
            { transform: "translateY(0px) scale(1.02)" },
            { transform: "translateY(4px) scale(0.98)" },
          ],
          { duration: 900, easing: "ease-in-out", fill: "forwards" }
        ).finished;

        // CUBE -> BULB
        const cubeOut = anim(
          cube,
          [
            { opacity: 1, transform: "translateY(4px) scale(0.98)" },
            { opacity: 0, transform: "translateY(-8px) scale(0.86)" },
          ],
          { duration: 520, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
        );

        const bulbIn = anim(
          bulb,
          [
            { opacity: 0, transform: "translateY(18px) scale(0.76)" },
            { opacity: 1, transform: "translateY(4px)  scale(0.82)" },
            { opacity: 1, transform: "translateY(6px)  scale(0.80)" },
          ],
          { duration: 520, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
        );

        await Promise.all([cubeOut.finished, bulbIn.finished]);

        // BULB: glow pulse
        await anim(
          bulb,
          [
            { filter: "drop-shadow(0 0 10px rgba(255,255,255,.20))" },
            { filter: "drop-shadow(0 0 22px rgba(255,255,255,.42))" },
            { filter: "drop-shadow(0 0 12px rgba(255,255,255,.26))" },
          ],
          { duration: 650, easing: "ease-in-out", fill: "forwards" }
        ).finished;

        // BULB -> ROCKET (slower crossfade)
        const bulbOut = anim(
          bulb,
          [
            { opacity: 1, transform: "translateY(6px) scale(0.80)" },
            { opacity: 0, transform: "translateY(20px) scale(0.72)" },
          ],
          { duration: 750, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
        );

        const rocketIn = anim(
          rocketWrap,
          [
            { opacity: 0, transform: "translateY(28px) scale(0.68)" },
            { opacity: 1, transform: "translateY(10px) scale(0.76)" },
            { opacity: 1, transform: "translateY(12px) scale(0.74)" },
          ],
          { duration: 750, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
        );

        await Promise.all([bulbOut.finished, rocketIn.finished]);

        // flame on
        await anim(
          flame,
          [
            { opacity: 0, transform: "scaleY(0.6)" },
            { opacity: 1, transform: "scaleY(1.0)" },
          ],
          { duration: 220, easing: "ease-out", fill: "forwards" }
        ).finished;

        // flame flicker
        const flicker = () =>
          anim(
            flame,
            [
              { transform: "scaleY(0.9) scaleX(1.0)" },
              { transform: "scaleY(1.1) scaleX(0.96)" },
              { transform: "scaleY(0.95) scaleX(1.03)" },
            ],
            { duration: 320, easing: "ease-in-out", fill: "forwards" }
          );

        flicker();
        const flickerTimer = setInterval(() => flicker(), 260);

        // ✅ rumble on pad only, then straight takeoff
        const rumbleTimer = setInterval(() => rumbleOnce(), 90);
        await sleep(520);
        clearInterval(rumbleTimer);
        rocketInner.style.transform = "translate(0px, 0px)";

        // ROCKET LAUNCH (slower + straight)
        const rocketUp = anim(
          rocketWrap,
          [
            { transform: "translateY(12px) scale(0.74)", offset: 0 },
            { transform: "translateY(-40px) scale(0.72)", offset: 0.25 },
            { transform: "translateY(-240px) scale(0.66)", offset: 0.65 },
            { transform: "translateY(-520px) scale(0.62)", offset: 1 },
          ],
          { duration: 2300, easing: "cubic-bezier(.15,.9,.2,1)", fill: "forwards" }
        );

        const cameraSlight = anim(
          camera,
          [{ transform: "translateY(0px)" }, { transform: "translateY(70px)" }],
          { duration: 2300, easing: "cubic-bezier(.15,.9,.2,1)", fill: "forwards" }
        );

        const starsDrift = anim(
          stars,
          [{ transform: "translateY(0px)" }, { transform: "translateY(80px)" }],
          { duration: 2300, easing: "linear", fill: "forwards" }
        );

        await Promise.all([rocketUp.finished, cameraSlight.finished, starsDrift.finished]);
        clearInterval(flickerTimer);

        // fade rocket out
        await anim(rocketWrap, [{ opacity: 1 }, { opacity: 0 }], {
          duration: 320,
          easing: "ease-out",
          fill: "forwards",
        }).finished;

        // PAN DOWN to loop
        await anim(camera, [{ transform: "translateY(70px)" }, { transform: "translateY(0px)" }], {
          duration: 1100,
          easing: "cubic-bezier(.2,.8,.2,1)",
          fill: "forwards",
        }).finished;

        await sleep(200);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div ref={rootRef} className="stage">
      <div className="viewport">
        <div className="camera" id="camera">
          <div className="stars" id="stars"></div>
          <div className="horizon"></div>

          <div className="anchor">
            {/* CUBE (BUILD) */}
            <svg className="icon" id="cube" viewBox="0 0 200 200">
              <polygon className="fill" points="60,70 100,45 140,70 100,95" />
              <polygon className="fill" points="60,70 60,120 100,145 100,95" />
              <polygon className="fill" points="140,70 140,120 100,145 100,95" />
              <polyline className="st" points="60,70 100,45 140,70 100,95 60,70" />
              <polyline className="st" points="60,70 60,120 100,145 140,120 140,70" />
              <polyline className="st" points="100,95 100,145" />
            </svg>

            {/* LIGHT BULB (IDEA) */}
            <svg className="icon" id="bulb" viewBox="0 0 200 230">
              <path
                className="st"
                d="
                  M100 35
                  C68 35 45 60 45 90
                  C45 112 58 126 72 140
                  C82 150 86 160 86 175
                  H114
                  C114 160 118 150 128 140
                  C142 126 155 112 155 90
                  C155 60 132 35 100 35
                  Z
                "
              />
              <path className="st" d="M78 92 C88 82 112 82 122 92" opacity="0.6" />
              <path className="st" d="M86 175 H114" />
              <path className="st" d="M90 190 H110" />
              <path className="st" d="M94 205 H106" opacity="0.6" />
            </svg>

            {/* ROCKET (SCALE) — wrapper controls opacity/scale/launch, inner svg rumbles */}
            <div className="iconWrap" id="rocketWrap" aria-hidden="true">
              <svg className="rocketSvg" id="rocketInner" viewBox="0 0 200 200">
                <path
                  className="st"
                  d="
                    M100 25
                    C130 50 140 85 140 120
                    C140 150 120 172 100 190
                    C80 172 60 150 60 120
                    C60 85 70 50 100 25
                    Z
                  "
                />
                <circle className="st" cx="100" cy="95" r="14" />
                <path
                  className="st"
                  d="M60 120 C45 130 38 150 38 170
                     C58 164 72 150 80 138"
                  opacity="0.9"
                />
                <path
                  className="st"
                  d="M140 120 C155 130 162 150 162 170
                     C142 164 128 150 120 138"
                  opacity="0.9"
                />
                <path className="st" d="M88 178 C94 186 106 186 112 178" />
                <path
                  className="st flame"
                  id="flamePath"
                  d="
                    M100 180
                    C82 205 88 230 100 250
                    C112 230 118 205 100 180
                    Z
                  "
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
