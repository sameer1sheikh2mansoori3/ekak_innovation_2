





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-black border-2 border-red-400`}
      >
        {children}
      </body>
    </html>
  );
}
