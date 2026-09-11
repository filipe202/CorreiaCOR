/**
 * Marca CorreiaCOR.
 *
 * O símbolo é um "C" em negativo sobre as quatro barras da quadricromia
 * (ciano, magenta, amarelo, preto) — a mesma sequência que sai de uma
 * máquina de impressão. Funciona a 16 px e a uma cor só.
 */

type MarkProps = {
  className?: string;
  /** Em monocromático o símbolo usa a cor do texto. Útil em faturas e carimbos. */
  mono?: boolean;
  title?: string;
};

export function LogoMark({ className = "h-9 w-9", mono = false, title }: MarkProps) {
  const bars = mono
    ? ["currentColor", "currentColor", "currentColor", "currentColor"]
    : ["#00aeef", "#ec008c", "#ffd200", "#0d1117"];
  const opacity = mono ? [0.45, 0.65, 0.85, 1] : [1, 1, 1, 1];

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <clipPath id="cc-tile">
          <rect x="0" y="0" width="64" height="64" rx="16" />
        </clipPath>
        {/* O "C" é recortado do mosaico, deixando ver o fundo da página */}
        <mask id="cc-letter">
          <rect x="0" y="0" width="64" height="64" fill="#fff" />
          <path
            d="M44.5 21.6a14.8 14.8 0 1 0 0 20.8"
            fill="none"
            stroke="#000"
            strokeWidth="9.5"
            strokeLinecap="round"
          />
        </mask>
      </defs>
      <g clipPath="url(#cc-tile)" mask="url(#cc-letter)">
        {bars.map((fill, i) => (
          <rect
            key={i}
            x={i * 16}
            y="0"
            width="16"
            height="64"
            fill={fill}
            opacity={opacity[i]}
          />
        ))}
      </g>
    </svg>
  );
}

type LogoProps = {
  className?: string;
  markClassName?: string;
  /** Esconde o texto, deixando só o símbolo. */
  markOnly?: boolean;
  mono?: boolean;
};

export function Logo({
  className = "",
  markClassName = "h-9 w-9",
  markOnly = false,
  mono = false,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} mono={mono} />
      {!markOnly && (
        <span className="text-[1.35rem] leading-none font-semibold tracking-tight text-strong">
          correia
          <span className={mono ? "" : "text-gradient-cor"}>COR</span>
        </span>
      )}
      <span className="sr-only">CorreiaCOR</span>
    </span>
  );
}
