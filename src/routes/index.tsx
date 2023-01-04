import { For } from "solid-js"
import { A } from "solid-start"
import Captcha from "~/components/Captcha"

export default function Home() {
    return (
        <main class="text-center mx-auto text-gray-700 p-4 h-[100vh] overflow-hidden ">
            <div class="grid place-items-center h-full">
                <div>
                    <h1 class="text-4xl m-4">無限 hCaptcha</h1>
                    <div class="m-4">
                        <Captcha />
                    </div>
                </div>
            </div>
        </main>
    )
}
