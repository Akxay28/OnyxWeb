import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import "./Itstaffing.css"
import Section5 from '../../Home/Section5';

const Itstaffing = () => {

    useEffect(() => {
        // Initialize AOS animations
        Aos.init({
            duration: 1000, // Animation duration (milliseconds)
            easing: 'ease-in-out', // Animation easing
            once: true, // Whether animation happens only once
        });

        // Function to animate counters
        const counters = document.querySelectorAll('.counter');

        const countUp = (element, targetValue) => {
            let current = 0;
            const increment = targetValue / 100;
            const interval = setInterval(() => {
                current += increment;
                element.textContent = Math.floor(current);
                if (current >= targetValue) {
                    clearInterval(interval);
                    element.textContent = targetValue;
                }
            }, 30);
        };

        // Function to check if counters are in view
        const checkCountersInView = () => {
            counters.forEach(counter => {
                const counterPosition = counter.getBoundingClientRect();
                if (counterPosition.top <= window.innerHeight && !counter.classList.contains('counted')) {
                    const targetValue = parseInt(counter.getAttribute('data-count'));
                    countUp(counter, targetValue);
                    counter.classList.add('counted'); // To avoid counting multiple times
                }
            });
        };

        // Run the check function on scroll and load
        window.addEventListener('scroll', checkCountersInView);
        window.addEventListener('load', checkCountersInView);

        // Initial check when the page loads
        checkCountersInView();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', checkCountersInView);
            window.removeEventListener('load', checkCountersInView);
        };

    }, []);

    return (
        <>
            <section class="section-1 hero-section d-flex align-items-center justify-content-center" data-aos="fade-up">
                <div class="container gap-3 p-5">
                    <h2 class="mb-5">IT Staffing</h2>
                    <p>We are dedicated to providing top-notch IT services and building trust with our clients and candidates.
                        Our message suggests a focus on both short-term and long-term success.</p>
                </div>
            </section>

            <section class="section-2" data-aos="fade-right">
                <div class="container text-center py-5">
                    <h2 class="mb-4">IT Staffing</h2>
                    <p class="mt-5">At Onyx Consultancy Services Inc, we focus on connecting great talent with top companies to help both
                        businesses and individuals succeed. Our IT staffing services are customized according to your various
                        needs.</p>
                </div>
            </section>

            <section class="section-3 py-5 mb-5">
                <div class="container" data-aos="fade-flip">
                    <div id="counter" class="row">
                        <div class="item col-lg-4" data-aos="zoom-in">
                            <h1 class="count counter" data-count="42">0</h1>
                            <h3 class="text">Successful Placements</h3>
                        </div>
                        <div class="item col-lg-4" data-aos="zoom-in">
                            <h1 class="count counter" data-count="42">0</h1>
                            <h3 class="text">IT Projects</h3>
                        </div>
                        <div class="item col-lg-4" data-aos="zoom-in">
                            <h1 class="count counter" data-count="42">0</h1>
                            <h3 class="text">Happy Clients</h3>
                        </div>
                        <div class="item col-lg-4" data-aos="zoom-in">
                            <h1 class="count counter" data-count="42">0</h1>
                            <h3 class="text">Experience</h3>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 mt-5" data-aos="fade-up">
                            <div class="sahdevCard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="55" viewBox="0 0 63 55" fill="none">
                                    <g clip-path="url(#clip0_498_5728)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M9.45369 15.1111L6.88693 12.6433H1.04098C0.757969 12.6433 0.497109 12.5249 0.307617 12.3375C0.210274 12.241 0.13297 12.1262 0.0801697 11.9996C0.0273698 11.873 0.000121774 11.7372 0 11.6L0 3.59236C0 3.30501 0.119355 3.04479 0.306387 2.8561L0.332227 2.83267C0.519258 2.65631 0.771504 2.54779 1.04098 2.54779H11.5221C11.8051 2.54779 12.0672 2.66741 12.2555 2.8561C12.4437 3.04479 12.5631 3.30748 12.5631 3.59236V11.6C12.5631 11.8848 12.4462 12.1463 12.2567 12.3362L12.2309 12.3597C12.0392 12.5412 11.7858 12.6426 11.5221 12.6433H10.1637V14.841C10.1637 15.0667 9.98156 15.2492 9.75762 15.2492C9.6358 15.2492 9.52752 15.1962 9.45369 15.1111ZM49.5621 13.8618L51.6711 11.8355C51.7523 11.7566 51.8581 11.7184 51.9639 11.7184L58.2233 11.7159C58.2885 11.7159 58.3501 11.6888 58.3919 11.6468C58.4337 11.6037 58.462 11.542 58.462 11.4766V4.24723C58.462 4.1831 58.4337 4.12144 58.3907 4.0795C58.3476 4.03634 58.2873 4.00797 58.2233 4.00797H47.3017C47.2389 4.00797 47.1774 4.03634 47.1343 4.0795C47.0913 4.12267 47.063 4.1831 47.063 4.24723V11.4766C47.063 11.5408 47.09 11.6024 47.1343 11.6456C47.1762 11.6875 47.2377 11.7159 47.3017 11.7159H49.14C49.3726 11.7159 49.5621 11.907 49.5621 12.1401V13.8618ZM31.4557 48.4882C32.8363 48.4882 33.956 49.6105 33.956 50.9942C33.956 52.3779 32.8363 53.499 31.4557 53.499C30.0751 53.499 28.9566 52.3779 28.9566 50.9942C28.9566 49.6105 30.0751 48.4882 31.4557 48.4882ZM25.0376 34.2045C28.2885 37.8661 35.6504 37.2211 38.3722 34.223C37.7397 33.5151 37.0666 32.5236 36.4871 31.6726C36.3567 31.4815 36.2324 31.2977 36.113 31.125C34.885 31.9538 33.4232 32.4631 31.5898 32.4582C29.5485 32.4533 27.9599 31.7515 26.6396 30.6786C26.268 31.7873 25.7254 33.3141 25.2012 34.0417C25.1545 34.1071 25.0991 34.1613 25.0376 34.2045ZM37.6917 40.694H11.3609C10.3593 40.694 9.54598 41.6337 9.69609 42.7819L11.2736 54.9999H7.26346C7.26592 48.4746 4.95633 40.4695 11.7682 36.6624C14.3054 35.2442 21.4409 34.7632 24.2931 32.8898C24.73 32.0697 25.2135 30.5972 25.5015 29.7191C25.5347 29.6205 25.4818 29.7832 25.531 29.634C24.4826 28.5056 23.6262 27.1724 22.803 25.8615L20.4541 22.1185C19.5952 20.8334 19.1486 19.6594 19.1203 18.6974C19.1079 18.2436 19.1842 17.8317 19.3516 17.4715C19.5263 17.0929 19.7958 16.776 20.16 16.5306C20.3286 16.4159 20.5193 16.3197 20.7285 16.2395C20.5759 14.2096 20.5193 11.6493 20.6177 9.50834C20.6682 8.999 20.7654 8.4909 20.9069 7.98279C21.767 4.90209 24.4088 2.68345 27.4259 1.63887C28.8889 1.132 28.3242 -0.0766047 29.8044 0.00355763C33.3112 0.195947 38.7216 2.46022 40.8011 4.86386C43.7149 8.23068 42.963 12.3757 42.8646 16.4825C43.5168 16.681 43.9339 17.0954 44.1049 17.7651C44.2944 18.5075 44.0889 19.5545 43.4602 20.9814H43.4589C43.4466 21.0073 43.4343 21.0332 43.4196 21.0579L40.7421 25.4779C39.7097 27.1811 38.6613 28.8891 37.2635 30.2013L37.1946 30.2642C37.3287 30.4578 37.4739 30.67 37.6253 30.8932C38.0904 31.5764 38.6195 32.3546 39.1105 32.9626C42.0193 34.7755 49.0219 35.2639 51.5234 36.6624C57.7865 40.1612 55.6455 48.8027 56.0097 54.9999H52.0181L53.5955 42.7819C53.7444 41.6325 52.9323 40.694 51.9307 40.694H37.6917ZM22.0832 17.326C21.5627 17.347 21.169 17.4555 20.8983 17.6368C20.7445 17.7404 20.6313 17.8724 20.5587 18.029C20.4787 18.2041 20.4418 18.4162 20.4479 18.6604C20.4688 19.3769 20.8429 20.313 21.5677 21.3921L21.5775 21.4081L23.9277 25.1523C24.8702 26.6545 25.8571 28.1849 27.0851 29.3097C28.2651 30.3913 29.6974 31.1238 31.5898 31.1287C33.641 31.1337 35.141 30.3715 36.3579 29.2295C37.624 28.0431 38.6232 26.414 39.6076 24.7898L42.2543 20.4203C42.7477 19.2918 42.9274 18.5371 42.8142 18.0943C42.7477 17.8304 42.4561 17.7022 41.9614 17.6763C41.8569 17.6713 41.7486 17.6701 41.6391 17.6726C41.5209 17.6763 41.3979 17.6849 41.2699 17.696C41.1986 17.7034 41.1309 17.6985 41.0644 17.6837C40.8294 17.696 40.587 17.68 40.3397 17.643L41.2465 13.6225C34.5208 14.6856 29.4906 9.67853 22.381 12.6223L22.8929 17.3606C22.6062 17.3741 22.3342 17.3643 22.0832 17.326ZM52.797 21.4451C53.3002 21.4451 53.7087 21.8546 53.7087 22.3602C53.7087 22.8646 53.3002 23.2753 52.797 23.2753C52.2925 23.2753 51.8827 22.8646 51.8827 22.3602C51.8827 21.8546 52.2925 21.4451 52.797 21.4451ZM56.5733 25.3731L58.4005 22.2073L60.8356 25.3558V27.1256H50.3865V26.5163L52.0464 26.4781L52.8068 24.6097L53.187 25.9441H54.3289L55.3182 23.3888L56.5733 25.3731ZM49.7478 18.5581H61.4742C61.8926 18.5581 62.2753 18.7307 62.5521 19.007L62.5767 19.0353C62.8388 19.3103 63 19.684 63 20.0885V27.6287C63 28.0468 62.8277 28.4304 62.5509 28.7078C62.2716 28.9866 61.8926 29.1592 61.4742 29.1592H49.7478C49.3307 29.1592 48.948 28.9853 48.6712 28.7078C48.529 28.5666 48.4161 28.3985 48.339 28.2133C48.2619 28.0281 48.2222 27.8294 48.2221 27.6287V20.0885C48.2221 19.668 48.3943 19.2844 48.6712 19.007C48.8124 18.8648 48.9801 18.752 49.1649 18.675C49.3496 18.5979 49.5477 18.5582 49.7478 18.5581ZM61.4742 19.5237H49.7478C49.594 19.5237 49.4525 19.5878 49.3504 19.689C49.2495 19.7913 49.1855 19.9331 49.1855 20.0885V27.6287C49.1855 27.7841 49.2495 27.9259 49.3504 28.0271C49.4022 28.08 49.4641 28.1221 49.5323 28.1506C49.6006 28.1792 49.6739 28.1938 49.7478 28.1936H61.4742C61.628 28.1936 61.7695 28.1307 61.8704 28.0283C61.9232 27.9761 61.9651 27.9139 61.9936 27.8453C62.0221 27.7767 62.0367 27.7031 62.0365 27.6287V20.0885C62.0365 19.9405 61.9787 19.8049 61.8877 19.7038L61.8717 19.689C61.766 19.5837 61.6232 19.5243 61.4742 19.5237ZM49.3086 9.53424C49.0748 9.53424 48.8841 9.34432 48.8841 9.11C48.8841 8.87568 49.0748 8.68575 49.3086 8.68575H55.1607C55.2163 8.68575 55.2713 8.69673 55.3227 8.71805C55.374 8.73937 55.4207 8.77062 55.46 8.81001C55.4993 8.84941 55.5305 8.89618 55.5517 8.94765C55.573 8.99912 55.584 9.05429 55.584 9.11C55.584 9.16571 55.573 9.22088 55.5517 9.27235C55.5305 9.32382 55.4993 9.37059 55.46 9.40998C55.4207 9.44938 55.374 9.48063 55.3227 9.50195C55.2713 9.52327 55.2163 9.53424 55.1607 9.53424H49.3086ZM49.3086 6.93205C49.0748 6.93205 48.8841 6.74213 48.8841 6.50781C48.8841 6.27349 49.0748 6.08233 49.3086 6.08233H56.4847C56.7185 6.08233 56.9079 6.27349 56.9079 6.50781C56.9079 6.74213 56.7185 6.93205 56.4847 6.93205H49.3086ZM52.1325 12.5644L49.4501 15.1419C49.3726 15.2258 49.2618 15.2788 49.14 15.2788C48.9062 15.2788 48.7167 15.0876 48.7167 14.8546V12.5644H47.3017C47.0039 12.5644 46.7307 12.4411 46.5351 12.245C46.3317 12.0411 46.2172 11.7649 46.2164 11.4766V4.24723C46.2164 3.95001 46.3407 3.67623 46.5363 3.48014C46.7332 3.28281 47.0051 3.15949 47.3017 3.15949H58.2233C58.5199 3.15949 58.793 3.28281 58.9887 3.48014C59.0896 3.58068 59.1696 3.7002 59.2243 3.83184C59.279 3.96347 59.3072 4.10464 59.3074 4.24723V11.4766C59.3074 11.7751 59.1855 12.0464 58.9899 12.2437C58.7918 12.4411 58.5211 12.5644 58.2233 12.5644H52.1325ZM2.64674 19.3276H14.2845C14.6832 19.3276 15.0486 19.4929 15.3107 19.758C15.5765 20.0207 15.7402 20.387 15.7402 20.7866V28.3699C15.7402 28.7683 15.5753 29.1333 15.312 29.3972C15.0462 29.6636 14.682 29.8289 14.2845 29.8289H2.64674C2.24807 29.8289 1.88385 29.6636 1.6193 29.3997L1.58977 29.3664C1.34367 29.105 1.19232 28.7535 1.19232 28.3699V20.7866C1.19232 20.387 1.35598 20.0219 1.6193 19.758C1.88508 19.4929 2.2493 19.3276 2.64674 19.3276ZM7.44311 23.3259L9.88928 25.0364C9.93234 25.0623 9.97049 25.0968 10 25.1412C10.1157 25.3077 10.0738 25.5371 9.90773 25.6518L7.46648 27.3426C7.4025 27.3956 7.32129 27.4265 7.23393 27.4265C7.0309 27.4265 6.86602 27.2612 6.86602 27.0577V23.6255C6.86848 23.5528 6.88939 23.4788 6.93492 23.4159C6.9623 23.3764 6.99719 23.3428 7.03759 23.3169C7.07799 23.291 7.12311 23.2733 7.17033 23.265C7.21756 23.2566 7.26597 23.2577 7.31279 23.2681C7.3596 23.2786 7.40389 23.2982 7.44311 23.3259ZM14.7792 21.7128H2.15209V28.3699C2.15209 28.497 2.20008 28.6141 2.2776 28.7004L2.29852 28.7202C2.38834 28.809 2.51262 28.8657 2.64674 28.8657H14.2845C14.4199 28.8657 14.5454 28.8102 14.6327 28.7214C14.7238 28.6301 14.7792 28.5056 14.7792 28.3699V21.7128ZM9.5952 8.35277C9.89051 8.35277 10.1304 8.59203 10.1304 8.88801C10.1304 9.18276 9.89051 9.42325 9.5952 9.42325H3.98057C3.68648 9.42325 3.44654 9.18276 3.44654 8.88801C3.44654 8.59203 3.68648 8.35277 3.98057 8.35277H9.5952ZM9.5952 5.49653C9.89051 5.49653 10.1304 5.73701 10.1304 6.03177C10.1304 6.32775 9.89051 6.56824 9.5952 6.56824H2.71072C2.41541 6.56824 2.17547 6.32775 2.17547 6.03177C2.17547 5.73701 2.41541 5.49653 2.71072 5.49653H9.5952Z"
                                            fill="#0E0E2A"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_498_5728">
                                            <rect width="63" height="55" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div class="card__content">
                                    <p class="card__title">Employment Opportunities</p>
                                    <p class="card__description">We connect skilled IT professionals to leading companies across
                                        industries. By matching expertise with the right opportunities, we help candidates
                                        advance their careers while providing businesses with the talent they need to excel.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mt-5" data-aos="fade-up">
                            <div class="sahdevCard">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path
                                        d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" />
                                </svg>
                                <div class="card__content">
                                    <p class="card__title">Career Guidance</p>
                                    <p class="card__description">Our personalized career advice supports professionals in
                                        navigating their career paths. We help candidates identify their strengths, align with
                                        the right roles, and achieve long-term professional goals.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mt-5" data-aos="fade-up">
                            <div class="sahdevCard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                    <g clip-path="url(#clip0_444_40416)">
                                        <path
                                            d="M47.3683 8.97925C40.2138 7.01889 33.0172 3.96644 26.5565 0.151963C26.2133 -0.0506542 25.7875 -0.0506542 25.4444 0.151963C18.7973 4.07603 11.9896 6.96334 4.63193 8.97925C4.15662 9.10935 3.82715 9.5414 3.82715 10.0343V21.2108C3.82715 32.7201 9.13672 40.3385 13.591 44.7028C18.3864 49.4016 23.9723 52 26.0004 52C28.0283 52 33.6143 49.4016 38.4096 44.7028C42.8638 40.3386 48.1731 32.7202 48.1731 21.2108V10.0342C48.1731 9.5414 47.8436 9.10935 47.3683 8.97925ZM45.9855 21.2107C45.9855 31.9604 41.0332 39.0692 36.8785 43.14C32.1628 47.7606 27.121 49.8122 26.0004 49.8122C24.8799 49.8122 19.8377 47.7606 15.122 43.14C10.9674 39.0691 6.0149 31.9604 6.0149 21.2107V10.8646C13.0509 8.86682 19.6035 6.07883 26.0006 2.36135C32.238 5.98022 39.1175 8.90684 45.9855 10.8641V21.2107Z"
                                            fill="#0E0E2A"></path>
                                        <path
                                            d="M16.3046 10.7422C16.0832 10.1801 15.4481 9.9039 14.8859 10.1254C12.9318 10.8954 10.9262 11.6041 8.92469 12.2319C8.46858 12.3751 8.1582 12.7976 8.1582 13.2756V17.4996C8.1582 18.1037 8.64804 18.5935 9.25203 18.5935C9.85602 18.5935 10.3459 18.1037 10.3459 17.4996V14.075C12.1414 13.494 13.935 12.8514 15.6878 12.1607C16.25 11.9394 16.5261 11.3043 16.3046 10.7422Z"
                                            fill="#0E0E2A"></path>
                                        <path
                                            d="M18.3825 10.9497C18.5292 10.9497 18.6782 10.9202 18.8211 10.8578L18.8412 10.8491C19.3946 10.6065 19.6439 9.96233 19.4013 9.40912C19.1586 8.85571 18.5107 8.60536 17.9579 8.84768L17.9403 8.8553C17.3865 9.09712 17.1365 9.74082 17.3783 10.2943C17.5578 10.7053 17.9605 10.9497 18.3825 10.9497Z"
                                            fill="#0E0E2A"></path>
                                        <path
                                            d="M39.0333 35.2709C38.5278 34.9405 37.85 35.0826 37.5192 35.5883C36.6178 36.9679 35.5604 38.289 34.3757 39.5146C33.4015 40.5223 32.3459 41.4615 31.2382 42.306C30.7579 42.6722 30.6655 43.3586 31.0316 43.8391C31.247 44.1213 31.5727 44.2698 31.9022 44.2698C32.1335 44.2698 32.3666 44.1968 32.5647 44.0457C33.7596 43.1345 34.8981 42.1217 35.9484 41.0352C37.2292 39.7104 38.3738 38.2804 39.3507 36.7849C39.6812 36.2791 39.539 35.6013 39.0333 35.2709Z"
                                            fill="#0E0E2A"></path>
                                        <path
                                            d="M28.6977 44.0215L28.6349 44.0584C28.1122 44.3612 27.9335 45.0303 28.2362 45.553C28.439 45.9034 28.8062 46.099 29.1839 46.099C29.3697 46.099 29.5584 46.0516 29.7308 45.9516L29.8032 45.909C30.3245 45.6037 30.4996 44.9337 30.1943 44.4124C29.8888 43.8913 29.2187 43.7165 28.6977 44.0215Z"
                                            fill="#0E0E2A"></path>
                                        <path
                                            d="M18.5448 23.7675C17.8731 23.0958 16.9799 22.7261 16.0299 22.7261C15.0799 22.7261 14.1865 23.0959 13.5146 23.7675C12.128 25.1544 12.128 27.4111 13.5146 28.798L19.9735 35.2567C20.6453 35.9283 21.5385 36.298 22.4886 36.298C23.4387 36.298 24.332 35.9283 25.0038 35.2565L38.4873 21.7729C39.8739 20.3857 39.8739 18.1293 38.4871 16.7428C37.8154 16.0711 36.9222 15.7014 35.9719 15.7014C35.0218 15.7014 34.1286 16.0712 33.4567 16.7428L22.4885 27.7111L18.5448 23.7675ZM35.0037 18.2898C35.2622 18.0314 35.6062 17.8891 35.972 17.8891C36.3381 17.8891 36.6818 18.0314 36.9404 18.2898C37.4741 18.8235 37.4741 19.6923 36.9402 20.2262L23.4569 33.7096C23.1984 33.9681 22.8545 34.1104 22.4886 34.1104C22.1228 34.1104 21.7788 33.9681 21.5202 33.7096L15.0615 27.2511C14.5276 26.7172 14.5276 25.8484 15.0613 25.3147C15.3199 25.0562 15.6638 24.9137 16.0298 24.9137C16.3957 24.9137 16.7395 25.056 16.998 25.3145L21.715 30.0317C21.9203 30.2367 22.1984 30.352 22.4885 30.352C22.7787 30.352 23.0568 30.2368 23.2618 30.0317L35.0037 18.2898Z"
                                            fill="#0E0E2A"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_444_40416">
                                            <rect width="52" height="52" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div class="card__content">
                                    <p class="card__title">Interview Support</p>
                                    <p class="card__description">We provide strategic guidance to candidates preparing for
                                        interviews. This includes tips to showcase their skills effectively and increase their
                                        chances of landing their dream roles.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mt-5" data-aos="fade-up">
                            <div class="sahdevCard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="55" viewBox="0 0 59 55" fill="none">
                                    <g clip-path="url(#clip0_498_5732)">
                                        <path
                                            d="M33.3844 43.1544L39.7367 49.3906C41.2731 49.4331 42.5071 50.6728 42.5071 52.1953C42.5071 53.7461 41.2299 55 39.6502 55C38.0706 55 36.7934 53.7414 36.7934 52.1953C36.7934 52.0256 36.8078 51.8559 36.8366 51.6909L31.3101 46.2701V50.258H27.3538V46.3786L21.7409 51.8936C21.7505 51.9926 21.7553 52.0963 21.7553 52.2C21.7553 53.7509 20.4781 55.0047 18.8936 55.0047C17.314 55.0047 16.0368 53.7461 16.0368 52.2C16.0368 50.6492 17.3188 49.3954 18.8936 49.3954C18.9417 49.3954 18.9897 49.3954 19.0329 49.4001L25.3852 43.1638L0 43.1544V7.4053C0 7.38173 0 7.36287 0 7.3393V3.54474C0 3.13464 0.345703 2.80468 0.773031 2.80468H27.3538V0H31.3101V2.80468H58.227C58.6543 2.80468 59 3.13936 59 3.54474V7.3393C59 7.35345 59 7.36287 59 7.37701V43.1496H33.3844V43.1544ZM12.9111 29.5599L24.0792 18.8408C26.8448 21.556 29.5816 24.2428 32.3761 26.9532L39.7751 19.5998L36.342 16.2294L46.0025 16.1446V25.7088L42.7039 22.4704C39.2661 25.8879 35.8427 29.2959 32.3953 32.6851L24.0216 24.568L15.8399 32.4353L12.9111 29.5599ZM54.6355 10.243H4.28288V38.8271H54.6355V10.243Z"
                                            fill="#0E0E2A"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_498_5732">
                                            <rect width="59" height="55" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>

                                <div class="card__content">
                                    <p class="card__title">Training Programs</p>
                                    <p class="card__description">Our training services equip candidates with the technical and
                                        soft skills required to succeed in the ever-evolving IT landscape. We focus on bridging
                                        skill gaps to enhance job readiness and career growth.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mt-5" data-aos="fade-up">
                            <div class="sahdevCard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                                    <g clip-path="url(#clip0_444_40394)">
                                        <path
                                            d="M29.7917 45.8334C43.5417 43.5417 48.125 32.0834 48.125 22.9167M32.0833 36.6667L27.5 45.8334L36.6667 52.7084M0 20.625L9.16667 13.75M9.16667 13.75L16.0417 22.9167M9.16667 13.75C4.58333 27.5 6.875 38.9584 20.625 45.8334M45.8333 16.0417C36.6667 2.29171 22.9167 2.29171 13.75 9.18067M45.8333 16.0417V4.58337M45.8333 16.0417H34.375"
                                            stroke="#0E0E2A" stroke-width="5"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_444_40394">
                                            <rect width="55" height="55" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div class="card__content">
                                    <p class="card__title">Staffing Solutions</p>
                                    <p class="card__description">We deliver customized staffing services to meet the specific
                                        needs of our clients. Whether it’s temporary, contract-based, or permanent staffing, our
                                        solutions are tailored for success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Section5 />
        </>
    )
}

export default Itstaffing