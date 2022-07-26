import Link from "next/link";
import * as React from "react";

const CustMobileLink = React.forwardRef<
	HTMLAnchorElement,
	{ href: string; children: React.ReactNode }
>(({ href, children }, ref) => {
	return (
		<Link href={href}>
			<a ref={ref}>{children}</a>
		</Link>
	);
});

export default CustMobileLink;
