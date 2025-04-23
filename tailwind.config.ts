import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				standardOps: {
					purple: '#9b87f5', // Keeping original color values for now
					'purple-dark': '#7E69AB',
					'purple-light': '#D6BCFA',
					'dark-bg': '#0F0F11',
					'grid-line': '#1A1F2C',
					'neutral-gray': '#8E9196',
					'soft-gray': '#F1F0FB',
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Satoshi', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.8', transform: 'scale(1.05)' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'grid-line-fade': {
					'0%': { opacity: '0.3' },
					'50%': { opacity: '0.5' },
					'100%': { opacity: '0.3' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
        'marquee': { 
          'from': { transform: 'translateX(0)' },
          // Translate by half the container width (relative to parent?)
          'to': { transform: 'translateX(-50%)' }, 
        },
        'meteor-effect': { // Added meteor keyframes
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 15s ease infinite',
				'grid-line-fade': 'grid-line-fade 8s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 30s linear infinite',
        'marquee': 'marquee var(--duration) linear infinite', // Added marquee animation utility
        'meteor-effect': 'meteor-effect 5s linear infinite', // Added meteor animation utility
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-gradient': 'linear-gradient(90deg, rgba(155,135,245,0.15) 0%, rgba(214,188,250,0.15) 50%, rgba(255,126,95,0.15) 100%)',
				'button-gradient': 'linear-gradient(90deg, #9b87f5 0%, #FF7E5F 100%)',
				'orb-gradient': 'linear-gradient(90deg, #9b87f5 0%, #D6BCFA 50%, #FF7E5F 100%)',
				'grid-lines': 'linear-gradient(to right, #1A1F2C 1px, transparent 1px), linear-gradient(to bottom, #1A1F2C 1px, transparent 1px)',
			},
			boxShadow: {
				'glow-purple': '0 0 40px 5px rgba(155, 135, 245, 0.4)',
				'glow-orange': '0 0 40px 5px rgba(255, 126, 95, 0.4)',
				'glow-mix': '0 0 40px 5px rgba(155, 135, 245, 0.3), 0 0 40px 5px rgba(255, 126, 95, 0.3)',
				'button': '0 10px 25px -5px rgba(155, 135, 245, 0.3)',
			},
		}
	},
  // @ts-ignore - Ignoring require error for Tailwind plugin
	plugins: [require("tailwindcss-animate")], 
} satisfies Config;
