import HCaptcha from "@hcaptcha/react-hcaptcha"
import { useState } from "react"

const Captcha = () => {
    const key = process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY as string
    const [flag, setFlag] = useState(false)

    return (
        <div>
            {flag ? (
                <HCaptcha key="a" sitekey={key} onVerify={() => {}} />
            ) : (
                <HCaptcha key="b" sitekey={key} onVerify={() => {}} />
            )}

            <div className="text-center my-2">
                <button
                    className="py-2 px-4 text-lg bg-teal-300 rounded-md shadow-sm hover:shadow active:bg-teal-400 transition-all duration-75"
                    onClick={() => {
                        setFlag((value) => !value)
                    }}
                >
                    リセット
                </button>
            </div>
        </div>
    )
}

export default Captcha
