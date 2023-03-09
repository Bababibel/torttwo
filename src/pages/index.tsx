import Card from '@/components/Card'
import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <Link href="/report/new">
            <Card imgPath="/images/new_file.svg" alt="New file icon" text="New report"></Card>
          </Link>
          <Link href="/report/edit">
            <Card imgPath="/images/import_file.svg" alt="Import icon" text="Continue report"></Card>
          </Link>
          <Link href="">
            <Card imgPath="/images/import.svg" alt="Import icon" text="Option 1"></Card>
          </Link>
          <Link href="">
            <Card imgPath="/images/import.svg" alt="Import icon" text="Option 1"></Card>
          </Link>
        </div>
      </div>
    </>
  )
}
