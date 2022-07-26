import Link from "next/link";
import * as React from "react";

const CustMobileLink = React.forwardRef<
	HTMLAnchorElement,
	{ href: string; children: React.ReactNode }
>(function ({ href, children }, ref) {
	return (
		<Link href={href}>
			<a ref={ref}>{children}</a>
		</Link>
	);
});

export default CustMobileLink;
