import { useEffect, useState } from "react";
import { Clock, Phone } from "lucide-react";

// EXPIRY CONFIG
const EXPIRY_DATE = new Date("2026-05-31T23:59:59");
const OFFER_PRICE = "€300";
const WEBMAKER_PHONE_DISPLAY = "+357 99 960 847";
const WEBMAKER_PHONE_TEL = "+35799960847";
const WEBMAKER_EMAIL = "info@webmakercy.com";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

const calcTimeLeft = (): TimeLeft => {
  const diff = EXPIRY_DATE.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
};

/**
 * ExpiryBanner — Top-of-page urgency banner with countdown.
 * NOT sticky — sits at the top of the page and scrolls away naturally,
 * so the Header remains usable when scrolling.
 */
export const ExpiryBanner = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (timeLeft.expired) {
    return (
      <div className="relative z-[60] bg-red-700 text-white py-3 px-4 text-center text-sm sm:text-base">
        <span className="font-medium">⛔ This demo has expired.</span>{" "}
        <a
          href={`mailto:${WEBMAKER_EMAIL}`}
          className="underline hover:no-underline font-semibold"
        >
          Contact WebMaker
        </a>{" "}
        to get your {OFFER_PRICE} website.
      </div>
    );
  }

  return (
    <div
      className="relative z-[60] py-2.5 px-3 sm:px-5 text-center text-xs sm:text-sm font-medium"
      style={{
        background: "linear-gradient(90deg, #c47c5a 0%, #d4a574 100%)",
        color: "#fff8ee",
      }}
    >
      <div className="container-tight flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <span className="flex items-center gap-2">
          <Clock className="h-4 w-4 inline" />
          <span>
            <strong>Demo expires in:</strong>{" "}
            <span className="font-mono tabular-nums">
              {timeLeft.days}d {String(timeLeft.hours).padStart(2, "0")}h{" "}
              {String(timeLeft.minutes).padStart(2, "0")}m{" "}
              {String(timeLeft.seconds).padStart(2, "0")}s
            </span>
          </span>
        </span>
        <span className="hidden sm:inline opacity-60">·</span>
        <span>
          Order yours at <strong>{OFFER_PRICE}</strong> before May 31
        </span>
        <a
          href={`tel:${WEBMAKER_PHONE_TEL}`}
          className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors font-semibold"
        >
          <Phone className="h-3.5 w-3.5" /> WebMaker {WEBMAKER_PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
};
