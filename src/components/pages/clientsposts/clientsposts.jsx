import React, { useEffect } from 'react';
import './clientposts.css';

export default function Clientsposts() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/../myscript.js'; // Path to your external script
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup script on component unmount
        };
    }, []);

    return (
        <>
            <div className='clientpost-main'>
                <main>
                    <section class="content">
                        <div class="grid grid--1">
                            <div class="grid-wrap">
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/FsrvVxCT/1.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/7LHqY8jM/6.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/bYH8n5gG/3.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/bYH8n5gG/3.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/Y9FkGQy8/TrakeXcel-Read-insights-and-tips-from-our-team.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/tJ5jH1Jd/4.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/bYH8n5gG/3.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/nzfC9VsT/65377df662e1494edd8d5e15_Captura_de_pantalla_2023-09-19_a_la(s)_12.38_2.webp')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/15z16QjN/7.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/x8sV6M2h/306097846_392786893005788_1065876871316666649_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/18.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/19.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/21.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/15z16QjN/7.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/x8sV6M2h/306097846_392786893005788_1065876871316666649_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/15z16QjN/7.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/27.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/x8sV6M2h/306097846_392786893005788_1065876871316666649_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/30.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/31.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/15z16QjN/7.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/34.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/x8sV6M2h/306097846_392786893005788_1065876871316666649_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/37.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/39.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/x8sV6M2h/306097846_392786893005788_1065876871316666649_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/15z16QjN/7.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/43.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/44.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/x8sV6M2h/306097846_392786893005788_1065876871316666649_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/15z16QjN/7.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>

                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/43.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/44.jpg')" }}></div>
                                </div>
                            </div>
                        </div>
                        <h3 class="content__title uzih3"></h3>
                    </section>
                    <section class="content content--spacing">
                        <div class="grid grid--5">
                            <div class="grid-wrap">
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/FsrvVxCT/1.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/7LHqY8jM/6.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/bYH8n5gG/3.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/bYH8n5gG/3.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/Y9FkGQy8/TrakeXcel-Read-insights-and-tips-from-our-team.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/tJ5jH1Jd/4.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/bYH8n5gG/3.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/nzfC9VsT/65377df662e1494edd8d5e15_Captura_de_pantalla_2023-09-19_a_la(s)_12.38_2.webp')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/15z16QjN/7.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/x8sV6M2h/306097846_392786893005788_1065876871316666649_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/18.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/19.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/21.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/15z16QjN/7.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/x8sV6M2h/306097846_392786893005788_1065876871316666649_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/15z16QjN/7.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/27.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/x8sV6M2h/306097846_392786893005788_1065876871316666649_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/30.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/31.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/15z16QjN/7.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/34.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/x8sV6M2h/306097846_392786893005788_1065876871316666649_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/37.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/39.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/x8sV6M2h/306097846_392786893005788_1065876871316666649_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/15z16QjN/7.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/43.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/44.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/x8sV6M2h/306097846_392786893005788_1065876871316666649_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/15z16QjN/7.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>

                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/FsrvVxCT/1.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/7LHqY8jM/6.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/bYH8n5gG/3.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/bYH8n5gG/3.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/Y9FkGQy8/TrakeXcel-Read-insights-and-tips-from-our-team.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/tJ5jH1Jd/4.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/bYH8n5gG/3.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/nzfC9VsT/65377df662e1494edd8d5e15_Captura_de_pantalla_2023-09-19_a_la(s)_12.38_2.webp')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/15z16QjN/7.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/jSXbBw9R/318475533_933555457608287_8846856192816240898_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/x8sV6M2h/306097846_392786893005788_1065876871316666649_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/18.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/19.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('img/21.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/15z16QjN/7.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/5NMNdYFM/Fabric.png')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/x8sV6M2h/306097846_392786893005788_1065876871316666649_n.jpg')" }}></div>
                                </div>
                                <div class="grid__item">
                                    <div class="grid__item-inner" style={{ backgroundImage: "url('https://i.postimg.cc/15z16QjN/7.jpg')" }}></div>
                                </div>
                            </div>
                        </div>
                        <h3 class="content__title">An infinite universe<br /> of moments unfolding</h3>
                    </section>
                    <div className='client-post-sec'>
                        <div className='row'>
                            <div className='col-sm-3'></div>
                            <div className='col-sm-3'></div>
                            <div className='col-sm-3'></div>
                            <div className='col-sm-3'></div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
