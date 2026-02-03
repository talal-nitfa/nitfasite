export const metadata = {
  title: "Nitfa",
  description: "Freshly baked goods and thoughtfully brewed coffee."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
