import { createSignal } from "solid-js"
import HCaptcha from "solid-hcaptcha"

const Captcha = () => {
    const key = import.meta.env.VITE_HCAPTCHA_KEY
    const [flag, setFlag] = createSignal(false)

    const reset = () => {
        setFlag(true)
        setFlag(false)
    }

    return (
        <div>
            {flag() ? <></> : <HCaptcha sitekey={key} onVerify={() => {}} />}
            <div class="m-4">
                <button class="py-2 px-4 bg-teal-100 rounded-sm" onclick={reset}>
                    リセット
                </button>
            </div>
        </div>
    )
}

export default Captcha
