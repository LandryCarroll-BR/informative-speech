/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: 'images.pexels.com', protocol: 'https' },
			{ hostname: 'images.unsplash.com', protocol: 'https' },
			{ hostname: 'plus.unsplash.com', protocol: 'https' },
			{ hostname: 'cdn.britannica.com', protocol: 'https' },
		],
	},
}

export default nextConfig
