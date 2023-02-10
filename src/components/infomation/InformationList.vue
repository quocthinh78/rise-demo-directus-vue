<template>
    <CardBusiness title="Upload business documents and information" description="Unlock all Rise features now"
        :status="2">
        <template v-slot:icon>
            <!-- <img :src="require(`@/assets/icon/upload_business_blue.svg`)" alt="image" /> -->
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.3263 18H16.7383C17.1257 18 17.4316 17.8593 17.6559 17.5779C17.8853 17.3021 18 16.9306 18 16.4634V5.69043C18 5.22326 17.8853 4.85178 17.6559 4.57598C17.4316 4.29456 17.1257 4.15385 16.7383 4.15385H12.7009V16.4634C12.7009 16.7505 12.6678 17.0206 12.6015 17.2739C12.5404 17.5328 12.4486 17.7749 12.3263 18ZM14.4367 8.42589V7.07505C14.4367 6.87805 14.5259 6.77955 14.7043 6.77955H15.9737C16.1521 6.77955 16.2413 6.87805 16.2413 7.07505V8.42589C16.2413 8.62852 16.1521 8.72983 15.9737 8.72983H14.7043C14.5259 8.72983 14.4367 8.62852 14.4367 8.42589ZM14.4367 11.7523V10.4015C14.4367 10.2045 14.5259 10.106 14.7043 10.106H15.9737C16.1521 10.106 16.2413 10.2045 16.2413 10.4015V11.7523C16.2413 11.9493 16.1521 12.0478 15.9737 12.0478H14.7043C14.5259 12.0478 14.4367 11.9493 14.4367 11.7523ZM14.4367 15.0788V13.728C14.4367 13.5253 14.5259 13.424 14.7043 13.424H15.9737C16.1521 13.424 16.2413 13.5253 16.2413 13.728V15.0788C16.2413 15.2758 16.1521 15.3743 15.9737 15.3743H14.7043C14.5259 15.3743 14.4367 15.2758 14.4367 15.0788ZM0 16.4634C0 16.9306 0.11215 17.3021 0.336449 17.5779C0.565845 17.8593 0.876805 18 1.26933 18H10.384C10.7766 18 11.085 17.8593 11.3093 17.5779C11.5387 17.3021 11.6534 16.9306 11.6534 16.4634V1.53659C11.6534 1.06379 11.5387 0.689493 11.3093 0.413696C11.085 0.137899 10.7766 0 10.384 0H1.26933C0.876805 0 0.565845 0.137899 0.336449 0.413696C0.11215 0.689493 0 1.06379 0 1.53659V16.4634ZM3.18097 16.6407V13.8968C3.18097 13.6998 3.23449 13.545 3.34155 13.4325C3.4486 13.3143 3.58879 13.2552 3.76211 13.2552H7.96007C8.13849 13.2552 8.27867 13.3143 8.38063 13.4325C8.48768 13.545 8.54121 13.6998 8.54121 13.8968V16.6407H3.18097ZM2.92863 4.53377V2.89587C2.92863 2.65385 3.03314 2.53283 3.24214 2.53283H4.77145C4.99065 2.53283 5.10025 2.65385 5.10025 2.89587V4.53377C5.10025 4.7758 4.99065 4.89681 4.77145 4.89681H3.24214C3.03314 4.89681 2.92863 4.7758 2.92863 4.53377ZM6.62192 4.53377V2.89587C6.62192 2.65385 6.72897 2.53283 6.94308 2.53283H8.46474C8.68394 2.53283 8.79354 2.65385 8.79354 2.89587V4.53377C8.79354 4.7758 8.68394 4.89681 8.46474 4.89681H6.94308C6.72897 4.89681 6.62192 4.7758 6.62192 4.53377ZM2.92863 7.97842V6.34052C2.92863 6.0985 3.03314 5.97749 3.24214 5.97749H4.77145C4.99065 5.97749 5.10025 6.0985 5.10025 6.34052V7.97842C5.10025 8.22045 4.99065 8.34146 4.77145 8.34146H3.24214C3.03314 8.34146 2.92863 8.22045 2.92863 7.97842ZM6.62192 7.97842V6.34052C6.62192 6.0985 6.72897 5.97749 6.94308 5.97749H8.46474C8.68394 5.97749 8.79354 6.0985 8.79354 6.34052V7.97842C8.79354 8.22045 8.68394 8.34146 8.46474 8.34146H6.94308C6.72897 8.34146 6.62192 8.22045 6.62192 7.97842ZM2.92863 11.4231V9.78518C2.92863 9.54315 3.03314 9.42214 3.24214 9.42214H4.77145C4.99065 9.42214 5.10025 9.54315 5.10025 9.78518V11.4231C5.10025 11.6651 4.99065 11.7861 4.77145 11.7861H3.24214C3.03314 11.7861 2.92863 11.6651 2.92863 11.4231ZM6.62192 11.4231V9.78518C6.62192 9.54315 6.72897 9.42214 6.94308 9.42214H8.46474C8.68394 9.42214 8.79354 9.54315 8.79354 9.78518V11.4231C8.79354 11.6651 8.68394 11.7861 8.46474 11.7861H6.94308C6.72897 11.7861 6.62192 11.6651 6.62192 11.4231Z"
                    fill="#1E74FD" />
            </svg>
        </template>
    </CardBusiness>

    <CardBusiness title="Business directors information" description="Unlock all Rise features now">
        <template v-slot:icon>
            <!-- <img :src="require(`@/assets/icon/upload_business_blue.svg`)" alt="image" /> -->
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.27811 16H14.7219C15.1195 16 15.432 15.9159 15.6592 15.7478C15.8864 15.5841 16 15.354 16 15.0575C16 14.6372 15.8604 14.1903 15.5811 13.7168C15.3018 13.2434 14.8994 12.8031 14.374 12.396C13.8533 11.9845 13.2237 11.6504 12.4852 11.3938C11.7467 11.1327 10.916 11.0022 9.9929 11.0022C9.07456 11.0022 8.24615 11.1327 7.50769 11.3938C6.76923 11.6504 6.13728 11.9845 5.61183 12.396C5.09112 12.8031 4.69112 13.2434 4.41183 13.7168C4.13728 14.1903 4 14.6372 4 15.0575C4 15.354 4.11361 15.5841 4.34083 15.7478C4.56805 15.9159 4.88047 16 5.27811 16ZM10 9.82743C10.516 9.82743 10.9917 9.6969 11.4272 9.43584C11.8627 9.17478 12.2107 8.82301 12.471 8.38053C12.7361 7.93363 12.8686 7.43142 12.8686 6.87389C12.8686 6.33407 12.7361 5.84735 12.471 5.41372C12.2107 4.97566 11.8627 4.63053 11.4272 4.37832C10.9917 4.12611 10.516 4 10 4C9.48876 4 9.01538 4.12832 8.57988 4.38496C8.14438 4.64159 7.79408 4.98894 7.52899 5.42699C7.26864 5.86062 7.13846 6.34735 7.13846 6.88717C7.13846 7.44027 7.26864 7.93805 7.52899 8.38053C7.79408 8.82301 8.14201 9.17478 8.57278 9.43584C9.00828 9.6969 9.48402 9.82743 10 9.82743Z"
                    fill="#1E74FD" />
                <path d="M1 6V1H6" stroke="#1E74FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1 14V19H6" stroke="#1E74FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19 7V1H14" stroke="#1E74FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19 14V19H14" stroke="#1E74FD" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </template>
    </CardBusiness>
    <CardBusiness title="Business directors information" description="Unlock all Rise features now" :status="1">
        <template v-slot:icon>
            <!-- <img :src="require(`@/assets/icon/upload_business_blue.svg`)" alt="image" /> -->
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.27811 16H14.7219C15.1195 16 15.432 15.9159 15.6592 15.7478C15.8864 15.5841 16 15.354 16 15.0575C16 14.6372 15.8604 14.1903 15.5811 13.7168C15.3018 13.2434 14.8994 12.8031 14.374 12.396C13.8533 11.9845 13.2237 11.6504 12.4852 11.3938C11.7467 11.1327 10.916 11.0022 9.9929 11.0022C9.07456 11.0022 8.24615 11.1327 7.50769 11.3938C6.76923 11.6504 6.13728 11.9845 5.61183 12.396C5.09112 12.8031 4.69112 13.2434 4.41183 13.7168C4.13728 14.1903 4 14.6372 4 15.0575C4 15.354 4.11361 15.5841 4.34083 15.7478C4.56805 15.9159 4.88047 16 5.27811 16ZM10 9.82743C10.516 9.82743 10.9917 9.6969 11.4272 9.43584C11.8627 9.17478 12.2107 8.82301 12.471 8.38053C12.7361 7.93363 12.8686 7.43142 12.8686 6.87389C12.8686 6.33407 12.7361 5.84735 12.471 5.41372C12.2107 4.97566 11.8627 4.63053 11.4272 4.37832C10.9917 4.12611 10.516 4 10 4C9.48876 4 9.01538 4.12832 8.57988 4.38496C8.14438 4.64159 7.79408 4.98894 7.52899 5.42699C7.26864 5.86062 7.13846 6.34735 7.13846 6.88717C7.13846 7.44027 7.26864 7.93805 7.52899 8.38053C7.79408 8.82301 8.14201 9.17478 8.57278 9.43584C9.00828 9.6969 9.48402 9.82743 10 9.82743Z"
                    fill="#1E74FD" />
                <path d="M1 6V1H6" stroke="#1E74FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1 14V19H6" stroke="#1E74FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19 7V1H14" stroke="#1E74FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19 14V19H14" stroke="#1E74FD" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </template>
    </CardBusiness>
    <CardBusiness title="Business directors information" description="Unlock all Rise features now" :status="3">
        <template v-slot:icon>
            <!-- <img :src="require(`@/assets/icon/upload_business_blue.svg`)" alt="image" /> -->
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.27811 16H14.7219C15.1195 16 15.432 15.9159 15.6592 15.7478C15.8864 15.5841 16 15.354 16 15.0575C16 14.6372 15.8604 14.1903 15.5811 13.7168C15.3018 13.2434 14.8994 12.8031 14.374 12.396C13.8533 11.9845 13.2237 11.6504 12.4852 11.3938C11.7467 11.1327 10.916 11.0022 9.9929 11.0022C9.07456 11.0022 8.24615 11.1327 7.50769 11.3938C6.76923 11.6504 6.13728 11.9845 5.61183 12.396C5.09112 12.8031 4.69112 13.2434 4.41183 13.7168C4.13728 14.1903 4 14.6372 4 15.0575C4 15.354 4.11361 15.5841 4.34083 15.7478C4.56805 15.9159 4.88047 16 5.27811 16ZM10 9.82743C10.516 9.82743 10.9917 9.6969 11.4272 9.43584C11.8627 9.17478 12.2107 8.82301 12.471 8.38053C12.7361 7.93363 12.8686 7.43142 12.8686 6.87389C12.8686 6.33407 12.7361 5.84735 12.471 5.41372C12.2107 4.97566 11.8627 4.63053 11.4272 4.37832C10.9917 4.12611 10.516 4 10 4C9.48876 4 9.01538 4.12832 8.57988 4.38496C8.14438 4.64159 7.79408 4.98894 7.52899 5.42699C7.26864 5.86062 7.13846 6.34735 7.13846 6.88717C7.13846 7.44027 7.26864 7.93805 7.52899 8.38053C7.79408 8.82301 8.14201 9.17478 8.57278 9.43584C9.00828 9.6969 9.48402 9.82743 10 9.82743Z"
                    fill="#1E74FD" />
                <path d="M1 6V1H6" stroke="#1E74FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1 14V19H6" stroke="#1E74FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19 7V1H14" stroke="#1E74FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19 14V19H14" stroke="#1E74FD" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </template>
    </CardBusiness>

    <CardBusiness title="Business directors information" description="Unlock all Rise features now" :status="4">
        <template v-slot:icon>
            <!-- <img :src="require(`@/assets/icon/upload_business_blue.svg`)" alt="image" /> -->
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.27811 16H14.7219C15.1195 16 15.432 15.9159 15.6592 15.7478C15.8864 15.5841 16 15.354 16 15.0575C16 14.6372 15.8604 14.1903 15.5811 13.7168C15.3018 13.2434 14.8994 12.8031 14.374 12.396C13.8533 11.9845 13.2237 11.6504 12.4852 11.3938C11.7467 11.1327 10.916 11.0022 9.9929 11.0022C9.07456 11.0022 8.24615 11.1327 7.50769 11.3938C6.76923 11.6504 6.13728 11.9845 5.61183 12.396C5.09112 12.8031 4.69112 13.2434 4.41183 13.7168C4.13728 14.1903 4 14.6372 4 15.0575C4 15.354 4.11361 15.5841 4.34083 15.7478C4.56805 15.9159 4.88047 16 5.27811 16ZM10 9.82743C10.516 9.82743 10.9917 9.6969 11.4272 9.43584C11.8627 9.17478 12.2107 8.82301 12.471 8.38053C12.7361 7.93363 12.8686 7.43142 12.8686 6.87389C12.8686 6.33407 12.7361 5.84735 12.471 5.41372C12.2107 4.97566 11.8627 4.63053 11.4272 4.37832C10.9917 4.12611 10.516 4 10 4C9.48876 4 9.01538 4.12832 8.57988 4.38496C8.14438 4.64159 7.79408 4.98894 7.52899 5.42699C7.26864 5.86062 7.13846 6.34735 7.13846 6.88717C7.13846 7.44027 7.26864 7.93805 7.52899 8.38053C7.79408 8.82301 8.14201 9.17478 8.57278 9.43584C9.00828 9.6969 9.48402 9.82743 10 9.82743Z"
                    fill="#1E74FD" />
                <path d="M1 6V1H6" stroke="#1E74FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1 14V19H6" stroke="#1E74FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19 7V1H14" stroke="#1E74FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19 14V19H14" stroke="#1E74FD" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </template>
    </CardBusiness>

    <Badge title="Edit Draft" bg="#1E74FD" color="#FFFFFF">
        <template v-slot:icon>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1.86681 0.399902C1.0568 0.399902 0.400146 1.05655 0.400146 1.86657V10.3332C0.400146 11.1432 1.05679 11.7999 1.86681 11.7999H10.3335C11.1435 11.7999 11.8001 11.1433 11.8001 10.3332V4.6999H10.2001V10.1999H2.00015V1.9999H7.57015V0.399902H1.86681ZM4.96018 8.43225L11.6269 1.76559L10.4955 0.634217L3.82881 7.30088L4.96018 8.43225Z"
                    fill="#FAFAFA" />
            </svg>

        </template>
    </Badge>
    <Badge title="In progress" bg="#E9F1FF" color="#1E74FD">
        <template v-slot:icon>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M2.68717 1.96377H1.75747V0.36377H4.67414H5.47414V1.16377V4.08044H3.87414V3.0586C3.63956 3.24449 3.42136 3.45147 3.22243 3.67742C2.73405 4.23215 2.37383 4.88762 2.16735 5.59728C1.96088 6.30693 1.91322 7.05335 2.02776 7.7835C2.1423 8.51365 2.41623 9.20961 2.8301 9.82195C3.24396 10.4343 3.7876 10.948 4.42238 11.3265C5.05717 11.705 5.76753 11.9391 6.503 12.0121C7.23846 12.0852 7.98098 11.9953 8.67781 11.749C9.37463 11.5027 10.0087 11.1059 10.5348 10.5869L11.6584 11.726C10.965 12.41 10.1294 12.9329 9.21106 13.2575C8.29273 13.5821 7.31417 13.7005 6.34492 13.6043C5.37567 13.5081 4.4395 13.1996 3.60292 12.7007C2.76635 12.2019 2.0499 11.5249 1.50448 10.7179C0.959055 9.91092 0.598043 8.99372 0.44709 8.03146C0.296137 7.06921 0.358946 6.08553 0.631057 5.15029C0.903168 4.21505 1.3779 3.35121 2.02153 2.62015C2.22824 2.38535 2.45075 2.16611 2.68717 1.96377ZM11.5601 2.17624C10.832 1.4845 9.955 0.968776 8.99654 0.668637L8.5184 2.19552C9.24362 2.42262 9.90718 2.81285 10.4581 3.33626L11.5601 2.17624ZM12.036 7.24829C11.9985 7.98716 11.7976 8.70852 11.4476 9.36033L12.8573 10.1172C13.3192 9.2568 13.5845 8.30458 13.6339 7.32925L12.036 7.24829ZM13.5623 6.00585C13.4126 4.98659 13.0227 4.01752 12.4248 3.17861L11.1219 4.10726C11.5726 4.73961 11.8665 5.47007 11.9793 6.23836L13.5623 6.00585ZM6.20747 6.9971V4.08044H7.80747V6.66573L9.61482 8.47308L8.48345 9.60445L6.44178 7.56279L6.20747 7.32847V6.9971Z"
                    fill="#1E74FD" />
            </svg>
        </template>
    </Badge>
    <Badge title="Verified" bg="#E6F9E8" color="##34C759">
        <template v-slot:icon>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.75 8.00016L6.25 11.5002L13.9167 3.8335" stroke="#34C759" stroke-width="1.6"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </template>
    </Badge>
    <Badge title="Rejected" bg="#FFE8E6" color="#EC4433">
        <template v-slot:icon>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.00003 1.9667C4.2202 1.9667 1.9667 4.2202 1.9667 7.00003C1.9667 9.77987 4.2202 12.0334 7.00003 12.0334C9.77987 12.0334 12.0334 9.77987 12.0334 7.00003C12.0334 4.2202 9.77987 1.9667 7.00003 1.9667ZM0.366699 7.00003C0.366699 3.33654 3.33654 0.366699 7.00003 0.366699C10.6635 0.366699 13.6334 3.33654 13.6334 7.00003C13.6334 10.6635 10.6635 13.6334 7.00003 13.6334C3.33654 13.6334 0.366699 10.6635 0.366699 7.00003ZM6.20003 7.64176V4.14176H7.80003V7.64176H6.20003ZM7.7292 9.10009C7.7292 9.5028 7.40274 9.82926 7.00003 9.82926C6.59732 9.82926 6.27087 9.5028 6.27087 9.10009C6.27087 8.69738 6.59732 8.37092 7.00003 8.37092C7.40274 8.37092 7.7292 8.69738 7.7292 9.10009Z"
                    fill="#EC4433" />
            </svg>


        </template>
    </Badge>

    <div class="block mt-8 cursor-pointer">
        <div class="inline text-[var(--v-button-color)] bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center mt-8"
            @click="toggleModal" type="button">
            Toggle modal Confirmation
        </div>
    </div>


    <Modal v-if="showModal">
        <div class="relative bg-[var(--v-notice-background-color)] w-[280px] h-auto rounded-2xl leading-4 text-center">
            <div class=" py-6 px-7">
                <div class="font-bold text-[17px]">Confirmation</div>
                <div class="text-[15px] mt-5">I confirm that there’s no business owners with over 25%
                    ownership</div>
            </div>
            <div class=" border-[var(--border-normal)] py-5 px-7 border-solid border-y border-x-0" @click="onSubmit">
                <div class="text-[15px] text-[#1E74FD] cursor-pointer">Submit</div>
            </div>
            <div class="py-5 px-7">
                <div class="text-[15px] text-[var(--v-button-color-disabled)] cursor-pointer" @click="toggleModal">Close</div>
            </div>
        </div>
    </Modal>


    <Alert title=" Please click here if there's no business owners with over 25% ownership" bg="var(--primary)">
        <svg class="flex-shrink-0 w-5 h-5" fill="var(--v-icon-color)" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"></path>
        </svg>
    </Alert>

    
    <div class="max-w-[310px] max-h-[300px] p-6 flex flex-col items-center m-0" style="line-height: 34px;">
        <div class="w-[100px] h-[100px] pointer-events-none bg-[var(--background-normal)] rounded-full mb-4" style="padding: 2.3rem 0 0 2.3rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="var(--v-icon-color)" width="36" height="36" viewBox="0 0 45 45" ><path d="m42 24-8.45 11.95q-.65.9-1.55 1.475-.9.575-2 .575H9q-1.25 0-2.125-.875T6 35V13q0-1.25.875-2.125T9 10h21q1.1 0 2 .575.9.575 1.55 1.475Zm-3.75 0-7.7-11H9v22h21.55ZM9 24v11-22Z"/></svg>
        </div>
        <h2 class="mb-2 text-2xl font-bold line" style="outline: none; box-sizing: border-box;">No Items</h2>
        <p class="text-base mb-6 max-w-[310px] w-auto">There are no items in this collection yet.</p>
        <button type="button" 
                class="justify-center relative flex items-center min-w-[var(--v-button-min-width)] h-11 px-5 text-sm bg-[var(--v-button-background-color)] rounded-md w-auto
                focus:outline-none hover:bg-[var(--v-button-background-color-hover)] hover:border-[var(--v-button-background-color-hover)] text-[var(--v-button-color)] no-underline border
                font-semibold text-center disabled:bg-[var(--v-button-background-color-disabled)] disabled:cursor-default disabled:text-[var(--foreground-subdued)]" 
                style="transition: var(--fast) var(--transition);">
                Submit
        </button>
    </div>

    <!-- <img :src="Images" class="w-4 h-4" /> -->
</template>


<style lang="css">

</style>


<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<script>
import { ref } from "vue"
import CardBusiness from '../common/BusinessCard.vue';
import Badge from '../common/Badge.vue';
import Modal from '../common/Modal.vue';
import Alert from '../common/Alert.vue';
// import Images from "../../assets/icon/avatar.svg"
export default {
    name: "InformationList",
    components: {
        CardBusiness,
        Badge,
        Modal,
        Alert,
    },
    setup() {
        const showModal = ref(false)

        const toggleModal = () => {
            showModal.value = !showModal.value
        }
        const onSubmit = () => {
            // showModal.value = !showModal.value
        }

        return { showModal, toggleModal }
    },
    
}
</script>

<style scoped>
.svg-container {
    background-color: var(--background-normal);
}

</style>
