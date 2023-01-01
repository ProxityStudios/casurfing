import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark h-full w-full'>
      <head>
        <title>Casurfing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className='dark:bg-black/10 dark:text-white h-full w-full'>
        <div className='flex flex-col h-full w-full relative'>
          {children}
        </div>
      </body>
    </html>
  );
}
