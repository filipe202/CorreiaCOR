import type { CSSProperties } from "react";
import type { ProductShape } from "@/data/catalog";

/**
 * Ilustrações vetoriais dos produtos.
 *
 * O catálogo ainda não tem fotografia de estúdio, e uma ilustração desenhada
 * de propósito mostra melhor a cor escolhida no configurador do que uma foto
 * genérica: o desenho pinta-se com a cor real do produto em tempo real.
 * Quando houver fotografias, este componente pode passar a fallback.
 */

function luminance(hex: string) {
  const h = hex.replace("#", "");
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;
  const lin = (c: number) =>
    c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

type Props = {
  shape: ProductShape;
  color?: string;
  className?: string;
  /** Marca (data URL ou caminho) sobreposta na zona de impressão. */
  artwork?: string | null;
  /** Mostra o retângulo tracejado da zona de impressão. */
  showPrintArea?: boolean;
};

/** Zona de impressão por forma: [x, y, largura, altura] no viewBox 0 0 200 200. */
const PRINT_AREAS: Record<ProductShape, [number, number, number, number]> = {
  tshirt: [78, 74, 44, 40],
  polo: [78, 80, 44, 38],
  hoodie: [72, 82, 56, 42],
  cap: [80, 78, 40, 26],
  apron: [76, 74, 48, 40],
  mug: [66, 78, 46, 38],
  bottle: [80, 80, 40, 48],
  thermos: [80, 82, 40, 40],
  totebag: [72, 84, 56, 48],
  backpack: [76, 82, 48, 42],
  pen: [60, 92, 80, 16],
  notebook: [72, 74, 56, 44],
  folder: [72, 72, 56, 48],
  lanyard: [88, 60, 24, 70],
  usb: [72, 88, 56, 24],
  powerbank: [74, 76, 52, 48],
  mousepad: [58, 78, 84, 44],
  umbrella: [82, 92, 36, 26],
  keyring: [78, 88, 44, 40],
  towel: [64, 68, 72, 64],
  vest: [78, 78, 44, 34],
  badge: [70, 72, 60, 56],
};

export default function ProductVisual({
  shape,
  color = "#e8eaf0",
  className = "",
  artwork = null,
  showPrintArea = false,
}: Props) {
  const dark = luminance(color) < 0.42;
  const line = dark ? "rgba(255,255,255,0.32)" : "rgba(13,17,23,0.28)";
  const shade = dark ? "rgba(0,0,0,0.28)" : "rgba(13,17,23,0.10)";
  const area = PRINT_AREAS[shape];
  const clipId = `pa-${shape}`;

  const s: CSSProperties = { color: line };

  const body = (() => {
    switch (shape) {
      case "tshirt":
      case "polo":
        return (
          <>
            <path
              d="M70 40 58 48 42 60l12 20 14-8v68a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V72l14 8 12-20-16-12-12-8h-18a12 12 0 0 1-24 0H70Z"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {shape === "polo" && (
              <>
                <path
                  d="M88 40 100 58 112 40"
                  fill="none"
                  stroke={line}
                  strokeWidth="2.5"
                />
                <path d="M100 58v18" stroke={line} strokeWidth="2.5" />
                <circle cx="100" cy="64" r="1.8" fill={line} />
                <circle cx="100" cy="73" r="1.8" fill={line} />
              </>
            )}
            <path d="M54 80 68 72" stroke={shade} strokeWidth="2" fill="none" />
          </>
        );
      case "hoodie":
        return (
          <>
            <path
              d="M70 44 46 58 34 80l14 12 10-10v70a4 4 0 0 0 4 4h76a4 4 0 0 0 4-4V82l10 10 14-12-12-22-24-14H70Z"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M72 44c6 16 16 24 28 24s22-8 28-24"
              fill="none"
              stroke={line}
              strokeWidth="2.5"
            />
            <path
              d="M76 130h48v22H76z"
              fill="none"
              stroke={line}
              strokeWidth="2.5"
            />
            <path d="M88 58v12M112 58v12" stroke={line} strokeWidth="2.5" />
          </>
        );
      case "vest":
        return (
          <>
            <path
              d="M74 42 52 54v96a4 4 0 0 0 4 4h88a4 4 0 0 0 4-4V54l-22-12-26 18-26-18Z"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <rect x="52" y="104" width="96" height="10" fill="#d8dde5" opacity="0.9" />
            <rect x="52" y="124" width="96" height="10" fill="#d8dde5" opacity="0.9" />
            <path d="M100 60v94" stroke={line} strokeWidth="2.5" />
          </>
        );
      case "cap":
        return (
          <>
            <path
              d="M100 44c-26 0-44 18-44 42v18h88V86c0-24-18-42-44-42Z"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
            />
            <path
              d="M56 104h96c14 0 22 6 22 14 0 6-6 10-18 10H56v-24Z"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path d="M100 44v60" stroke={shade} strokeWidth="2" />
            <path d="M78 50c6 22 6 38 6 54M122 50c-6 22-6 38-6 54" stroke={shade} strokeWidth="2" fill="none" />
            <circle cx="100" cy="46" r="4" fill={line} />
          </>
        );
      case "apron":
        return (
          <>
            <path
              d="M84 34a16 16 0 0 0 32 0"
              fill="none"
              stroke={line}
              strokeWidth="2.5"
            />
            <path
              d="M84 40h32l10 10c8 8 12 18 12 30v66a6 6 0 0 1-6 6H68a6 6 0 0 1-6-6V80c0-12 4-22 12-30l10-10Z"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <rect
              x="72"
              y="118"
              width="56"
              height="26"
              rx="3"
              fill="none"
              stroke={line}
              strokeWidth="2.5"
            />
            <path d="M100 118v26" stroke={line} strokeWidth="2.5" />
            <path d="M62 86H44M138 86h18" stroke={line} strokeWidth="2.5" />
          </>
        );
      case "towel":
        return (
          <>
            <rect
              x="46"
              y="52"
              width="108"
              height="96"
              rx="6"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
            />
            <path
              d="M46 62h108M46 138h108"
              stroke={shade}
              strokeWidth="2.5"
            />
            <path d="M56 148v6M76 148v6M96 148v6M116 148v6M136 148v6" stroke={line} strokeWidth="2.5" />
          </>
        );
      case "mug":
        return (
          <>
            <path
              d="M56 62h58a4 4 0 0 1 4 4v72a10 10 0 0 1-10 10H62a10 10 0 0 1-10-10V66a4 4 0 0 1 4-4Z"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
            />
            <path
              d="M118 80h14a16 16 0 0 1 0 32h-14"
              fill="none"
              stroke={line}
              strokeWidth="2.5"
            />
            <ellipse cx="85" cy="64" rx="33" ry="7" fill={shade} />
          </>
        );
      case "bottle":
      case "thermos":
        return (
          <>
            <rect
              x="86"
              y="30"
              width="28"
              height="16"
              rx="4"
              fill={line}
              opacity="0.55"
            />
            <path
              d="M84 46h32c0 10 10 14 10 30v66a12 12 0 0 1-12 12H86a12 12 0 0 1-12-12V76c0-16 10-20 10-30Z"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {shape === "thermos" && (
              <path d="M74 128h52" stroke={line} strokeWidth="2.5" />
            )}
            <path d="M84 84v62" stroke={shade} strokeWidth="3" opacity="0.6" />
          </>
        );
      case "totebag":
        return (
          <>
            <path
              d="M76 66c0-16 10-26 24-26s24 10 24 26"
              fill="none"
              stroke={line}
              strokeWidth="4"
            />
            <path
              d="M58 64h84a4 4 0 0 1 4 4l6 84a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6l6-84a4 4 0 0 1 4-4Z"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
          </>
        );
      case "backpack":
        return (
          <>
            <path
              d="M62 56h76l10 92a8 8 0 0 1-8 9H60a8 8 0 0 1-8-9l10-92Z"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M62 56 84 34M138 56l-22-22"
              stroke={line}
              strokeWidth="2.5"
            />
            <path d="M60 148h80" stroke={shade} strokeWidth="2.5" />
          </>
        );
      case "pen":
        return (
          <>
            <path
              d="M34 92h112v16H34z"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
            />
            <path
              d="M146 92h14l12 8-12 8h-14z"
              fill={line}
              opacity="0.6"
            />
            <path d="M24 100l10-8v16l-10-8Z" fill={line} opacity="0.6" />
            <rect x="120" y="86" width="6" height="28" rx="2" fill={line} opacity="0.5" />
          </>
        );
      case "notebook":
      case "folder":
        return (
          <>
            <rect
              x="54"
              y="38"
              width="92"
              height="124"
              rx="6"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
            />
            <rect x="54" y="38" width="10" height="124" fill={shade} />
            {shape === "notebook" ? (
              <path d="M126 38v124" stroke={line} strokeWidth="4" />
            ) : (
              <path
                d="M100 38v40l-12-10-12 10V38"
                fill="none"
                stroke={line}
                strokeWidth="2.5"
              />
            )}
          </>
        );
      case "lanyard":
        return (
          <>
            <path
              d="M80 24c0 30 14 44 20 56M120 24c0 30-14 44-20 56"
              fill="none"
              stroke={color}
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              d="M80 24c0 30 14 44 20 56M120 24c0 30-14 44-20 56"
              fill="none"
              stroke={line}
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.5"
            />
            <rect x="94" y="80" width="12" height="14" rx="3" fill={line} opacity="0.6" />
            <rect
              x="70"
              y="94"
              width="60"
              height="76"
              rx="5"
              fill="#f2f4f8"
              stroke={line}
              strokeWidth="2.5"
            />
          </>
        );
      case "usb":
        return (
          <>
            <rect
              x="56"
              y="80"
              width="88"
              height="40"
              rx="8"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
            />
            <rect x="30" y="88" width="28" height="24" rx="3" fill={line} opacity="0.55" />
            <path d="M36 94h16M36 100h16" stroke="#f7f9fb" strokeWidth="2" />
          </>
        );
      case "powerbank":
        return (
          <>
            <rect
              x="62"
              y="46"
              width="76"
              height="108"
              rx="12"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
            />
            <rect x="90" y="148" width="20" height="6" rx="3" fill={line} opacity="0.6" />
            <g opacity="0.6">
              <rect x="76" y="136" width="8" height="4" rx="2" fill={line} />
              <rect x="88" y="136" width="8" height="4" rx="2" fill={line} />
              <rect x="100" y="136" width="8" height="4" rx="2" fill={line} />
              <rect x="112" y="136" width="8" height="4" rx="2" fill={line} />
            </g>
          </>
        );
      case "mousepad":
        return (
          <>
            <rect
              x="40"
              y="66"
              width="120"
              height="72"
              rx="10"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
            />
            <path d="M40 134h120" stroke={shade} strokeWidth="4" />
          </>
        );
      case "umbrella":
        return (
          <>
            <path
              d="M20 92c0-36 36-58 80-58s80 22 80 58c-12-10-22-10-32 0-10-10-22-10-32 0-8-10-24-10-32 0-10-10-20-10-32 0-8-10-24-10-32 0Z"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path d="M100 34v122" stroke={line} strokeWidth="3.5" />
            <path
              d="M100 156c0 10 16 10 16 0"
              fill="none"
              stroke={line}
              strokeWidth="3.5"
            />
          </>
        );
      case "keyring":
        return (
          <>
            <circle cx="100" cy="46" r="16" fill="none" stroke={line} strokeWidth="4" />
            <rect
              x="66"
              y="68"
              width="68"
              height="80"
              rx="12"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
            />
          </>
        );
      case "badge":
        return (
          <>
            <rect x="92" y="30" width="16" height="10" rx="3" fill={line} opacity="0.5" />
            <rect
              x="56"
              y="44"
              width="88"
              height="118"
              rx="8"
              fill={color}
              stroke={line}
              strokeWidth="2.5"
            />
            <rect x="90" y="34" width="20" height="8" rx="4" fill="none" stroke={line} strokeWidth="2.5" />
          </>
        );
      default:
        return (
          <rect
            x="50"
            y="50"
            width="100"
            height="100"
            rx="12"
            fill={color}
            stroke={line}
            strokeWidth="2.5"
          />
        );
    }
  })();

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={s}
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x={area[0]} y={area[1]} width={area[2]} height={area[3]} rx="2" />
        </clipPath>
      </defs>
      {body}
      {artwork ? (
        <image
          href={artwork}
          x={area[0]}
          y={area[1]}
          width={area[2]}
          height={area[3]}
          preserveAspectRatio="xMidYMid meet"
          clipPath={`url(#${clipId})`}
        />
      ) : null}
      {showPrintArea ? (
        <rect
          x={area[0]}
          y={area[1]}
          width={area[2]}
          height={area[3]}
          rx="2"
          fill="none"
          stroke={line}
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      ) : null}
    </svg>
  );
}
