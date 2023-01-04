import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import Captcha from "../components/Captcha"

export default function Home() {
    return (
        <>
            <Head>
                <title>無限 hCaptcha</title>
                <meta name="description" content="無限に hCaptcha しよう" />
            </Head>
            <main className="h-screen">
                <div className="h-full grid place-items-center">
                    <div>
                        <h1 className="py-2 text-center text-4xl font-semibold">無限 hCaptcha</h1>
                        <Captcha />
                    </div>
                </div>
            </main>
        </>
    )
}
