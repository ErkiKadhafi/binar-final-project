import CardProduct from "../components/CardProduct";

// prettier-ignore
const SvgVector = () => (
    <svg width="276" height="194" viewBox="0 0 276 194" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M224.986 128.419C225.295 128.019 225.512 127.555 225.623 127.062C225.733 126.568 225.733 126.057 225.624 125.563C225.515 125.07 225.299 124.606 224.991 124.204C224.683 123.803 224.291 123.474 223.842 123.241L224.526 115.367L219.838 113.785L219.028 124.918C218.685 125.697 218.641 126.575 218.903 127.385C219.165 128.194 219.716 128.88 220.45 129.312C221.184 129.743 222.051 129.891 222.887 129.726C223.723 129.562 224.47 129.097 224.985 128.42L224.986 128.419Z" fill="#D4C2A8"/>
        <path d="M248.379 189.634H244.161L242.153 173.369H248.382L248.379 189.634Z" fill="#D4C2A8"/>
        <path d="M241.145 188.429H249.285V193.549H236.021C236.021 192.191 236.56 190.889 237.522 189.928C238.483 188.968 239.786 188.429 241.145 188.429Z" fill="#4B1979"/>
        <path d="M238.8 178.842L234.702 179.848L228.867 164.533L234.916 163.048L238.8 178.842Z" fill="#D4C2A8"/>
        <path d="M231.545 179.251L239.448 177.307L240.673 182.279L227.793 185.446C227.468 184.128 227.681 182.734 228.385 181.572C229.088 180.411 230.225 179.575 231.545 179.251Z" fill="#4B1979"/>
        <path d="M243.441 184.448C243.056 184.449 242.684 184.307 242.397 184.049C242.111 183.792 241.93 183.437 241.891 183.054L237.035 137.855L232.809 151.677L238.795 173.265C238.898 173.635 238.86 174.03 238.69 174.374C238.519 174.718 238.227 174.987 237.87 175.13L233.111 177.031C232.916 177.11 232.706 177.147 232.495 177.143C232.284 177.138 232.076 177.09 231.884 177.002C231.692 176.915 231.52 176.79 231.378 176.634C231.236 176.478 231.126 176.295 231.057 176.096L223.722 155.07C222.919 152.775 222.564 150.346 222.675 147.917L223.699 125.226L250.664 126.367L250.244 182.507C250.239 182.898 250.088 183.273 249.821 183.558C249.554 183.844 249.189 184.019 248.799 184.051L243.563 184.445C243.522 184.447 243.481 184.448 243.441 184.448Z" fill="#4B1979"/>
        <path d="M238.975 75.0086C243.983 75.0086 248.043 70.9529 248.043 65.95C248.043 60.947 243.983 56.8914 238.975 56.8914C233.968 56.8914 229.908 60.947 229.908 65.95C229.908 70.9529 233.968 75.0086 238.975 75.0086Z" fill="#D4C2A8"/>
        <path d="M245.643 127.843C243.255 127.843 240.29 127.648 237.22 127.446C233.026 127.17 228.69 126.885 225.452 127.072C225.015 127.116 224.574 127.046 224.171 126.871C223.769 126.696 223.418 126.421 223.152 126.071C219.815 121.803 224.961 105.156 225.182 104.45L229.37 85.8363L229.55 85.8768L229.37 85.8363C230.293 81.7423 233.236 78.7224 237.053 77.9553C240.627 77.2383 244.084 78.6675 246.301 81.7818C246.418 81.947 246.536 82.1166 246.653 82.2904C253.871 92.9704 249.788 119.504 249.515 121.215C249.896 121.672 251.958 124.252 251.391 126.044C251.161 126.773 250.535 127.27 249.53 127.519C248.25 127.772 246.946 127.88 245.642 127.842L245.643 127.843Z" fill="#A06ECE"/>
        <path d="M225.598 127.851C224.777 127.851 223.669 127.548 222.175 126.929C221.533 126.662 219.58 125.85 221.952 105.142C223.117 94.9695 224.786 84.8682 224.802 84.7675L224.818 84.6701L224.908 84.6295C224.951 84.61 229.214 82.6582 229.955 80.1498C229.979 80.063 230.008 79.9788 230.041 79.8972C230.245 79.3396 230.657 78.8823 231.19 78.6206C231.723 78.3589 232.337 78.3131 232.904 78.4927C233.502 78.6356 234.023 79.0005 234.362 79.5134C234.701 80.0263 234.832 80.6487 234.728 81.2545C234.47 82.8905 233.974 84.48 233.255 85.9724C231.249 90.1069 229.89 101.068 229.877 101.178C229.8 102.114 227.98 124.293 227.629 125.976C227.507 126.563 227.282 127.283 226.62 127.632C226.303 127.788 225.952 127.864 225.599 127.853L225.598 127.851Z" fill="#4B1979"/>
        <path d="M235.504 127.001C235.338 127.001 235.177 126.946 235.047 126.844C232.379 124.819 236.696 100.27 239.255 91.8002C239.768 90.1036 240.224 88.6516 240.612 87.4828C241.319 85.3855 241.812 83.2223 242.085 81.0262C242.226 79.8364 242.532 79.157 243.021 78.9486C243.361 78.8037 243.76 78.9021 244.21 79.2411C246.575 79.1245 248.874 80.0894 251.003 81.1519L252.92 82.1072L255.071 120.151C255.01 122.579 250.219 124.293 248.13 124.402C244.775 124.578 238.749 125.124 236.095 126.803C235.921 126.924 235.716 126.992 235.504 127L235.504 127.001Z" fill="#4B1979"/>
        <path d="M223.522 119.863C223.49 119.863 223.459 119.863 223.426 119.86L219.082 119.593C218.866 119.579 218.655 119.521 218.462 119.422C218.269 119.323 218.1 119.185 217.963 119.016C217.827 118.848 217.727 118.653 217.671 118.444C217.614 118.235 217.601 118.017 217.634 117.803L219.6 104.791L223.3 86.5345C223.391 86.0848 223.576 85.6592 223.842 85.2854C224.109 84.9116 224.451 84.5979 224.846 84.3646C225.242 84.1313 225.682 83.9836 226.138 83.9311C226.594 83.8787 227.056 83.9226 227.495 84.06C228.244 84.2988 228.883 84.7973 229.296 85.4654C229.71 86.1336 229.871 86.9274 229.75 87.7036L226.81 105.997L225.069 118.518C225.015 118.89 224.83 119.231 224.546 119.478C224.262 119.724 223.898 119.861 223.522 119.863H223.522Z" fill="#4B1979"/>
        <path d="M238.363 105.621C238.628 105.19 238.984 104.823 239.407 104.544C239.829 104.266 240.308 104.084 240.808 104.01C241.309 103.937 241.82 103.974 242.304 104.119C242.789 104.263 243.236 104.513 243.614 104.849L250.737 101.412L253.884 105.227L243.757 109.94C243.149 110.537 242.344 110.89 241.493 110.933C240.642 110.976 239.805 110.706 239.14 110.174C238.475 109.641 238.029 108.884 237.885 108.045C237.742 107.206 237.912 106.343 238.363 105.621Z" fill="#D4C2A8"/>
        <path d="M248.258 109.313C247.907 109.312 247.567 109.195 247.291 108.978C247.016 108.761 246.821 108.458 246.739 108.117L245.705 103.82C245.627 103.497 245.653 103.157 245.782 102.851C245.911 102.544 246.135 102.287 246.422 102.117L252.661 98.3858L249.471 86.7185C249.195 85.7194 249.322 84.6521 249.824 83.745C250.325 82.8379 251.163 82.1631 252.157 81.8652C253.15 81.5672 254.221 81.6697 255.14 82.1507C256.059 82.6317 256.753 83.4531 257.073 84.4388L260.595 95.1808C261.028 96.4902 261.031 97.9033 260.605 99.2148C260.178 100.526 259.345 101.668 258.224 102.473L249.172 109.016C248.906 109.209 248.586 109.312 248.258 109.313Z" fill="#4B1979"/>
        <path d="M180.848 0H6.15778C4.52523 0.00195212 2.96011 0.65073 1.80573 1.80402C0.651343 2.95731 0.00195398 4.52094 0 6.15194V24.9323C0.00195398 26.5633 0.651343 28.127 1.80573 29.2802C2.96011 30.4335 4.52523 31.0823 6.15778 31.0843H180.848C182.48 31.0823 184.045 30.4335 185.2 29.2802C186.354 28.127 187.003 26.5633 187.005 24.9323V6.15194C187.003 4.52094 186.354 2.95731 185.2 1.80402C184.045 0.65073 182.48 0.00195212 180.848 0ZM186.357 24.9323C186.355 26.3915 185.774 27.7903 184.741 28.8221C183.708 29.8539 182.308 30.4345 180.848 30.4366H6.15778C4.69722 30.4345 3.2971 29.8539 2.26434 28.8221C1.23157 27.7903 0.650412 26.3915 0.648264 24.9323V6.15194C0.650412 4.69277 1.23157 3.29398 2.26434 2.26219C3.2971 1.2304 4.69722 0.649795 6.15778 0.647649H180.848C182.308 0.649795 183.708 1.2304 184.741 2.26219C185.774 3.29398 186.355 4.69277 186.357 6.15194V24.9323Z" fill="#3F3D56"/>
        <path d="M180.848 75.4435H6.15778C4.52523 75.4416 2.96011 74.7928 1.80573 73.6395C0.651343 72.4862 0.00195398 70.9226 0 69.2916V50.5116C0.00195398 48.8806 0.651343 47.3169 1.80573 46.1636C2.96011 45.0104 4.52523 44.3616 6.15778 44.3596H180.848C182.48 44.3616 184.045 45.0104 185.2 46.1636C186.354 47.3169 187.003 48.8806 187.005 50.5116V69.2916C187.003 70.9226 186.354 72.4862 185.2 73.6395C184.045 74.7928 182.48 75.4416 180.848 75.4435ZM6.15778 45.0073C4.69707 45.0089 3.29667 45.5894 2.2638 46.6213C1.23093 47.6532 0.649925 49.0522 0.648264 50.5116V69.2916C0.649632 70.7511 1.2305 72.1504 2.26341 73.1826C3.29631 74.2147 4.69688 74.7953 6.15778 74.797H180.848C182.308 74.7954 183.709 74.215 184.742 73.1831C185.775 72.1512 186.356 70.7521 186.357 69.2927V50.5116C186.356 49.0522 185.775 47.6532 184.742 46.6213C183.709 45.5894 182.309 45.0089 180.848 45.0073H6.15778Z" fill="#CCCCCC"/>
        <path d="M180.848 119.803H6.15778C4.52523 119.801 2.96011 119.152 1.80573 117.999C0.651343 116.846 0.00195398 115.282 0 113.651V94.8712C0.00195398 93.2402 0.651343 91.6765 1.80573 90.5233C2.96011 89.37 4.52523 88.7212 6.15778 88.7192H180.848C182.48 88.7212 184.045 89.37 185.2 90.5233C186.354 91.6765 187.003 93.2402 187.005 94.8712V113.651C187.003 115.282 186.354 116.846 185.2 117.999C184.045 119.152 182.48 119.801 180.848 119.803ZM6.15778 89.3654C4.69707 89.3671 3.29667 89.9475 2.2638 90.9794C1.23093 92.0113 0.649925 93.4104 0.648264 94.8697V113.65C0.649827 115.109 1.23079 116.508 2.26367 117.54C3.29656 118.572 4.69701 119.153 6.15778 119.154H180.848C182.308 119.153 183.709 118.572 184.742 117.54C185.775 116.509 186.356 115.109 186.357 113.65V94.8712C186.356 93.4115 185.775 92.012 184.742 90.9798C183.709 89.9476 182.309 89.367 180.848 89.3654H6.15778Z" fill="#CCCCCC"/>
        <path d="M29.7627 26.2497C27.6429 26.2497 25.5708 25.6217 23.8082 24.4452C22.0457 23.2686 20.672 21.5963 19.8608 19.6397C19.0496 17.6832 18.8373 15.5302 19.2509 13.4531C19.6644 11.3761 20.6852 9.46815 22.1841 7.97067C23.683 6.47318 25.5927 5.45338 27.6718 5.04022C29.7508 4.62707 31.9058 4.83911 33.8642 5.64955C35.8227 6.45998 37.4965 7.8324 38.6742 9.59326C39.8519 11.3541 40.4805 13.4243 40.4805 15.5421C40.4805 18.3819 39.3513 21.1055 37.3413 23.1135C35.3314 25.1216 32.6052 26.2497 29.7627 26.2497Z" fill="#A06ECE"/>
        <path d="M165.024 24.2843H50.6173C49.9296 24.2843 49.2701 24.0114 48.7839 23.5256C48.2976 23.0398 48.0244 22.381 48.0244 21.6939C48.0244 21.0069 48.2976 20.348 48.7839 19.8622C49.2701 19.3764 49.9296 19.1035 50.6173 19.1035H165.024C165.711 19.1035 166.371 19.3764 166.857 19.8622C167.343 20.348 167.616 21.0069 167.616 21.6939C167.616 22.381 167.343 23.0398 166.857 23.5256C166.371 24.0114 165.711 24.2843 165.024 24.2843Z" fill="#CCCCCC"/>
        <path d="M127.75 13.2753H50.6144C49.9267 13.2753 49.2672 13.0024 48.7809 12.5166C48.2947 12.0308 48.0215 11.3719 48.0215 10.6849C48.0215 9.99788 48.2947 9.33899 48.7809 8.8532C49.2672 8.3674 49.9267 8.09448 50.6144 8.09448H127.75C128.437 8.09448 129.097 8.3674 129.583 8.8532C130.069 9.33899 130.343 9.99788 130.343 10.6849C130.343 11.3719 130.069 12.0308 129.583 12.5166C129.097 13.0024 128.437 13.2753 127.75 13.2753Z" fill="#CCCCCC"/>
        <path d="M29.7627 70.6091C27.6429 70.6091 25.5708 69.9811 23.8082 68.8045C22.0457 67.628 20.672 65.9557 19.8608 63.9991C19.0496 62.0425 18.8373 59.8896 19.2509 57.8125C19.6644 55.7354 20.6852 53.8275 22.1841 52.33C23.683 50.8326 25.5927 49.8128 27.6718 49.3996C29.7508 48.9864 31.9058 49.1985 33.8642 50.0089C35.8227 50.8194 37.4965 52.1918 38.6742 53.9526C39.8519 55.7135 40.4805 57.7837 40.4805 59.9015C40.4805 62.7413 39.3513 65.4648 37.3413 67.4729C35.3314 69.481 32.6052 70.6091 29.7627 70.6091Z" fill="#E6E6E6"/>
        <path d="M165.024 68.644H50.6173C49.9296 68.644 49.2701 68.3711 48.7839 67.8853C48.2976 67.3995 48.0244 66.7406 48.0244 66.0536C48.0244 65.3665 48.2976 64.7076 48.7839 64.2218C49.2701 63.7361 49.9296 63.4631 50.6173 63.4631H165.024C165.711 63.4631 166.371 63.7361 166.857 64.2218C167.343 64.7076 167.616 65.3665 167.616 66.0536C167.616 66.7406 167.343 67.3995 166.857 67.8853C166.371 68.3711 165.711 68.644 165.024 68.644Z" fill="#E6E6E6"/>
        <path d="M127.75 57.6349H50.6144C49.9267 57.6349 49.2672 57.362 48.7809 56.8762C48.2947 56.3904 48.0215 55.7315 48.0215 55.0445C48.0215 54.3575 48.2947 53.6986 48.7809 53.2128C49.2672 52.727 49.9267 52.4541 50.6144 52.4541H127.75C128.437 52.4541 129.097 52.727 129.583 53.2128C130.069 53.6986 130.343 54.3575 130.343 55.0445C130.343 55.7315 130.069 56.3904 129.583 56.8762C129.097 57.362 128.437 57.6349 127.75 57.6349Z" fill="#E6E6E6"/>
        <path d="M29.7627 114.968C27.6429 114.968 25.5708 114.34 23.8082 113.164C22.0457 111.987 20.672 110.315 19.8608 108.358C19.0496 106.402 18.8373 104.249 19.2509 102.172C19.6644 100.095 20.6852 98.1869 22.1841 96.6894C23.683 95.1919 25.5927 94.1721 27.6718 93.759C29.7508 93.3458 31.9058 93.5579 33.8642 94.3683C35.8227 95.1787 37.4965 96.5512 38.6742 98.312C39.8519 100.073 40.4805 102.143 40.4805 104.261C40.4805 107.101 39.3513 109.824 37.3413 111.832C35.3314 113.84 32.6052 114.968 29.7627 114.968Z" fill="#E6E6E6"/>
        <path d="M165.024 113.004H50.6173C49.9296 113.004 49.2701 112.731 48.7839 112.245C48.2976 111.759 48.0244 111.1 48.0244 110.413C48.0244 109.726 48.2976 109.067 48.7839 108.581C49.2701 108.096 49.9296 107.823 50.6173 107.823H165.024C165.711 107.823 166.371 108.096 166.857 108.581C167.343 109.067 167.616 109.726 167.616 110.413C167.616 111.1 167.343 111.759 166.857 112.245C166.371 112.731 165.711 113.004 165.024 113.004Z" fill="#E6E6E6"/>
        <path d="M127.75 101.995H50.6144C49.9267 101.995 49.2672 101.722 48.7809 101.236C48.2947 100.75 48.0215 100.091 48.0215 99.4044C48.0215 98.7174 48.2947 98.0585 48.7809 97.5727C49.2672 97.0869 49.9267 96.814 50.6144 96.814H127.75C128.437 96.814 129.097 97.0869 129.583 97.5727C130.069 98.0585 130.343 98.7174 130.343 99.4044C130.343 100.091 130.069 100.75 129.583 101.236C129.097 101.722 128.437 101.995 127.75 101.995Z" fill="#E6E6E6"/>
        <path d="M29.2153 19.3085C28.9491 19.3091 28.6899 19.2232 28.4769 19.0636L28.4636 19.0536L25.6856 16.9307C25.5569 16.8322 25.449 16.7093 25.3678 16.569C25.2867 16.4288 25.234 16.274 25.2128 16.1134C25.1916 15.9529 25.2022 15.7897 25.2441 15.6332C25.2859 15.4767 25.3583 15.33 25.4569 15.2015C25.5555 15.073 25.6786 14.9651 25.8189 14.884C25.9593 14.803 26.1143 14.7503 26.275 14.7291C26.4357 14.7079 26.599 14.7185 26.7557 14.7604C26.9123 14.8022 27.0591 14.8745 27.1878 14.973L28.9871 16.3517L33.2389 10.8098C33.438 10.5504 33.7321 10.3806 34.0565 10.3378C34.3809 10.295 34.7091 10.3826 34.9688 10.5815L34.9426 10.6183L34.9695 10.5815C35.2289 10.7807 35.3986 11.0746 35.4413 11.3987C35.4841 11.7227 35.3965 12.0505 35.1977 12.3101L30.1965 18.8257C30.0806 18.9756 29.9318 19.0968 29.7615 19.1799C29.5912 19.263 29.4041 19.3059 29.2145 19.3052L29.2153 19.3085Z" fill="white"/>
        <path d="M275.631 194H202.535C202.437 194 202.343 193.961 202.274 193.892C202.205 193.823 202.166 193.729 202.166 193.631C202.166 193.533 202.205 193.439 202.274 193.37C202.343 193.301 202.437 193.262 202.535 193.262H275.631C275.729 193.262 275.823 193.301 275.892 193.37C275.961 193.439 276 193.533 276 193.631C276 193.729 275.961 193.823 275.892 193.892C275.823 193.961 275.729 194 275.631 194Z" fill="#CCCCCC"/>
        <path d="M242.309 68.3647C242.309 68.3647 241.205 62.2695 238.694 62.9977C236.184 63.726 229.722 64.4711 229.71 61.6005C229.698 58.73 235.792 56.1928 239.385 56.5362C242.979 56.8796 249.088 57.9302 248.752 63.3138C248.483 66.7045 247.434 69.9874 245.687 72.9068L242.309 68.3647Z" fill="#4B1979"/>
    </svg>
)
const SaleListPageSold = ({ products, isLoadingMyProducts }) => {
    // console.log(products);
    return (
        <>
            {isLoadingMyProducts ? (
                <article className="w-full mt-6 md:mt-0 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {[...Array(20)].map((product, index) => {
                        return (
                            <CardProduct
                                product={{ productId: index }}
                                key={index}
                            />
                        );
                    })}
                </article>
            ) : (
                <>
                    {products.length === 0 ? (
                        <div className="w-full font-poppins">
                            <div className="pt-20 md:pt-0 w-[296px] mx-auto flex flex-col justify-center items-center text-center">
                                <div className="w-[172px] md:w-auto -translate-x-1/4 md:translate-x-0">
                                    <SvgVector />
                                </div>
                                <h1 className="text-sm font-medium mt-6">
                                    Belum ada produkmu yang terjual nih, tetap
                                    sabar ya!
                                </h1>
                            </div>
                        </div>
                    ) : (
                        <article className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {products.map((product, index) => {
                                return (
                                    <CardProduct
                                        isLoading={false}
                                        product={product}
                                        key={index}
                                    />
                                );
                            })}
                        </article>
                    )}
                </>
            )}
        </>
    );
};

export default SaleListPageSold;
