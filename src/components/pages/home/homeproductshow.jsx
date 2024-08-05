import React, { useEffect, useState } from 'react';
import './homeproductshow.css';

export default function Homeproductshow() {

    return (
        <>

            <div class="section">
                <div class="section-wrapper">
                    <div class="content-wrapper show-textsecod-container">
                        <div class="content content-1">
                            <div class="mobile-visual">
                                <img
                                    class="card-img"
                                    src="/assets/images/productimages/home/productshowone.png"
                                    alt="Fantasy warrior  - Video game character"
                                />
                            </div>
                            <div class="meta">
                                <h2 class="headline">
                                    More Soft, More Comfy
                                </h2>
                                <p class="desc">
                                    Come with fine invisible stitching to provide you with the best comfort
                                </p>
                            </div>
                        </div>
                        <div class="content content-2">
                            <div class="mobile-visual">
                                <img
                                    class="card-img"
                                    src="/assets/images/productimages/home/productshowtwo.png"
                                    alt="Green haired ninja in armor - Video game character"
                                />
                            </div>
                            <div class="meta">
                                <h2 class="headline">
                                    Durable Rib Collar
                                </h2>
                                <p class="desc">
                                    Come with fine invisible stitching to provide you with the best comfort
                                </p>
                            </div>
                        </div>
                        <div class="content content-3">
                            <div class="mobile-visual">
                                <img
                                    class="card-img"
                                    src="/assets/images/productimages/home/productshowthree.png"
                                    alt="Female warrior in armor - Video game character"
                                />
                            </div>
                            <div class="meta">
                                <h2 class="headline">
                                    Master the
                                </h2>
                                <p class="desc">
                                    Come with fine invisible stitching to provide you with the best comfort
                                </p>
                            </div>
                        </div>
                        {/* <div class="content content-4">
                            <div class="mobile-visual">
                                <img
                                    class="card-img"
                                    src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-4.avif"
                                    alt="Agile warrior - Video game character"
                                />
                            </div>
                            <div class="meta">
                                <h2 class="headline">
                                    Rise as the <span class="text-highlight">Champion</span>
                                </h2>
                                <p class="desc">
                                    Lead your team to victory with unparalleled strength and
                                    unwavering determination.
                                </p>
                            </div>
                        </div> */}
                    </div>
                    <div class="visual">
                        <div class="card-wrapper">
                            <div class="card card-1">
                                <img
                                    class="card-img"
                                    src="/assets/images/productimages/home/productshowone.png"
                                    alt="Fantasy warrior  - Video game character"
                                />
                            </div>
                            <div class="card card-2">
                                <img
                                    class="card-img"
                                    src="/assets/images/productimages/home/productshowtwo.png"
                                    alt="Green haired ninja in armor - Video game character"
                                />
                            </div>
                            <div class="card card-3">
                                <img
                                    class="card-img"
                                    src="/assets/images/productimages/home/productshowthree.png"
                                    alt="Female warrior in armor - Video game character"
                                />
                            </div>
                            {/* <div class="card card-4">
                                <img
                                    class="card-img"
                                    src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-4.avif"
                                    alt="Agile warrior - Video game character"
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
