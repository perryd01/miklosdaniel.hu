---
title: Simonyi Conference 2023
heroTitle: Simonyi Conference 2023
description: My experience designing and developing a website for the 20th Simonyi Conference using Figma and Next.js
date: '2024-5-4'
categories:
  - figma
  - next.js
  - react
published: true
important: true

links:
  github: https://github.com/simonyiszk/konf-web-2023
  website: https://2023.konferencia.simonyi.bme.hu
---

<script>
  import ColorPreviewSection from "$lib/components/content/ColorPreviewSection.svelte"
  import AnimatedColorGradient from "$lib/components/content/AnimatedColorGradient.svelte"
  import ImageGroup from "$lib/components/content/ImageGroup.svelte"

  const baseColors = [{
    name: "Cyan Process",
    hex: "#42B4E5"
  }, {
    name: "Bud Green",
    hex: "#77B16A"
  }, {
    name: "Cyber Yellow",
    hex: "#FFD73A"
  }]

  const gradient = ["#77B16A", "#42B4E5"]

  const figmaImages = [
    "/content/2023/konf-m-1.webp",
    "/content/2023/konf-m-2.webp",
  ]
  
</script>

In autumn 2022 I joined the team that would create the design of the next Simonyi Conference. Since it was the 20th anniversary of the conference, we knew we have to make something awesome.

<ColorPreviewSection colors={baseColors} />

For base colors we chose Cyan Process and Bud Green as these colors are mostly similar to the design of Simonyi. After a careful consideration we chose Cyber Yellow as an accent color that looked great, especially on web link hovers.

<ImageGroup images={figmaImages} description="Some of the initial versions of the landing page" />


Creating a responsive UI design for an event website is essential in today's digital world. It ensures seamless user experience across various devices, enhancing accessibility and engagement. With a responsive design, attendees can easily access event details and register, regardless of their device. It reflects a commitment to user-centricity and inclusivity, ultimately contributing to the event's success.

We chose Next.js (pages router), TailwindCSS and Contentful as a free CMS. Given the fact we already had experience with React, this was a good decision. We were also planning to use Astro, but ended up sticking to Next.js.

Next.js [App router stable version](https://nextjs.org/blog/next-13-4) was only released after the conference on May 4th 2023 so we didn't want to base this small website on a preview version of that.

<div style="width:100%;height:12px;border-radius:8px;overflow:hidden;margin: 64px 0">
  <AnimatedColorGradient start={gradient[0]} end={gradient[1]} />
</div>

During the project one of my favourite discory was that you can actually animate text colors using css gradients fairly easily. You just have to specify atleast 2 colors, set one or two flags here and there 🪄, you will end up having an awesome animated text.

You can see a quick snippet with TailwindCSS how you can do that.

<span class="animated-text">Simonyi Conference</span>

```js
// tailwind.config.js
module.exports = {
	theme: {
		extend: {
			animation: {
				text: "text 3s ease infinite",
			},
			keyframes: {
				text: {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
			},
			transitionTimingFunction: {
				DEFAULT: transitionTimingFunction.out,
			},
		},
	},
};
```

```jsx
// component.jsx
<h1 
  class="bg-gradient-to-r bg-clip-text 
    text-transparent from-blue to-green animate-text"
  >
    Your text
</h1>
```
<div style="width:100%;height:12px;border-radius:8px;overflow:hidden;margin: 64px 0">
  <AnimatedColorGradient start={gradient[0]} end={gradient[1]} />
</div>

<ImageGroup images={["/content/2023/konf-analytics.png"]} description="Statistics of website traffic 3 weeks before the event" />

Since Google Analytics is often blocked by several browser extensions, we chose to use [Umami](https://umami.is/) for tracking traffic on our website. Umami is a simple, fast, privacy-focused alternative to Google Analytics.

Our hard work and dedication have paid off, as we reached a total of 6.42k unique viewers and 27.7k overall page views on the website. These numbers exceeded our expectations.

<style>
  .animated-text {
    font-size: 64px;
    font-weight: bold;
    color: transparent; 
    background-clip: text; 
    background-image: linear-gradient(to right, #77B16A 0%, #42B4E5 100%);
    animation: animtext 4s infinite;
  }

 @keyframes animtext {
					0% {
						background-size: 200% 200%;
						background-position: left center;
					}
					50% {
						background-size: 200% 200%;
						background-position: right center;
					}

          100% {
            background-size: 200% 200%;
						background-position: left center;
          }
  }
		
</style>

