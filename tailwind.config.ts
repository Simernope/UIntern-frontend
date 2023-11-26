import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            screens: {
                'xs': '480px',
                'sm': '576px',
                'md': '768px',
                'lg': '992px',
                'xl': '1200px',
                'xxl': '1600px',
            },
            colors: {
                'primary-1': '#E6F7FF',
                'primary-2': '#BAE7FF',
                'primary-3': '#91D5FF',
                'primary-4': '#69C0FF',
                'primary-5': '#40A9FF',
                'primary-6': '#1890FF',
                'primary-7': '#096DD9',
                'primary-8': '#0050B3',
                'primary-9': '#003A8C',
                'primary-10': '#002766',
                'neutral-1': '#FFFFFF',
                'neutral-2': '#FAFAFA',
                'neutral-3': '#F5F5F5',
                'neutral-4': '#F0F0F0',
                'neutral-5': '#D9D9D9',
                'neutral-6': '#BFBFBF',
                'neutral-7': '#8C8C8C',
                'neutral-8': '#595959',
                'neutral-9': '#434343',
                'neutral-10': '#262626',
                'neutral-11': '#1F1F1F',
                'neutral-12': '#141414',
                'neutral-13': '#000000',
            }
        },
    },
    corePlugins: {
        preflight: false
    },
    plugins: [],
}
export default config
