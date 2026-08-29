import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Annoture — Visual QA Bug Capture Tool';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0F0F0F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          overflow: 'hidden',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Purple glow */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '500px',
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 18,
            background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 32,
            boxShadow: '0 0 40px rgba(124,58,237,0.4)',
          }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
          <svg
            width="38"
            height="38"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: 'white',
            letterSpacing: '-1.5px',
            marginBottom: 16,
            lineHeight: 1,
          }}
        >
          Annoture
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 400,
            letterSpacing: '-0.3px',
            marginBottom: 48,
            textAlign: 'center',
            maxWidth: 600,
            lineHeight: 1.4,
          }}
        >
          Visual QA Bug Capture for Teams
        </div>

        {/* Feature pills */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 700 }}>
          {['One-click capture', 'Auto screenshot', 'GitHub & Jira sync', 'Kanban board'].map((label) => (
            <div
              key={label}
              style={{
                padding: '8px 18px',
                borderRadius: 100,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: 'rgba(255,255,255,0.55)',
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: '-0.1px',
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            color: 'rgba(255,255,255,0.20)',
            fontSize: 16,
            letterSpacing: '0.5px',
          }}
        >
          annoture.com
        </div>
      </div>
    ),
    { ...size }
  );
}
