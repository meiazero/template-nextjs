/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,

	devIndicators: {
		buildActivity: true,
		buildActivityPosition: "bottom-right"
	},

	logging: {
		fetches: {
			fullUrl: true
		}
	},

	optimizeFonts: true,

	typescript: {
		ignoreBuildErrors: true
	},

	eslint: {
		ignoreDuringBuilds: true
	}
}

export default nextConfig
