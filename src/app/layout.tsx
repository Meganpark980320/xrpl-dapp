import "./globals.css";

export const metadata = { title: "XRPL DApp Demo", description: "XRPL DApp starter UI" };


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="ko">
<body>{children}</body>
</html>
);
}