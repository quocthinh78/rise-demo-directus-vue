<template>
    <div class="flex justify-center w-full h-full">
        <div class="text-center max-w-[800px] mt-12 px-6">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="40" height="40" rx="8" fill="#FFE70C" stroke="#141515" stroke-width="1.8"
                    stroke-linecap="round" />
                <path
                    d="M15.7534 27.6666H26.2465C26.6883 27.6666 27.0354 27.5732 27.2879 27.3863C27.5404 27.2044 27.6666 26.9488 27.6666 26.6194C27.6666 26.1523 27.5114 25.6558 27.2011 25.1297C26.8908 24.6037 26.4437 24.1145 25.8599 23.6622C25.2813 23.2049 24.5818 22.8337 23.7613 22.5486C22.9407 22.2585 22.0177 22.1135 20.992 22.1135C19.9716 22.1135 19.0512 22.2585 18.2307 22.5486C17.4102 22.8337 16.708 23.2049 16.1242 23.6622C15.5456 24.1145 15.1012 24.6037 14.7908 25.1297C14.4858 25.6558 14.3333 26.1523 14.3333 26.6194C14.3333 26.9488 14.4595 27.2044 14.712 27.3863C14.9644 27.5732 15.3116 27.6666 15.7534 27.6666ZM20.9999 20.8082C21.5732 20.8082 22.1018 20.6631 22.5857 20.3731C23.0696 20.083 23.4562 19.6922 23.7455 19.2005C24.04 18.7039 24.1873 18.1459 24.1873 17.5265C24.1873 16.9267 24.04 16.3859 23.7455 15.904C23.4562 15.4173 23.0696 15.0338 22.5857 14.7536C22.1018 14.4734 21.5732 14.3333 20.9999 14.3333C20.4319 14.3333 19.9059 14.4758 19.422 14.761C18.9381 15.0461 18.5489 15.4321 18.2544 15.9188C17.9651 16.4006 17.8204 16.9414 17.8204 17.5412C17.8204 18.1558 17.9651 18.7089 18.2544 19.2005C18.5489 19.6922 18.9355 20.083 19.4141 20.3731C19.898 20.6631 20.4266 20.8082 20.9999 20.8082Z"
                    fill="#141515" />
                <path d="M11 16.5556V11H16.5556" stroke="#141515" stroke-width="2.22222" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M11 25.4444V31H16.5556" stroke="#141515" stroke-width="2.22222" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M31 17.6667V11H25.4444" stroke="#141515" stroke-width="2.22222" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M31 25.4444V31H25.4444" stroke="#141515" stroke-width="2.22222" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>

            <div class="font-bold text-2xl mt-8">
                Let’s verify your identity
            </div>
            <div class="mt-4">We are required by law to verify your identity before you can accept money
                in TagRise. Your information will be encrypted and stored securely.</div>
            <div class="text-[#fff] bg-[#1e74fd] rounded-md hover:bg-[#0564fd] py-2 block mt-8 cursor-pointer"
                @click="ridereactStartLink">Start
            </div>
            <div class="bg-[#fff] text-[#1e74fd] py-2 block mt-4 cursor-pointer">Skip</div>
        </div>
    </div>


</template>

<script>
import AppApi from "./../../apiConfig.js"

export default {
    name: "page/ekyc-star",
    setup() {
        const ridereactStartLink = async () => {
            const data = await AppApi("post", "/jumio/start")
            console.log("🚀 thinhvq ~ file: index.vue:43 ~ ridereactStartLink ~ data", data)
            if (data.data.data) {
                window.location.href = data.data.data.web.href;
                return false;
            }
        }
        return {
            ridereactStartLink
        }
    }

}
</script>
