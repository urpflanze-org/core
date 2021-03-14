const GA_ID = 'G-01VM1TGE22'
const hasAnalytics = GA_ID && GA_ID.length > 0

export { hasAnalytics }

export async function bindAnalytics() {
	if (hasAnalytics) {
		const gtagjs = document.createElement('script')
		gtagjs.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID
		gtagjs.async = true
		document.head.appendChild(gtagjs)

		const gtagscript = document.createElement('script')
		gtagscript.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${GA_ID}');
        `

		document.head.appendChild(gtagscript)
	}
}
