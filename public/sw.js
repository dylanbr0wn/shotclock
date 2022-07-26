if (!self.define) {
	let e,
		s = {};
	const c = (c, n) => (
		(c = new URL(c + ".js", n).href),
		s[c] ||
			new Promise((s) => {
				if ("document" in self) {
					const e = document.createElement("script");
					(e.src = c), (e.onload = s), document.head.appendChild(e);
				} else (e = c), importScripts(c), s();
			}).then(() => {
				let e = s[c];
				if (!e) throw new Error(`Module ${c} didn’t register its module`);
				return e;
			})
	);
	self.define = (n, a) => {
		const i =
			e ||
			("document" in self ? document.currentScript.src : "") ||
			location.href;
		if (s[i]) return;
		let t = {};
		const r = (e) => c(e, i),
			o = { module: { uri: i }, exports: t, require: r };
		s[i] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (a(...e), t));
	};
}
define(["./workbox-df677636"], function (e) {
	"use strict";
	importScripts(),
		self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{
					url: "/_next/static/chunks/180-21ee10d6833bf264.js",
					revision: "21ee10d6833bf264",
				},
				{
					url: "/_next/static/chunks/263-2c3c6a918743b86f.js",
					revision: "2c3c6a918743b86f",
				},
				{
					url: "/_next/static/chunks/291.294d7127f13c31c9.js",
					revision: "294d7127f13c31c9",
				},
				{
					url: "/_next/static/chunks/294.fa79943d70c645e0.js",
					revision: "fa79943d70c645e0",
				},
				{
					url: "/_next/static/chunks/509.0c74ff0a1e4eb7a6.js",
					revision: "0c74ff0a1e4eb7a6",
				},
				{
					url: "/_next/static/chunks/513-684df2c8226e4a8d.js",
					revision: "684df2c8226e4a8d",
				},
				{
					url: "/_next/static/chunks/609.bbca0261e40c0c42.js",
					revision: "bbca0261e40c0c42",
				},
				{
					url: "/_next/static/chunks/646.c3024c78a4a467de.js",
					revision: "c3024c78a4a467de",
				},
				{
					url: "/_next/static/chunks/735-2c9190cbf661cc7e.js",
					revision: "2c9190cbf661cc7e",
				},
				{
					url: "/_next/static/chunks/737.efdbc8f3a83cbf44.js",
					revision: "efdbc8f3a83cbf44",
				},
				{
					url: "/_next/static/chunks/framework-e75f20a0d9e1f5eb.js",
					revision: "e75f20a0d9e1f5eb",
				},
				{
					url: "/_next/static/chunks/main-8070f567949e6d88.js",
					revision: "8070f567949e6d88",
				},
				{
					url: "/_next/static/chunks/pages/_app-defa72ea90eb4277.js",
					revision: "defa72ea90eb4277",
				},
				{
					url: "/_next/static/chunks/pages/_error-2721b0a39c5740ea.js",
					revision: "2721b0a39c5740ea",
				},
				{
					url: "/_next/static/chunks/pages/about-d65d8d4601ddcf5f.js",
					revision: "d65d8d4601ddcf5f",
				},
				{
					url: "/_next/static/chunks/pages/brews-2f9e13dbfa349860.js",
					revision: "2f9e13dbfa349860",
				},
				{
					url: "/_next/static/chunks/pages/index-66f7abd6afa4ecdc.js",
					revision: "66f7abd6afa4ecdc",
				},
				{
					url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
					revision: "99442aec5788bccac9b2f0ead2afdd6b",
				},
				{
					url: "/_next/static/chunks/webpack-8c8c4903bf77d2de.js",
					revision: "8c8c4903bf77d2de",
				},
				{
					url: "/_next/static/css/9528b638b4123e97.css",
					revision: "9528b638b4123e97",
				},
				{
					url: "/_next/static/css/beb7e7855c0ccdb7.css",
					revision: "beb7e7855c0ccdb7",
				},
				{
					url: "/_next/static/css/c708187e273e3e56.css",
					revision: "c708187e273e3e56",
				},
				{
					url: "/_next/static/xuWbMmVs7SXh0vitFqVmg/_buildManifest.js",
					revision: "9afe46f5f281395d9d776c08df34e281",
				},
				{
					url: "/_next/static/xuWbMmVs7SXh0vitFqVmg/_middlewareManifest.js",
					revision: "fb2823d66b3e778e04a3f681d0d2fb19",
				},
				{
					url: "/_next/static/xuWbMmVs7SXh0vitFqVmg/_ssgManifest.js",
					revision: "b6652df95db52feb4daf4eca35380933",
				},
				{
					url: "/android-chrome-192x192.png",
					revision: "f3eed7cc4957b51e3d9ea0a8e17707c5",
				},
				{
					url: "/android-chrome-512x512.png",
					revision: "9efc9450afac372e74ff73e678ba8ff1",
				},
				{
					url: "/apple-touch-icon.png",
					revision: "cf9c66c57353047d8f2d6c3d5aa8f107",
				},
				{ url: "/chime.wav", revision: "3a60f09f200a7071c35fd202743c0d6f" },
				{ url: "/drip.svg", revision: "f68d3f26ee2b37ce53162bae2bc22359" },
				{
					url: "/favicon-16x16.png",
					revision: "3b32b85f2007cc36c02935a3f531d42c",
				},
				{
					url: "/favicon-32x32.png",
					revision: "16e14597bf4da85c66799e37e3f86872",
				},
				{ url: "/favicon.ico", revision: "5cd6b7206c01d0307de92e2dab0893f8" },
				{
					url: "/site.webmanifest",
					revision: "053100cb84a50d2ae7f5492f7dd7f25e",
				},
			],
			{ ignoreURLParametersMatching: [] }
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			"/",
			new e.NetworkFirst({
				cacheName: "start-url",
				plugins: [
					{
						cacheWillUpdate: async ({
							request: e,
							response: s,
							event: c,
							state: n,
						}) =>
							s && "opaqueredirect" === s.type
								? new Response(s.body, {
										status: 200,
										statusText: "OK",
										headers: s.headers,
								  })
								: s,
					},
				],
			}),
			"GET"
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: "google-fonts-webfonts",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: "google-fonts-stylesheets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-font-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-image-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: "next-image",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:mp3|wav|ogg)$/i,
			new e.CacheFirst({
				cacheName: "static-audio-assets",
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:mp4)$/i,
			new e.CacheFirst({
				cacheName: "static-video-assets",
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-js-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-style-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: "next-data",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: "static-data-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET"
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				const s = e.pathname;
				return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
			},
			new e.NetworkFirst({
				cacheName: "apis",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
				],
			}),
			"GET"
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				return !e.pathname.startsWith("/api/");
			},
			new e.NetworkFirst({
				cacheName: "others",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			"GET"
		),
		e.registerRoute(
			({ url: e }) => !(self.origin === e.origin),
			new e.NetworkFirst({
				cacheName: "cross-origin",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
				],
			}),
			"GET"
		);
});
